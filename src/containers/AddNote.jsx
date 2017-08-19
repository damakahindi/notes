import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button, Glyphicon, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AddNote } from '../actions';


class AddNotes extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    if (e.target.id === 'title') {
      this.setState({ title: e.target.value });
    } else {
      this.setState({ description: e.target.value });
    }
  }
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            const name = this.state.title.trim();
            const description = this.state.description.trim();

            e.preventDefault();
            if (!name || !description) {
              return;
            }
            this.props.dispatch(AddNote({ name, description }));
            this.setState({ title: '', description: '' });
          }}
        >

          <FormGroup >
            <InputGroup>
              <InputGroup.Addon>Title</InputGroup.Addon>
              <FormControl
                type="text"
                value={this.state.title}
                id="title"
                onChange={this.handleChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Addon>Description</InputGroup.Addon>
              <FormControl
                type="text"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </InputGroup>

          </FormGroup>

          <div style={{ margin: '10px' }}>
            <Button bsStyle="primary" type="submit" bsSize="large">
              <Glyphicon glyph="plus" />
                    Add Note
            </Button>
          </div>
        </form>
      </div>
    );
  }
}


export default connect()(AddNotes);
