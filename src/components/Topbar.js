import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class extends Component {
  constructor(props) {
    super(props);

    this.menuToggled = this.menuToggled.bind(this);
    this.state = {
      menuToggled: false,
    };
  }
  menuToggled() {
    this.setState({
      menuToggled: !this.state.menuToggled
    });
  }
  render() {
    return (
      <Navbar color="light" light expand="md">
        <div className="toggleSidebar" onClick={this.props.sidebarToggledClick}>
          <i className="pe-7s-way" />
        </div>
        <NavbarToggler onClick={this.menuToggled} />
        <Collapse isOpen={this.state.menuToggled} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
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
                  Reset
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}