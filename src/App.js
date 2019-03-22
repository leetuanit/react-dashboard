import React, { Component } from 'react';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      toggled: false
    }
    this.toggled = this.toggled.bind(this);
  }
  toggled() {
    this.setState({ toggled: !this.state.toggled });
  }
  render() {
    let sidebarClassName = this.state.toggled ? "sidebar toggled" : "sidebar";
    return (
      <div className="page-wrapper">
        <nav id="sidebar" className={sidebarClassName}>
          <Sidebar />
        </nav>
        <div className="main-panel">
          <Topbar toggled={this.toggled} />
          <div className="main-content"></div>
          <Footer />
        </div>
      </div>
    );
  }
}