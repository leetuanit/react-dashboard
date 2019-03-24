import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
export default class extends Component {
  render() {
    return (
      <Navbar light className="footer">
        Copyright &copy; 2019 by This site
      </Navbar>
    );
  }
}