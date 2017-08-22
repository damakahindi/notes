import React from 'react';
import PropTypes from 'prop-types';
import { Col, Button } from 'react-bootstrap';
import { DotLoader } from 'react-spinners';

const Note = ({ id, name, description, isSharing, shareTwitter }) => (
  <Col xs={6} md={4}>
    <h3>{ name }</h3>
    <p>{ description }</p>

    {
      isSharing ?
        <DotLoader /> : <Button bsStyle="primary" bsSize="large" onClick={() => { shareTwitter(id); }}>Share</Button>
    }


  </Col>
);


Note.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isSharing: PropTypes.bool.isRequired,
  shareTwitter: PropTypes.func.isRequired,
};

export default Note;
