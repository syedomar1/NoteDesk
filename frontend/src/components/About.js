// import React, { useContext, useEffect } from 'react'
import React from 'react'
// import noteContext from '../context/notes/noteContext'

const About = (props) => {
  return (
    <div className="container">
      <h1 className="my-3" style={{color:props.mode === 'dark'?'white': '#042743'}}>About NotesDesk</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Reminders at your Footstep</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            NoteDesk gives you a way to store any note quickly and efficiently which can be accessed updated or deleted. You would'nt blame your brain or get scoldings for forgetting when you have NoteDesk in your hands. A very secured login and authentification page to keep you safe.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" 
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            NotesDesk is a Cloud notebook and reminder tool that provides features to add, edit and delete notes. NotesDesk is a free open sourced software which is of zero cost. Thus it is suitable for writing text, storing text and ofcourse accessing the notes.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This cloud Notebook software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to store as many notes you would want to which your brain might forget, But do not forget that NoteDesk is there to keep you reminded.
            </div>
          </div>
        </div>
      {/* This is About {a.state.name} and he is in class {a.state.class}; */}
    </div>
    <div style={{minHeight: '100vh', position: 'absolute', paddingTop: '60px', paddingBottom: '60px' }}>
        <footer style={{ textAlign: 'center', position:'fixed', bottom: '0', left: '0', right: '0', width: '100%', padding: '10px', color: '#00475d', backgroundColor: 'rgba(64, 154, 181, 0.5)'}}>
          Made with ❤️️ by Syed Omar Albeez
        </footer>
      </div>
    </div>
  )
}

export default About
