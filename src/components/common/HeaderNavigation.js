import React, { Component, PropTypes } from 'react';
import Alert from 'react-s-alert';
import { logout } from '../../actions/userAction';
import { LOGOUT } from '../../constants/UserConstants';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
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
            <Icon bundle="fontello" glyph="off-1" onClick={::this.submitLogout}/>
          </NavItem>
        </Nav>
      </Nav>
    );
  }

  submitLogout() {
		const responsePromise = logout();
		responsePromise.then(
			resObj => this.loginHandler(resObj), resStr => this.loginException(resStr)
			);
  }

	loginHandler(resObj) {
		if (resObj.status === 200) {
			sessionStorage.removeItem('userSession');
			this.props.dispatch({type: LOGOUT});
			browserHistory.push('/login');
		} else {
			Alert.error(resObj.message);
		}
	}
}


HeaderNavigation.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(HeaderNavigation);
