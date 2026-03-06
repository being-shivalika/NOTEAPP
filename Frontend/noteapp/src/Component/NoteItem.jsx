function NoteItem({ note, index, onDelete }) {
  return (
    <div className="h-55 w-md bg-orange-100 border rounded-md m-10 p-5 justify-center">
      <h3 className="font-bold text-amber-400 m-2 text-2xl">{note.title}</h3>
      <p className="m-2">{note.discription}</p>
      <button
        onClick={() => onDelete(index)}
        className="bg-red-600 rounded-md border m-2 p-2"
      >
        Delete
      </button>
    </div>
  );
}

export default NoteItem;
