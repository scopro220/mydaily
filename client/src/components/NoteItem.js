import React from "react";

const NoteItem = ({ title, description }) => {
  return (
    <>
      <li className="note">
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </>
  );
};

export default NoteItem;
