import React, { createRef, useEffect, useRef } from "react";
import Note from "./Note";

const Notes = ({ notes = [], setNotes = () => {} }) => {
  const determineNewPosition = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  };

  const handleDragStart = (note, e) => {
    const id = note.id;
    const noteRef = noteRefs.current[id].current;
    const rect = noteRef.getBoundingClientRect();
    console.log(rect);
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const startPos = note;

    const handleMouseUp = (e) => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);

      const finalRect = noteRef.getBoundingClientRect();
      const newPostion = { x: finalRect.left, y: finalRect.top };

      if (false) {
      } else {
        updateNodePosition(id, newPostion);
      }
    };

    const updateNodePosition = (id, newPostion) => {
      const updatedNotes = notes.map((note) =>
        note.id === id ? { ...note, position: newPostion } : note
      );
      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    };

    const handleMouseMove = (e) => {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;

      noteRef.style.left = `${newX}px`;
      noteRef.style.top = `${newY}px`;
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = notes.map((note) => {
      const savedNote = savedNotes.find((n) => n.id === note.id);

      if (savedNote) {
        return { ...note, position: savedNote.position };
      } else {
        // const position = determineNewPosition();
        return { ...note, position: determineNewPosition() };
      }
    });

    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }, []);

  const noteRefs = useRef([]);
  return (
    <>
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            initialPosition={note.position}
            ref={
              noteRefs.current[note.id]
                ? noteRefs.current[note.id]
                : (noteRefs.current[note.id] = createRef())
            }
            note={note}
            onMouseDown={(e) => handleDragStart(note, e)}
          />
        );
      })}
    </>
  );
};

export default Notes;
