import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import classNames from 'classnames';
import { push } from 'react-router-redux';
import { loginSagas, changePage } from '../../actions/userAction';
import {
    LOCATION_CHANGE
} from 'react-router-redux';

class LoginPage extends Component {

	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
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
		                                    <input className="form-control" placeholder="Mobile" name="mobile" ref="mobile" />
		                                </div>
		                                <div className="form-group">
		                                    <input className="form-control" placeholder="Password" name="password" ref="password" type="password" />
		                                </div>
		                                <button type="submit" onClick={this.handleLogin} className="btn btn-lg btn-success btn-block">Login</button>
		                            </div>
		                        </div>
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
			password: this.refs.password.value
		};
		console.log('@@@@@@');
		console.log(data);
		console.log('@@@@@@@');
		this.props.dispatch(loginSagas(data));
		// this.props.dispatch(push('loginotp'));
		// this.props.dispatch(changePage(data));
		// browserHistory.push('/loginotp');
	}
}

LoginPage.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(LoginPage);
