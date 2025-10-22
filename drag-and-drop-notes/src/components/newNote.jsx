import { useEffect, useState } from "react";

const NewNote = ({ notes = [], setNotes = () => {} }) => {
  const [note, setNote] = useState();
  const addNote = () => {
    if (!note.trim()) return;

    const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const newNote = createNote(existingNotes.length);
    const updatedNotes = [...existingNotes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNote(""); // clear input
  };

  const createNote = (id) => {
    const newNote = { id: id + 1, description: note };
    return newNote;
  };

  useEffect(() => {
    const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const largestIdCount = existingNotes.length;
    const newNote = createNote(largestIdCount);
  }, []);
  return (
    <>
      <input onInput={(e) => setNote(e.target.value)} />
      <button onClick={addNote}> Add Note</button>
    </>
  );
};
export default NewNote;
