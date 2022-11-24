import React, { useState } from "react";

function Creatingarea(props) {
  const [note, setNote] = useState({
    title: "title value",
    content: "content value",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleClick(e) {
    props.onAdd(note);
    e.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div className="creatingarea">
      <form>
        <input
          name="title"
          value={note.title}
          type="text"
          placeholder="Title"
          onChange={handleChange}
        />

        <textarea
          name="content"
          value={note.content}
          type="text"
          row="3"
          placeholder="Take a note..."
          onChange={handleChange}
        />

        <button onClick={handleClick}>➕</button>
      </form>
    </div>
  );
}

export default Creatingarea;
