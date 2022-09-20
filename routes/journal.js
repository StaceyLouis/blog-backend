const express = require("express")
const router = express.Router()
const Journal = require("../models/Journal")

//get all entries
router.get("/", async (req, res)=>{
    try {
        const journal = await Journal.find()
        res.json(journal)
    } catch(err){
        res.json({message: err})
    }
})

//get single entry
router.get("/:postId", async (req,res)=>{
    try {
        const journal = await Journal.findById(req.params.postId)
        res.json(journal)
    } catch(err){
        res.json({message: err})
    }
})

//post new entry
router.post("/", async (req,res)=>{
    const journal = new Journal({
        title: req.body.title,
        body: req.body.body
    })
    
    try {
        const saved = await journal.save()
        res.json(saved)
        console.log(journal)
    } catch(err){
        res.json({message: err})
    }
})

//edit entry 
router.patch("/:postId", async (req,res)=>{
    try {
        const journal = await Journal.updateOne(
            {_id: req.params.postId},
            {$set: {title : req.body.title}})
        res.json(journal)
    } catch(err){
        res.json({message: err})
    }
})

//delete entry 

router.delete("/:postId", async (req,res)=>{
    try {
        const journal = await Journal.remove({_id: req.params.postId})
        res.json(journal)
        console.log(journal)
    } catch(err){
        res.json({message: err})
    }
})


module.exports = router