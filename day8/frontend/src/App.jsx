import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
const App = () => {
  const [notes, setnotes] = useState([]);
  useEffect(() => {
    async function dataFetching() {
      const data = await axios.get("http://localhost:3000/api/notes/");
      const allNotes = data.data.notes;
      setnotes(allNotes);
    }
    dataFetching();
  }, []);
  return (
    <>
      <div className="notes">
        {notes.map(function (elem) {
          return (
            <div className="note">
              <h1>{elem.title}</h1>
              <p>{elem.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
