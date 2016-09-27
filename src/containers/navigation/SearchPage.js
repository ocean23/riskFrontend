import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import classNames from 'classnames';
import { push } from 'react-router-redux';
import { Button } from '@sketchpixy/rubix';
import { loginOtp } from '../../actions/userAction';
import { LOGIN_SAGAS } from '../../constants/UserConstants';

class SearchPage extends Component {

	constructor(props) {
		super(props);
		this.state = { username: '', password: '', xusertoken: '' };
		this.handleLogin = this.handleLogin.bind(this);
		this.test = this.test.bind(this);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="root-container">
		    <div className="container">
		        <div className="row">
		            <div className="col-md-4 col-md-offset-4">
		                <div className="login-panel panel panel-default">
		                    <div className="panel-heading">
		                        <h3 className="panel-title">WeDefend System</h3>
		                    </div>
		                    <div className="panel-body">
		                        <div>
		                            <div>
		                                <div className="form-group">
		                                    <input placeholder="Mobile" name="mobile" ref="mobile" />
		                                </div>
		                                <div className="form-group">
		                                    <input placeholder="Password" name="password" ref="password" type="password" />
		                                </div>
		                                <button type="submit" onClick={this.handleLogin} className="btn btn-lg btn-success btn-block">Login</button>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="panel-body">
                          <div className="form-group">
                              <input className="form-control" placeholder="xusertoken" name="xusertoken" ref="xusertoken" value={this.state.xusertoken}/>
                          </div>
		                    </div>
												<div>
												  <div><Button bsStyle="green">Green Button!</Button></div>
												  <div><Button bsStyle="red">Red Button!</Button></div>
												  <div><Button bsStyle="blue" outlined>Blue Button!</Button></div>
												</div>
		                </div>
		            </div>
		        </div>
		    </div>
			</div>
			);
	}

	handleLogin() {
		const data = {
			username: this.refs.mobile.value,
			password: this.refs.password.value,
			otp: '123456'
		};
		// this.props.dispatch({type: LOGIN_SAGAS, user: data});
		const chartsData = loginOtp(data);
		const self = this;
		chartsData.then(
			arg => this.test(arg), function(reason) {
			}
		);
	}
	// args => this.test(args)
	test(userToken) {
		// console.log('$$$$$$$$$$$$$$$$$$$$$');
		// console.log(userToken);
		// console.log(args);
		// console.log(args.headers.get('X-USER-TOKEN'));
		// console.log('$$$$$$$$$$$$$$$');
		// this.setState({ username: 'ttt', password: 'ppp', xusertoken: args.headers.get('X-USER-TOKEN') });
	}
}

SearchPage.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(SearchPage);
