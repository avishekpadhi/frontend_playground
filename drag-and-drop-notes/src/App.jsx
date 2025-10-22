import { useState } from "react";
import "./App.css";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      description: "This is the first node description",
    },
    {
      id: 2,
      description:
        "This is the real second node larger description for better visual separation and cleanliness",
    },
    {
      id: 3,
      description: "Third description fols. Cheers !!",
    },
  ]);

  return (
    <>
      <Notes notes={notes} setNotes={setNotes} />
    </>
  );
}

export default App;
