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

  const notesInitial = [
    {
      _id: "658ae4bfd17b3089d1f2df1c",
      user: "65872d8ba41b108114a06597",
      title: "New Updated Note",
      description: "Study at 9am",
      tag: "reminder",
      date: "2023-12-26T14:35:43.199Z",
      __v: 0,
    },
    {
      _id: "658ccf926a96685d98b43a2d",
      user: "65872d8ba41b108114a06597",
      title: "Sleep",
      description: "12 have to sleep",
      tag: "personal",
      date: "2023-12-28T01:29:54.918Z",
      __v: 0,
    },
    {
      _id: "658ccfa76a96685d98b43a2f",
      user: "65872d8ba41b108114a06597",
      title: "Play Time",
      description: "Go to play at 4pm",
      tag: "personal",
      date: "2023-12-28T01:30:15.626Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial)

  return (
    // <NoteContext.Provider value={{state, update}}>
    <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
