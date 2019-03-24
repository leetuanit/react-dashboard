import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import dashboardRouter from './routes/dashboard';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
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
          <Switch>
            {
              dashboardRouter.map((route, index) => {
                return (<Route key={index} path={route.path} component={route.view} />);
              })
            }
            <Redirect to="/index" />
          </Switch>
          <Footer />
        </div>
      </div >

    );
  }
}