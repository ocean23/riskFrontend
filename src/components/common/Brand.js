import React, { Component } from 'react';
import {
  Navbar,
  Col } from '@sketchpixy/rubix';

class Brand extends Component {
  render() {
    return (
      <Navbar.Header {...this.props}>
        <Navbar.Brand tabIndex="-1">
          <a href="#">
            <img src="/public/imgs/common/logo.png" alt="rubix" width="111" height="28" />
          </a>
        </Navbar.Brand>
      </Navbar.Header>
    );
  }
}

export default Brand;
