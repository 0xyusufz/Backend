import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const useNoteContext = createContext();
const NotesContext = (props) => {
  const fetchData = async () => {
    const res = await axios.get("http://localhost:3000/api/notes/");
    setdata(res.data.allNotes);
  };
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetchData();
  },[]);
  return (
    <>
      <useNoteContext.Provider value={{data,fetchData,setdata}}>
        {props.children}
      </useNoteContext.Provider>
    </>
  );
};

export default NotesContext;
