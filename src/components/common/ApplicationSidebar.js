import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn,
  LoremIpsum, Grid, Row, Col, FormControl,
  Label, Progress, Icon,
  SidebarDivider
} from '@sketchpixy/rubix';

class ApplicationSidebar extends Component {

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <FormControl type="text" placeholder="Search..." onChange={::this.handleChange} className="sidebar-search" style={{border: 'none', background: 'none', margin: '10px 0 0 0', borderBottom: '1px solid #666', color: 'white'}} />
              <div className="sidebar-nav-container">
                <SidebarNav style={{marginBottom: 0}} ref={(c) => {this._nav = c;}}>

                  <div className="sidebar-header">PAGES</div>

								  <SidebarNavItem glyph="icon-outlined-todolist" name="All Todos" href="/main"></SidebarNavItem>
								  <SidebarNavItem glyph="icon-outlined-pencil" name="Edit Todo" href="/todo/edit/:id"></SidebarNavItem>
                </SidebarNav>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  handleChange(e) {
    this._nav.search(e.target.value);
  }
}

export default connect()(ApplicationSidebar);
