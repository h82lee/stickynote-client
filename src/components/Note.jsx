import React from 'react';


function Note (props){


    // const [updatedNote, setUpdatedNote]= useState({
    //     updatedTitle:"",
    //     updatedContent:""
    // })


    // const handleUpdate = (updatedNote) => {
    //     props.handleUpdate(props.id, props.updatedNote)
    // }

    // function handleChange(event){
    //     const {value,name}=event.target
    //     setUpdatedNote(()=>{
    //         return {[name]:value}
    //     })
    // }
    const handleUpdate = () =>{
        props.handleUpdate(props.id)
    }

    const handleClick = ()=>{
        props.handleDelete(props.id)
    }

    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleUpdate}>✏️</button>
        <button onClick={handleClick}>✘</button>
    </div>
}

export default Note



{/* <form id="note">
<input 
type="text" 
name="updatedTitle"
value = {updatedNote.updatedTitle}
onChange = {handleChange}
/>
<input 
type="text" 
name="updatedContent"
value={updatedNote.updatedContent}
onChange = {handleChange}
/>
</form> */}