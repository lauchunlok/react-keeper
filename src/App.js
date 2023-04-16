import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import AddNote from "./components/AddNote";

function App() {
  /**
   * Cannot create id on the fly
   * Because if it does, a new id will given to the same element on every re-render
   * Then we cannot get a hold of it to perform anything e.g. delete or anything else
   */
  const [notes, setNotes] = useState([]);

  function addNewNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    // console.log(id);

    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  const noteEl = notes.map((note) => {
    return (
      <Note
        key={note.key}
        id={note.id}
        title={note.title}
        content={note.content}
        onDelete={deleteNote}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      <AddNote onAdd={addNewNote} />
      {noteEl}
      <Footer />
    </div>
  );
}

export default App;
