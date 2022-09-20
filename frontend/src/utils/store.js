import create from "zustand";

export const url = "https://blog-backend-six.vercel.app/"
 export const useStore = create(set =>({
    title: '',
    body:"",
    url: url,
    posts : [],
    fetch: async (url) =>{
        const res = await fetch(url)
        set({posts: await res.json()})
        console.log(res)
    },
    addEntry: (entry)=>
        set((state)=> ({
            title: entry.title,
            body: entry.body, 
            ...state.posts
 }))
    , 
    removeEntry: (id)=>
    set((state)=>({
        posts: state.posts.filter(entry => entry.id !== id),
    
    }))
}))


