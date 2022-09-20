import React, { useState } from 'react'
import { useStore, url } from '../../utils/store'
import { Container } from './JournalStyle'

const initialForm = {
    title:"",
    body:"'"
}
const Journal = () => {
    const [form, setForm] = useState(initialForm)
    const [entry, setEntry]= useState([])
    const getPosts = useStore(state => state.fetch)
    const addEntry = useStore(state=> state.addEntry)

    const onChange = (event) =>{
        const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    console.log(form.title, form.body)
       
    }
  return (
    <Container>
        <h1>Journal</h1>
        <form onClick={addEntry}>
            <label htmlFor='title'>Title</label><br/>
            <input id='title' name='title' onChange={onChange} /><br/>
            <label htmlFor='body'>Entry</label><br/>
            <input id='body' name='body' onChange={onChange}/>
            <br/>
            <button type='submit' >Post Entry</button>
            <button onClick={()=>{fetch()}}>get posts</button>

        </form>
    </Container>
  )
}

export default Journal