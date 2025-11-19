import React from 'react';
import NoteCard from './NoteCard';

// Receives the array of notes and the edit/delete functions
const NoteList = ({ notes, onDelete, onEdit }) => {
  // Handle the case where there are no notes
  if (notes.length === 0) {
    return <p className="empty-message">No notes found. Add one!</p>;
  }

  return (
    <div className="note-list">
      {/* READ (Show Data): We map over the notes array.
        For each 'note' in the array, we render a <NoteCard>.
        We pass the note's data and the functions down as props.
      */}
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default NoteList;