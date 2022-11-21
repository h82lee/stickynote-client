import React, { useState, useEffect } from "react";
import Header from "./Header";
import Creatingarea from "./CreatingArea";
import Note from "./Note";
import Footer from "./Footer";
import Axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    Axios.get("https://stickynote-server.onrender.com/getNotes").then(
      (response) => {
        setNotes(response.data);
      }
    );
  }, []);

  const addNote = (newNote) => {
    Axios.post(
      "https://stickynote-server.onrender.com/createNote",
      newNote
    ).then((response) => {
      setNotes([...notes, newNote]);
    });
  };

  const updateNote = (id) => {
    const updatedContent = prompt("enter your new content");

    Axios.put("https://stickynote-server.onrender.com/updateNote", {
      updatedContent: updatedContent,
      id: id,
    }).then(() => {
      setNotes(
        notes.map((val) => {
          return val._id == id
            ? { _id: id, title: val.title, content: updatedContent }
            : val;
        })
      );
    });
  };

  const deleteNote = (id) => {
    Axios.delete(
      `https://stickynote-server.onrender.com/deleteNote/${id}`
    ).then(() => {
      setNotes(
        notes.filter((val) => {
          return val._id !== id;
        })
      );
    });
  };

  return (
    <div>
      <Header />
      <Creatingarea onAdd={addNote} />
      {notes.map((note) => {
        return (
          <Note
            id={note._id}
            key={note._id}
            title={note.title}
            content={note.content}
            handleDelete={deleteNote}
            handleUpdate={() => {
              updateNote(note._id);
            }}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
