import React, { Component } from 'react';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
//import Footer from './components/Footer';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      sidebarToggled: false
    }
    this.sidebarToggledClick = this.sidebarToggledClick.bind(this);
  }
  sidebarToggledClick() {
    this.setState({
      sidebarToggled: !this.state.sidebarToggled
    });
  }
  render() {
    return (
      <div className="page-wrapper">
        <Sidebar isOpen={this.state.sidebarToggled} />
        <div className="main-panel">
          <Topbar sidebarToggledClick={this.sidebarToggledClick} />
        </div>
      </div>
    );
  }
}