import React, { useState } from "react";


function CreateArea({ setNotes, notes }) {
  let m;

  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  const submitNote = (e) => {
    e.preventDefault();
    if (localStorage.getItem("data")) {
      m = JSON.parse(localStorage.getItem("data"));
    } else {
      m = [];
    }
    m.push(note);
    console.log(m);
    setNotes(m);     
    localStorage.setItem("data", JSON.stringify(m));
    setNote({
      title: "",
      content: "",
    });
  };

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={(e)=>submitNote(e)}>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <button type="submit">➕ Note</button>
      </form>
    </div>
  );
}

export default CreateArea;
