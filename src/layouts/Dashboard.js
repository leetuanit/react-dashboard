import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
          <div id="sidebar" className="sidebar">
            <div className="logo">
              LOGO
            </div>
            <hr />
            <div className="sidebar-wrapper">
              <Sidebar />
            </div>
          </div>
          <div id="main-panel" className="main-panel">
            <Navbar />
          </div>
      </div>
    );
  }
}
export default App;