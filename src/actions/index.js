import getTrends from '../helpers/post.js';

export function AddNote(note) {
  return {
    type: 'ADD_NOTE',
    name: note.name,
    description: note.description,
    isSharing: false,
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

// request post change is sharing to true
// recieve post change is fetching to false
function requestShare(id) {
  console.log('Request Share ');
  return {
    type: 'REQUEST_SHARE',
    id,
  };
}

export function Share(id) {
  return (dispatch) => {
    dispatch(requestShare(id));
    return getTrends()
      .then(response => response.json())
      .then(json => console.log('Json'))
      .catch(() => {
        console.log('Error');
      });
  };
}
