import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

const Menu = () => {
  return (
    <div className="menu">
      <Navbar color="faded" dark expand="md">
        <NavbarBrand href="/">Data Engine Guide</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" exact to="/chapter">
              Chapter
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              한국어
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>한국어</DropdownItem>
              <DropdownItem disabled>English</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Menu;
