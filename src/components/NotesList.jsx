import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';
import Note from './Note.jsx';

const NotesList = ({ notes, shareTwitter }) => (
  <Grid>
    <Row>
      {
        notes.length ?
          notes.map(note => (
            <Note key={note.id} {...note} shareTwitter={shareTwitter} />
          )) : <h1> No Notes Added </h1>
      }
    </Row>
  </Grid>
);

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  shareTwitter: PropTypes.func.isRequired,
};
export default NotesList;
