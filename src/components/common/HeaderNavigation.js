import React, { Component } from 'react';
import {
  Nav,
  NavItem,
  Icon,
  Col } from '@sketchpixy/rubix';

class HeaderNavigation extends Component {
  render() {
    return (
      <Nav pullRight>
        <Nav>
          <NavItem className="logout" href="#">
            <Icon bundle="fontello" glyph="off-1" />
          </NavItem>
        </Nav>
      </Nav>
    );
  }
}

export default HeaderNavigation;

