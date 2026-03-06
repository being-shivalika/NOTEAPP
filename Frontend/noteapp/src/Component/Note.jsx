import { useState } from "react";

function NoteForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ title, discription });
    setTitle("");
    setDiscription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col border bg-amber-100 w-md h-90 m-15 border-r-4 rounded-xl shadow-lg p-10 justify-center align-middle"
    >
      <label className="text-2xl font-bold mb-4">Create a Note</label>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 m-r-10 m-l-10 hover:border-b-amber-300 bg-amber-50 rounded-md"
      />
      <label className="text-xl font-semibold mb-2">Description</label>
      <textarea
        placeholder="Description"
        value={discription}
        onChange={(e) => setDiscription(e.target.value)}
        className="border p-2 m-r-10 m-l-10 hover:border-b-amber-300 bg-amber-50 rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 m-10 hover:bg-blue-600 rounded-2xl w-80"
      >
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;
