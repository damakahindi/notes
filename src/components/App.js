import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';


export default class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Jumbotron>
          <h1> Hello you </h1>
        </Jumbotron>

        {React.cloneElement(this.props.children, this.props) }
      </div >
    );
  }
}
