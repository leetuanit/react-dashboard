import React, { Component } from 'react';

import Sidebar from './components/Sidebar';
//import Topbar from './components/Topbar';
//import Footer from './components/Footer';

export default class extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Sidebar />
      </div>
    );
  }
}