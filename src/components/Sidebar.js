import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import Logo from '../logo.svg';
export default class extends Component {
  render() {
    const links = [
      {
        href: "/dashboard",
        title: "Dashboard",
        icon: "pe-7s-graph"
      },
      {
        href: "/profile",
        title: "User profile",
        icon: "pe-7s-user"
      },
      {
        href: "/icon",
        title: "Icon",
        icon: "pe-7s-science"
      },
      {
        href: "/notification",
        title: "Notification",
        icon: "pe-7s-bell"
      }
    ];
    return (
      <nav id="sidebar" className="sidebar">
        <div className="wrapper">
          <div className="sidebar-background" />
          <div className="logo">
            <a href="http://localhost:3000" className="simple-text logo-mini">
              <div className="logo-img">
                <img src={Logo} alt="Something" />
              </div>
            </a>
            <a href="http://localhost:3000" className="simple-text logo-normal">Creative Tim</a>
          </div>
          <div className="content">
            <Nav vertical>
              {links.map((link, index) => {
                return (
                  <NavItem key={index}>
                    <NavLink href={link.href}>
                      <i className={link.icon} />
                      {link.title}
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </div>
        </div>
      </nav>
    );
  }
}