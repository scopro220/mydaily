import React from "react";
import { CgTrash } from "react-icons/cg";

const NoteItem = ({ description, note, notes, setNotes }) => {
  const deleteHandler = () => {
    setNotes(notes.filter((el) => el.id !== note.id));
  };

  return (
    <>
      <li className="note">
        <p className="note-desc">{description}</p>
        <CgTrash onClick={deleteHandler} />
      </li>
    </>
  );
};

export default NoteItem;
