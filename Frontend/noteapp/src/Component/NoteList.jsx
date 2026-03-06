import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {notes.map((note, index) => (
        <NoteItem key={index} note={note} index={index} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NoteList;
