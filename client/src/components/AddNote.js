import React from "react";
import { CgAddR } from "react-icons/cg";

const AddNote = ({ text, setText, notes, setNotes }) => {
  const submitNoteHandler = (e) => {
    e.preventDefault();
    setNotes([...notes, { text: text, id: Math.random() * 1000 }]);
    setText("");
  };

  const inputTextHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <form className="notes-form" onSubmit={submitNoteHandler}>
        <CgAddR onClick={submitNoteHandler} />

        <label className="note-label">
          Note:
          <input
            className="note-desc"
            type="text"
            value={text}
            onChange={inputTextHandler}
          />
        </label>
      </form>
    </>
  );
};

export default AddNote;
