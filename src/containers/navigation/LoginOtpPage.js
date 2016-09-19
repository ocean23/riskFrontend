import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import { LOGIN_OTP_SAGAS } from '../../constants/UserConstants';

function mapStateToProps(state) {
  return {
    username: state.getIn(['user', 'username']),
    password: state.getIn(['user', 'password'])
  };
}

class LoginOtpPage extends Component {

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
		                        <h3 className="panel-title">input otp</h3>
		                    </div>
		                    <div className="panel-body">
		                        <div>
		                            <div>
		                                <div className="form-group">
		                                    <input className="form-control" placeholder="otp" name="otp" ref="otp" />
		                                </div>
		                                <button type="submit" onClick={this.handleLogin} className="btn btn-lg btn-success btn-block">提交</button>
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
			username: this.props.username,
			password: this.props.password,
			otp: this.refs.otp.value
		};
		this.props.dispatch({type: LOGIN_OTP_SAGAS, userOtp: data});
	}
}

LoginOtpPage.propTypes = {
	username: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	dispatch: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps
)(LoginOtpPage);
