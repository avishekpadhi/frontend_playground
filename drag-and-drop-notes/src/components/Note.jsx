import React, { forwardRef } from "react";

const Note = forwardRef(({ note, initialPosition, ...props }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: `${initialPosition?.x}px`,
        top: `${initialPosition?.y}px`,
        border: "1px solid black",
        padding: "10px",
        width: "200px",
        cursor: "move",
        backgroundColor: "lightblue",
        color: "black",
      }}
      {...props}
    >
      {note.description}
    </div>
  );
});

export default Note;
