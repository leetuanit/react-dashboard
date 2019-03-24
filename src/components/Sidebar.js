import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../logo.svg';
import dashboardRouter from '../routes/dashboard';
export default class extends Component {
  render() {
    let classname = "sidebar";
    if (this.props.isOpen === true) {
      classname = classname + ' toggled';
    }
    return (
      <nav id="sidebar" className={classname}>
        <a className="logo" href="http://localhost:3000/board">
          <img src={Logo} alt="Logo" />
          <p>Dashboard</p>
        </a>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {dashboardRouter.map((route, index) => {
              return (
                <li key={index}>
                  <NavLink exact activeClassName="active" to={route.path}>
                    <i className={route.icon} />
                    <p>{route.title}</p>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}