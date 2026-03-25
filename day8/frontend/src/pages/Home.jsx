import React from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { useNoteContext } from "../context/NotesContext";

const Home = () => {
  const { fetchData } = useContext(useNoteContext);
  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const { title, description } = e.target.elements;
      const titleValue = title.value;
      const descriptionValue = description.value;
      await axios.post("http://localhost:3000/api/notes", {
        title: titleValue,
        description: descriptionValue,
      });
      alert("note added successfully");
      fetchData();
      e.target.reset();
    } catch (e) {
      alert("error adding notes");
    }
  };
  return (
    <div className="Home">
      <Link to={"/allnotes"} className="links">
        <button>All Notes</button>
      </Link>
      <div className="input-area">
        <h1>Create Your Own Notes</h1>
        <form className="form-area" onSubmit={formHandler}>
          <div className="inputs">
            <input
              type="text"
              name="title"
              placeholder="Enter yout title"
              required
              className="uni"
            />
            <input
              type="text"
              name="description"
              placeholder="Enter your description"
              className="uni"
              required
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
