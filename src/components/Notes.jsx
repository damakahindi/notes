import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import AllnoteList from '../containers/AllnoteList.jsx';
import AddNote from '../containers/AddNote.jsx';


const Notes = () => (
  <div style={{ textAlign: 'center' }}>
    <AddNote />
    <AllnoteList />
  </div>
);

export default Notes;
