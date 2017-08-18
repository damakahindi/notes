// Create note
export function AddNote(note) {
  return {
    type: 'ADD_NOTE',
    name: note.name,
    description: note.description,
    id: Math.round(Math.random() * 100) + 1,
  };
}

// delete note 

export function DeleteNote(id) {
  return {
    type: 'DELETE_NOTE',
    id,
  };
}
