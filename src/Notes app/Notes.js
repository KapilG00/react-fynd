import React, { useState } from "react";

const Notes = () => {
  const [note, setNote] = useState([]); // array to store the notes with id.
  const [newNote, setNewNote] = useState(""); // array to temp store new note from user input.

  function addNote(event) {
    event.preventDefault(); // It prevents browser to reload for this component.

    if (newNote.trim()) {
      // if entry is not empty then only.
      console.log("newNote:", newNote);
      console.log("note.length:", note.length);
      console.log("note:", note);
      const Note = { text: newNote, id: note.length + 1 }; // note schema object.

      setNote([...note, Note]); // add previous note with the latest one.
      setNewNote(""); // set input to empty after adding.
    }
  }

  function onChangeHandler(event) {
    // change of value in input.
    setNewNote(event.target.value);
  }

  return (
    <div>
      <div>
        <form onSubmit={addNote}>
          <input
            value={newNote}
            placeholder="enter your text"
            onChange={onChangeHandler}
          />
          <button type="submit">Save</button>
        </form>
      </div>
      <div>
        <ul style={{ listStyleType: "number" }}>
          {note.map((note) => (
            <li key={note.id}>{note.text}</li>
          ))}
          {/* {note.map((note, index) => (
            <li key={index}>{note.text}</li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default Notes;
