import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn,
  LoremIpsum, Grid, Row, Col, FormControl,
  Label, Progress, Icon,
  SidebarDivider
} from '@sketchpixy/rubix';
import ApplicationSidebar from './ApplicationSidebar';

class DummySidebar extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className="sidebar-header">DUMMY SIDEBAR</div>
            <LoremIpsum query="1p" />
          </Col>
        </Row>
      </Grid>
    );
  }
}

class SidebarComponent extends Component {
  render() {
    return (
      <div id="sidebar">
        <div id="avatar">
          <Grid>
            <Row className="fg-white">
              <Col xs={4} collapseRight>
                <img src="/public/imgs/app/avatars/avatar0.png" width="40" height="40" />
              </Col>
              <Col xs={8} collapseLeft id="avatar-col">
                <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}>Anna Sanchez</div>
                <div>
                  <Progress id="demo-progress" value={30} color="#ffffff"/>
                  <a href="#">
                    <Icon id="demo-icon" bundle="fontello" glyph="lock-5" />
                  </a>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <SidebarControls>
          <SidebarControlBtn bundle="fontello" glyph="docs" sidebar={0} />
          <SidebarControlBtn bundle="fontello" glyph="chat-1" sidebar={1} />
          <SidebarControlBtn bundle="fontello" glyph="chart-pie-2" sidebar={2} />
          <SidebarControlBtn bundle="fontello" glyph="th-list-2" sidebar={3} />
          <SidebarControlBtn bundle="fontello" glyph="bell-5" sidebar={4} />
        </SidebarControls>
        <div id="sidebar-container">
          <Sidebar sidebar={0}>
            <ApplicationSidebar />
          </Sidebar>
          <Sidebar sidebar={1}>
            <DummySidebar />
          </Sidebar>
          <Sidebar sidebar={2}>
            <DummySidebar />
          </Sidebar>
          <Sidebar sidebar={3}>
            <DummySidebar />
          </Sidebar>
          <Sidebar sidebar={4}>
            <DummySidebar />
          </Sidebar>
        </div>
      </div>
    );
  }
}

export default connect()(SidebarComponent);
