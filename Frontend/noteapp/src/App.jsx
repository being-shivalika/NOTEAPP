import { useEffect, useState } from "react";
import { fetchNotes, createNote, deleteNote } from "./services/api";
import NoteForm from "./Component/Note";
import NoteList from "./Component/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const loadNotes = async () => {
    const data = await fetchNotes();
    setNotes(data.notes);
  };

  useEffect(() => {
    const load = async () => {
      const data = await fetchNotes();
      setNotes(data.notes);
    };

    load();
  }, []);

  const handleCreate = async (note) => {
    await createNote(note);
    loadNotes();
  };

  const handleDelete = async (index) => {
    await deleteNote(index);
    loadNotes();
  };

  return (
    <>
      <center>
        <NoteForm onCreate={handleCreate} />
      </center>
      <NoteList notes={notes} onDelete={handleDelete} />
    </>
  );
}

export default App;
