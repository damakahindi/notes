import React from 'react';
import PropTypes from 'prop-types';
import { Col, Button } from 'react-bootstrap';

const Note = ({ name, description }) => (
  <Col xs={6} md={4}>
    <h3>{ name }</h3>
    <p>{ description }</p>
    <p>
      <Button bsStyle="primary" bsSize="large">Share</Button>&nbsp;
    </p>
  </Col>
);


Note.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Note;
