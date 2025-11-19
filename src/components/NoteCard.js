import React from 'react';

// Receives the note object and the functions to delete and edit
const NoteCard = ({ note, onDelete, onEdit }) => {
  return (
    <div className="note-card">
      <div className="note-card-content">
        <h3>{note.title}</h3>
        <p>{note.content}</p>
      </div>
      <div className="note-card-footer">
        <small>{new Date(note.timestamp).toLocaleDateString()}</small>
        <div className="note-card-actions">
          {/* UPDATE: Clicking "Edit" calls the onEdit function passed from App.js
            It passes the *entire* note object back up.
          */}
          <button className="btn-edit" onClick={() => onEdit(note)}>
            Edit
          </button>
          
          {/* DELETE: Clicking "Delete" calls the onDelete function passed from App.js
            It passes the note's ID back up.
          */}
          <button className="btn-delete" onClick={() => onDelete(note.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;