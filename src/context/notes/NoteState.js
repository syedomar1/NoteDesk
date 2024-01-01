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
  
  const host = "http://localhost:5000"
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial)
  
  // Get all Notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4NzJkOGJhNDFiMTA4MTE0YTA2NTk3In0sImlhdCI6MTcwMzU2NTM2Mn0.zV51rRnphX6I4ZvD0YQ7_baLWVRG3Qe53DRNrwz_gcE"
      },
    });
    const json = await response.json()
    console.log("getNotes:: ", json)
    setNotes(json)
  }

  // Add Note
  const addNote = async (title, description, tag) => {
    // TODO API call
    const response = await fetch(`${host}/api/notes/addnote/658ae4bfd17b3089d1f2df1c`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4NzJkOGJhNDFiMTA4MTE0YTA2NTk3In0sImlhdCI6MTcwMzU2NTM2Mn0.zV51rRnphX6I4ZvD0YQ7_baLWVRG3Qe53DRNrwz_gcE"
      },
      body: JSON.stringify(title, description, tag)
    });

    console.log("Added a new note with ID ");
    const note = {
      _id: "658ccfa76555685j521d98b43a2f",
      user: "65872d8ba41b108114a06597",
      title: title,
      description: description,
      tag: tag,
      date: "2023-12-28T01:30:15.626Z",
      __v: 0,
    };
    setNotes(notes.concat(note))
  }


  // Delete Note
  const deleteNote = (id) =>{
    // TODO API call
    console.log("Deleting a Node with ID: " + id)
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
  }
  // Edit Note
  const editNote =async(id,title,description,tag) =>{
    // TODO API call
    const response = await fetch(`${host}/api/notes/updatenote/658ae4bfd17b3089d1f2df1c`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4NzJkOGJhNDFiMTA4MTE0YTA2NTk3In0sImlhdCI6MTcwMzU2NTM2Mn0.zV51rRnphX6I4ZvD0YQ7_baLWVRG3Qe53DRNrwz_gcE"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();

    // Logic to edit client
    for(let index =0; index<notes.length;index++){
      const element =  notes[index];
      if(element._id === id){ 
        element.title=title;
        element.description=description;
        element.tag=tag;
    }
  }
};

  return (
    // <NoteContext.Provider value={{state, update}}>
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, setNotes, getNotes}}>
        {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
