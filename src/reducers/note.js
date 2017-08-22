export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description,
          isSharing: action.isSharing,
        },
      ];
    case 'DELETE_NOTE':
      const noteId = action.id;
      return state.filter(note => note.id !== noteId);
    default:
      return state;
  }
};
