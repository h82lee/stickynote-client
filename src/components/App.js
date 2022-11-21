import React, {useState, useEffect} from "react";
import Header from "./Header";
import Creatingarea from "./CreatingArea"
import Note from "./Note"
import Footer from "./Footer"
import Axios from "axios"

const App = () => {

    const [notes,setNotes]= useState([]);

    useEffect(()=> {
        Axios.get("http://localhost:3001/getNotes").then((response)=>{
            setNotes(response.data)
        })
    }, []);

    const addNote = (newNote) =>{
        Axios.post("http://localhost:3001/createNote", newNote).then((response)=>{
            setNotes([...notes,newNote])
        })
    }

    const updateNote = (id)=>{
        const updatedContent = prompt("enter your new content");

        Axios.put("http://localhost:3001/updateNote", {updatedContent:updatedContent,  id:id})
        .then(()=>{
            setNotes(notes.map((val)=>{
                return val._id == id ? {_id:id, title:val.title, content:updatedContent} : val
            }))
        })
    }



    const deleteNote = (id) => {
        Axios.delete(`http://localhost:3001/deleteNote/${id}`).then(()=>{
            setNotes(notes.filter((val)=>{
                return val._id !== id;
            }))
        })
    }         
     
    

    return (
        <div>
            <Header/>
            <Creatingarea onAdd={addNote}/>
            {notes.map((note)=> {
             return (<Note 
            id={note._id}
            key={note._id}
            title={note.title}
            content={note.content}
            handleDelete={deleteNote}
            handleUpdate={()=>{updateNote(note._id)}}
        />)})}
            <Footer/>
        </div>
    )
}

export default App;