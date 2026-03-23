import React, { act, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNoteContext } from "../context/NotesContext";
import "../style/Allnotes.css";
import axios from "axios";
const Allnotes = () => {
  const [editingid, seteditingid] = useState(null);
  const [titles, settitles] = useState("")
  const [descriptions, setdescriptions] = useState("")
  const handleeditClick =(elem)=>{
    seteditingid(elem._id)
    settitles(elem.title)
    setdescriptions(elem.description)
  }
  const { data, fetchData, setdata } = useContext(useNoteContext);
  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/notes/${id}`);
      setdata((prev) => prev.filter((item) => item._id !== id));
      alert("note deleted successfully");
    } catch (e) {
      alert("failed to  delete note, try again later");
    }
  };
  const updateHandler = async ()=>{
    try{
      await axios.patch(`http://localhost:3000/api/notes/${editingid}`,{
        title:titles,
        description:descriptions
      })
      alert("notes edited successfully")
      seteditingid(null)
      fetchData()
    }catch(e){
      alert("failed to edit notes")
      seteditingid(null)
    }
  }
  return (
    <div className="allNotes">
      <Link className="back-btn" to={"/"}>
        <h1>X</h1>
      </Link>
      <div className="note-title">
        <h1>ALL NOTES</h1>
      </div>
      <div className="notes-area">
        {data.map((elem) => (
          <div className="notes" key={elem._id}>
            {editingid === elem._id ? (
              <>
                <input defaultValue={elem.title} className="uni" onChange={(e)=>{settitles(e.target.value)}}/>
                <input defaultValue={elem.description} className="uni" onChange={(e)=>{setdescriptionse.target.value}}/>
                <div className="btnss">
                <button onClick={() => seteditingid(null)} className="dlt-btn">Cancel</button>
                <button className="dlt-btn" onClick={()=>{updateHandler(elem._id)}}>Confirm</button>
                </div>
              </>
            ) : (
              <>
                <h1>{elem.title}</h1>
                <p>{elem.description}</p>
                <div className="btnss">
                  <button
                    className="dlt-btn"
                    onClick={() => handleeditClick(elem)}
                  >
                    Edit
                  </button>

                  <button
                    className="dlt-btn"
                    onClick={() => deleteHandler(elem._id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allnotes;
