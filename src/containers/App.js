import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory, withRouter } from 'react-router';
import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';
import Alert from 'react-s-alert';
import ImmutablePropTypes from 'react-immutable-proptypes';
/* Common Components */
import SidebarComponent from '../components/common/SidebarComponent';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { doGet } from '../actions/asyncAction';
import { SUCCESS_LOGIN } from '../constants/UserConstants';

function mapStateToProps(state) {
  return {
  	username: state.getIn(['user', 'username']),
    permissions: state.getIn(['user', 'permissions'])
  };
}

class App extends Component {
  constructor(props) {
    super(props);
  }

	componentWillMount() {
		console.log('enter componentDidMount');
		// 处理登陆后，又刷新页面的情况, 假如session里面有值，就用它重新初始化redux的storage
		if (!this.props.username && this.props.permissions.isEmpty()) {
			const userSessionStr = sessionStorage.getItem('userSession');
			if (userSessionStr) {
				const user = JSON.parse(userSessionStr);
				console.log('-------------');
				console.log(user);
				console.log('-----------------');
				this.props.dispatch({type: SUCCESS_LOGIN, user});
			} else {
				browserHistory.push('login');
			}
		}
	}

  render() {
  	console.log('enter render!');
  	console.log(this.props.username);
  	console.log(this.props.permissions);
  	console.log('enter render');
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
}

App.propTypes = {
	children: React.PropTypes.oneOfType([
	  React.PropTypes.arrayOf(React.PropTypes.node),
	  React.PropTypes.node
	]),
	username: PropTypes.string,
	permissions: ImmutablePropTypes.list,
  dispatch: PropTypes.func.isRequired
};

export default connect(
	mapStateToProps
	)(App);
