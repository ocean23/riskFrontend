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
    permissions: state.getIn(['user', 'permissions']),
    xUserToken: state.getIn(['user', 'xUserToken'])
  };
}

class ApplicationSidebar extends Component {

  render() {
  	console.log('-----');
  	console.log(this.props.permissions);
  	console.log('---');
  	const permArray = this.props.permissions.toArray();
  	const existMenuIndex = permArray.indexOf('btn_allow_rule_access');
  	let existMenu = false;
  	if (existMenuIndex !== -1) {
  		existMenu = true;
  	}
  	console.log('######');
  	console.log(existMenu);
  	console.log('######');
  	const redirectUrl = 'http://192.168.130.11:8080/#/app/search/' + this.props.xUserToken;
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <FormControl type="text" placeholder="Search..." onChange={::this.handleChange} className="sidebar-search" style={{border: 'none', background: 'none', margin: '10px 0 0 0', borderBottom: '1px solid #666', color: 'white'}} />
              <div className="sidebar-nav-container">
                <SidebarNav style={{marginBottom: 0}} ref={(c) => {this._nav = c;}}>

                  <div className="sidebar-header">PAGES</div>
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
	permissions: ImmutablePropTypes.list.isRequired,
	xUserToken: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(
	mapStateToProps
	)(ApplicationSidebar);
