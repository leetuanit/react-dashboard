import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import Logo from '../logo.svg';

export default class extends Component {
  render() {
    const links = [
      {
        href: "/index",
        title: "Index"
      },
      {
        href: "/users",
        title: "Users"
      },
      {
        href: "/profile",
        title: "Profile"
      },
      {
        href: "/notification",
        title: "Notification"
      }
    ];
    return (
      <div className="wrapper">
        <a href="/">
          <div className="header">
            <div className="icon">
              <img src={Logo} alt="" />
            </div>
            <div className="text">
              DASHBOARD
            </div>
          </div>
        </a>
        <div className="content">
          <Nav vertical>
            {links.map((link, index) => {
              return (
                <NavItem key={index}>
                  <NavLink href={link.href}>
                    <div className="icon">
                      <img src={Logo} alt="" />
                    </div>
                    <div className="text">
                      {link.title}
                    </div>
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </div>
      </div>
    );
  }
}