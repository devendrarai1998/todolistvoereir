import React, {  useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {v4 as uuid4} from "uuid"

function App() {
  const [notes, setNotes] = useState([]);

  const m = JSON.parse(localStorage.getItem("data"));

//delete function to delete notes from the list.
  function deleteNote(id) {
    let newNotes = [...m]
    newNotes.splice(id,1)
    setNotes(newNotes);
    localStorage.setItem("data",JSON.stringify(newNotes))
  }


return (
    <div>
      <Header />
      <CreateArea notes={notes} setNotes={setNotes} />
      {m?.map((noteItem, index) => 
          <Note
            key={uuid4()}
            id={index}
            note={noteItem}
            onDelete={deleteNote}
            notes={notes}
            setNotes={setNotes}
            />
            )}
    </div>
  );
}

export default App;
