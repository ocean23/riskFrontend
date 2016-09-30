import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';
/* Common Components */
import SidebarComponent from '../components/common/SidebarComponent';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { doGet } from '../actions/asyncAction';
import { INIT_PERMISSIONS, SUCCESS_LOGIN } from '../constants/UserConstants';
import { initPermision } from '../actions/userAction';

class App extends Component {
  constructor(props) {
    super(props);
  }

	componentDidMount() {
	}

  render() {
  	this.loadPermissions();
    return (
      <MainContainer {...this.props}>
        <SidebarComponent />
        <Header />
        <div id="body">
          <Grid>
            <Row>
              <Col xs={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }

	loadPermissions() {
		const url = 'http://192.168.110.4:6699/iam/my/role/buttons';
		const responsePromise = doGet(url);
		responsePromise.then(
			resObj => this.loadPermissionsHandler(resObj), resStr => {console.log('internal error=' + resStr);}
			);
	}

	loadPermissionsHandler(resObj) {
		console.log('######');
		console.log(resObj);
		console.log(resObj.status);
		console.log('#######');
		if (resObj.status === 401) {
			browserHistory.push('login');
		} else if (resObj.status === 200) {
			console.log('@@@@@@@');
			console.dir(resObj);
			const permissions = [];
			for (const item of resObj.data) {
				permissions.push(item.permission);
			}
			console.log('#####');
			console.log(permissions);
			console.log('#####');
			const perm = {
				permissions
			};
			console.log('$#$#$#$#');
			console.log(this.props.dispatch);
			const user = {
				username: '123456',
				xUserToken: '888888'
			};
			// this.props.dispatch({type: SUCCESS_LOGIN, user});
			console.log('@#@#@#@#@#@#@');
			// this.props.dispatch({type: INIT_PERMISSIONS, user});
			this.props.dispatch(initPermision(perm));
			console.log('@@@@@@@@');
		}
	}
}

App.propTypes = {
	children: React.PropTypes.oneOfType([
	  React.PropTypes.arrayOf(React.PropTypes.node),
	  React.PropTypes.node
	]),
  dispatch: PropTypes.func.isRequired
};

export default connect()(App);
