import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import {
  SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn,
  LoremIpsum, Grid, Row, Col, FormControl,
  Label, Progress, Icon,
  SidebarDivider
} from '@sketchpixy/rubix';

function mapStateToProps(state) {
  return {
    permissions: state.getIn(['user', 'permissions'])
  };
}

class ApplicationSidebar extends Component {

  render() {
  	let existMenu = false;
  	if (this.props.permissions !== undefined) {
	  	const permArray = this.props.permissions.toArray();
	  	const existMenuIndex = permArray.indexOf('btn_allow_rule_access');
	  	if (existMenuIndex !== -1) {
	  		existMenu = true;
	  	}
  	}
  	const hideMenu = !existMenu;
  	let redirectUrl = '';
		const userSessionStr = sessionStorage.getItem('userSession');
		if (userSessionStr !== null && userSessionStr !== undefined) {
			const user = JSON.parse(userSessionStr);
			redirectUrl = 'http://192.168.130.11:8080/#/app/search/' + user.xUserToken;
		}
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <FormControl type="text" placeholder="Search..." onChange={::this.handleChange} className="sidebar-search" style={{border: 'none', background: 'none', margin: '10px 0 0 0', borderBottom: '1px solid #666', color: 'white'}} />
              <div className="sidebar-nav-container">
                <SidebarNav style={{marginBottom: 0}} ref={(c) => {this._nav = c;}}>

                  <div className="sidebar-header">PAGES</div>
									<SidebarNavItem hidden={hideMenu} glyph="icon-outlined-pencil" name="Edit Todo" href="/todo/edit/:id"></SidebarNavItem>
                </SidebarNav>
								{ existMenu &&
										<a href={redirectUrl}>
											规则引擎
										</a>
								}
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

ApplicationSidebar.propTypes = {
	permissions: ImmutablePropTypes.list,
  dispatch: PropTypes.func.isRequired
};

export default connect(
	mapStateToProps
	)(ApplicationSidebar);
