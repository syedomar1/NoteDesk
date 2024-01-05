import { useState } from "react";
import NoteContext from "./noteContext";
// import { useState } from 'react';

const NoteState = (props) => {
  // const s1 ={
  //     "name" : "Omar",
  //     "class" : "f1"
  // }
  // const [state, setState] = useState(s1);
  // const update = () =>{
  // setTimeout(() => {
  //     setState({
  //         "name" : "Zaid",
  //         "class" : "d6"
  //     })
  // }, 2000);
  // }
  
  const host = "http://127.0.0.1:10000"
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial)
  
  // Get all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('token')
      }
    });
    const json = await response.json()
    // console.log(json)
    setNotes(json)
  }

  // Add Note
  const addNote = async (title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });

    const note = await response.json();
    setNotes(notes.concat(note))
  }


  // Delete Note
  const deleteNote = async (id) =>{
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('token')
      },
    });
    const json = await response.json();
    console.log(json);

    // console.log("Deleting a Node with ID: " + id)
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
  }
  // Edit Note
  const editNote =async(id,title,description,tag) =>{
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit client
    for(let index =0; index<notes.length;index++){
      const element =  newNotes[index];
      if(element._id === id){ 
        newNotes[index].title=title;
        newNotes[index].description=description;
        newNotes[index].tag=tag;
        break;
    }
  }
  setNotes(newNotes);
};

  return (
    // <NoteContext.Provider value={{state, update}}>
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, setNotes, getNotes}}>
        {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
