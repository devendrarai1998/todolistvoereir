import React, { useState } from "react";
import Form from "./Form";

function Note({id,note,content,onDelete,notes,setNotes}) {
    

   const [edit,setEdit]=useState(false);

   const [newNote, setNewNote] = useState({
        title:note?.title,
        content:note?.content
    });

  function handleDelete(index) {
    onDelete(index);
  }

  const handleEdit=(idx)=>{
    setEdit(true)
  }


  function handleChange(event) {
    event.preventDefault()
    const { name, value } = event.target;

    setNewNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }



const handleSave=(e)=>{

     notes[id]=newNote
     setNotes(notes)
     localStorage.setItem("data",JSON.stringify(notes))
     setEdit(false)

}

  return (
    <div className="note">
        {
        edit?

     <Form
        formClassName={"create-note"}
        areaName={"content"}
        titleName="title"
        handleSubmit={handleSave}
        titleClassName={""}
        title={newNote.title}
        handleChange={handleChange}
        areaClassName=""
        content={newNote.content}
        buttonName={'Save'}  
    />
  :
  <>
  {parseInt(id)+1}
        <h1>{newNote?.title}</h1>
        <p>{newNote?.content}</p>    
  </> 

}
    <button onClick={()=>handleDelete(id)} >Delete</button>
    <button onClick={handleEdit} >Edit</button>   
    </div>
  );
}

export default Note;
