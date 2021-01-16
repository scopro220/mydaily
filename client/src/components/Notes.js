import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getLocalNotes = () => {
      if (localStorage.getItem("notes") === null) {
        localStorage.setItem("notes", JSON.stringify([]));
      } else {
        let localNotes = JSON.parse(localStorage.getItem("notes"));
        setNotes(localNotes);
      }
    };
    getLocalNotes();
  }, []);

  useEffect(() => {
    const saveLocalNotes = () => {
      localStorage.setItem("notes", JSON.stringify(notes));
    };
    saveLocalNotes();
  }, [notes]);

  return (
    <>
      <SideNav />
      <section className="notes-main display">
        <AddNote
          text={text}
          setText={setText}
          notes={notes}
          setNotes={setNotes}
        />
        <ul>
          {notes.map((note) => (
            <NoteItem
              notes={notes}
              setNotes={setNotes}
              note={note}
              description={note.text}
              key={note.id}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Notes;
