import React, { useState } from "react";
import { nanoid } from "nanoid";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function AddNote(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    key: nanoid(),
    id: nanoid(),
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNewNote((prevNewNote) => {
      return {
        ...prevNewNote,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    // Passing back new note to App

    props.onAdd(newNote);
    setNewNote({ title: "", content: "", key: nanoid(), id: nanoid() });

    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          //   type="text"
          placeholder="Title"
          onChange={handleChange}
          name="title"
          // React drives the input
          value={newNote.title}
        />
        <textarea
          //   type="text"
          onClick={expand}
          placeholder="Take a note..."
          onChange={handleChange}
          name="content"
          value={newNote.content}
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={true}>
          <Fab
            onClick={(event) => {
              handleSubmit(event);
              expand();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default AddNote;
