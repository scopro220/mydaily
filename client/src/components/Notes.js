import React from "react";
import SideNav from "./SideNav";
import NoteItem from "./NoteItem";

const Notes = () => {
  return (
    <>
      <SideNav />
      <section className="notes-main display">
        <ul>
          <NoteItem title="Title" description="Description" />
          <NoteItem title="Title" description="Description" />
          <NoteItem title="Title" description="Description" />
        </ul>
        <aside className="note-panel"></aside>
      </section>
    </>
  );
};

export default Notes;
