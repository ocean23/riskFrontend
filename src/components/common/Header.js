import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { Link, withRouter } from 'react-router';
import l20n, { Entity } from '@sketchpixy/rubix/lib/L20n';
import Brand from './Brand';
import HeaderNavigation from './HeaderNavigation';

import {
  Label,
  SidebarBtn,
  Dispatcher,
  NavDropdown,
  NavDropdownHover,
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  Badge,
  Button,
  Icon,
  Grid,
  Row,
  Radio,
  Col } from '@sketchpixy/rubix';

export default class Header extends React.Component {
  render() {
    return (
      <Grid id="navbar" {...this.props}>
        <Row>
          <Col xs={12}>
            <Navbar fixedTop fluid id="rubix-nav-header">
              <Row>
                <Col xs={3} visible="xs">
                  <SidebarBtn />
                </Col>
                <Col xs={6} sm={4}>
                  <Brand />
                </Col>
                <Col xs={3} sm={8} collapseRight className="text-right">
                  <HeaderNavigation />
                </Col>
              </Row>
            </Navbar>
          </Col>
        </Row>
      </Grid>
    );
  }
}
