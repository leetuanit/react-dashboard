import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import BurgerIcon from '../assets/icon_svg/Burger.svg';
export default class extends Component {
  render() {
    return (
      <div className="topbar">
        <div className="toggleMenu">
          <img src={BurgerIcon} alt="" onClick={this.props.toggled} />
        </div>
        <div className="menu">
          <Navbar light expand="xs">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Log out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Navbar>
        </div>
      </div>
    );
  }
}