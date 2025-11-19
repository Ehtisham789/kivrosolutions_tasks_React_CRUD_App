import React, { useState, useEffect } from 'react';
import './App.css'; // Import our new styles

// Import reusable components
import Header from './components/Header';
import Search from './components/Search';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

// A key for localStorage
const LOCAL_STORAGE_KEY = 'react-notes-app-data';

function App() {
  // --- STATE ---

  // This is the main array that holds all our notes.
  // We initialize it as an empty array.
  const [notes, setNotes] = useState([]);

  // This state holds the user's search query
  const [searchQuery, setSearchQuery] = useState('');

  // This state holds the *note* that is currently being edited.
  // If null, we are in "Add" mode. If it has a note object, we are in "Edit" mode.
  const [noteToEdit, setNoteToEdit] = useState(null);

  // --- LOCALSTORAGE (Persistence) ---

  // HOOK 1: Load notes from localStorage when the app first starts.
  useEffect(() => {
    // We use JSON.parse to turn the string from localStorage back into an array.
    const savedNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []); // The empty array [] means this effect runs only ONCE on mount.

  // HOOK 2: Save notes to localStorage *whenever the 'notes' state changes*.
  useEffect(() => {
    // We use JSON.stringify to turn the notes array into a string for storage.
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]); // The [notes] dependency array means this effect runs every time 'notes' changes.

  // --- CRUD FUNCTIONS ---

  /**
   * CREATE (Add Note)
   * This function is passed down to the <NoteForm> component.
   */
  const addNote = (title, content) => {
    const newNote = {
      // Use crypto.randomUUID() for a unique, random ID
      id: crypto.randomUUID(),
      title: title,
      content: content,
      timestamp: Date.now(), // Add a timestamp
    };
    // Update the state by adding the new note to the *end* of the existing array
    setNotes([...notes, newNote]);
  };

  /**
   * UPDATE (Edit Note)
   * This function is also passed down to the <NoteForm> component.
   */
  const updateNote = (id, updatedTitle, updatedContent) => {
    // Create a new array by mapping over the old one
    const updatedNotes = notes.map((note) =>
      note.id === id
        ? { ...note, title: updatedTitle, content: updatedContent } // If IDs match, return a *new* object with updated data
        : note // Otherwise, return the note unchanged
    );
    setNotes(updatedNotes); // Set the state to this new array
    setNoteToEdit(null); // Exit "Edit" mode by clearing the noteToEdit state
  };

  /**
   * DELETE (Delete Note)
   * This function is passed down through <NoteList> to <NoteCard>.
   */
  const deleteNote = (id) => {
    // Create a new array that *filters out* the note with the matching ID
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes); // Set the state to this new, smaller array
  };

  // --- RENDER LOGIC ---

  // READ (Filter for Search):
  // We create a *new* array for display based on the search query.
  // This does not modify the original 'notes' state.
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // We reverse the array so the newest notes appear first
  const notesToDisplay = [...filteredNotes].reverse();

  return (
    <div className="app-container">
      <Header />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {/* This single form handles both CREATE and UPDATE.
        'noteToEdit' tells it which mode to be in.
      */}
      <NoteForm
        addNote={addNote}
        updateNote={updateNote}
        noteToEdit={noteToEdit}
        setNoteToEdit={setNoteToEdit}
      />
      
      {/* This list component handles READ.
        We pass it the *filtered* notes to display.
        We also pass the functions it needs (deleteNote and setNoteToEdit).
      */}
      <NoteList
        notes={notesToDisplay}
        onDelete={deleteNote}
        onEdit={setNoteToEdit} // 'onEdit' on the card will call setNoteToEdit(note)
      />
    </div>
  );
}

export default App;