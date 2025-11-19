import React, { useState, useEffect } from 'react';

const NoteForm = ({ addNote, updateNote, noteToEdit, setNoteToEdit }) => {
  // Internal state for the form fields
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // This hook watches the 'noteToEdit' prop.
  // If 'noteToEdit' changes (i.e., user clicks "Edit"),
  // this effect runs and populates the form with that note's data.
  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    } else {
      // If we are not editing, clear the form
      setTitle('');
      setContent('');
    }
  }, [noteToEdit]); // Dependency array: only re-run if 'noteToEdit' changes

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (!title.trim() || !content.trim()) {
      alert('Please fill in both title and content.');
      return;
    }

    if (noteToEdit) {
      // If we are editing (noteToEdit has data), call UPDATE
      updateNote(noteToEdit.id, title, content);
    } else {
      // If we are not editing (noteToEdit is null), call CREATE
      addNote(title, content);
    }

    // Clear the form fields
    setTitle('');
    setContent('');
  };

  const handleCancel = () => {
    // Clear the form and reset the editing state in App.js
    setTitle('');
    setContent('');
    setNoteToEdit(null);
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      {/* The title changes based on whether we are editing or adding */}
      <h2>{noteToEdit ? 'Edit Note' : 'Add a New Note'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Take a note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <div className="form-actions">
        {/* Only show "Cancel" button when editing */}
        {noteToEdit && (
          <button type="button" className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        )}
        <button type="submit" className="btn-save">
          {noteToEdit ? 'Update Note' : 'Save Note'}
        </button>
      </div>
    </form>
  );
};

export default NoteForm;