import React, { Component } from 'react';
import Logo from '../logo.svg';
import { links } from '../variable';
export default class extends Component {
  render() {
    let classname = "sidebar";
    if (this.props.isOpen === true) {
      classname = classname + ' toggled';
    }
    return (
      <nav id="sidebar" className={classname}>
        <a className="logo" href="http://localhost:3000">
          <img src={Logo} alt="Logo" />
          <p>Dashboard</p>
        </a>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.href} className={link.active ? "active" : ""} aria-current={link.active ? "true" : "false"}>
                    <i className={link.icon} />
                    <p>{link.title}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}