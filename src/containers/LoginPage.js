import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import Alert from 'react-s-alert';
import ProgressButton, { STATE } from 'react-progress-button';
import {
  Row,
  Col,
  Icon,
  Grid,
  Form,
  Badge,
  Panel,
  Button,
  PanelBody,
  FormGroup,
  ControlLabel,
  LoremIpsum,
  InputGroup,
  FormControl,
  HelpBlock,
  ButtonGroup,
  ButtonToolbar,
  PanelContainer,
} from '@sketchpixy/rubix';
import { SUCCESS_LOGIN } from '../constants/UserConstants';
import { login, loginOtp } from '../actions/userAction';
import { BUTTON_STATE } from '../constants/ButtonState';

class LoginPage extends Component {

	constructor(props) {
		super(props);
		this.state = { validAuthenticatioin: false, otp: '', username: '', password: '', submitState: STATE.NOTHING };
	}

	componentDidMount() {
		$('html').addClass('authentication');
	}

  componentWillUnmount() {
    $('html').removeClass('authentication');
  }

	render() {
		return (
			<div id="auth-container" className="login">
				<div id="auth-row">
					<div id="auth-cell">
            <Grid>
              <Row>
                <Col sm={4} smOffset={4} xs={10} xsOffset={1} collapseLeft collapseRight>
                  <PanelContainer controls={false}>
                    <Panel>
                      <PanelBody style={{padding: 0}}>
                        <div className="text-center bg-darkblue fg-white">
                          <h3 style={{margin: 0, padding: 25}}>Sign in to WeLabX</h3>
                        </div>
                        <div>
                          <div style={{padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25}}>
                          	{ this.state.validAuthenticatioin ?
			                            <Form onSubmit={::this.loginOtp}>
			                              <FormGroup controlId="otp">
			                              	<ControlLabel>手机验证码</ControlLabel>
			                              	<FormControl type="text" autoFocus className="border-focus-blue" placeholder="手机验证码" ref={input => {this.otp = input;}} />
			                              </FormGroup>
			                              <FormGroup>
			                                <Grid>
			                                  <Row>
			                                    <Col mdOffset={4} md={5}>
			                                      <Button outlined lg type="submit" bsStyle="blue">提交</Button>
			                                    </Col>
			                                  </Row>
			                                </Grid>
			                              </FormGroup>
			                            </Form>
		                            :
		                            <Form onSubmit={::this.submitLogin} id="signInForm" role="form" data-toggle="validator">
		                              <FormGroup controlId="mobile" validationState="error">
		                                <InputGroup bsSize="large">
		                                  <InputGroup.Addon>
		                                    <Icon glyph="icon-fontello-mail" />
		                                  </InputGroup.Addon>
		                                  <FormControl type="text" autoFocus required className="border-focus-blue" placeholder="mobile" ref={input => {this.mobile = input;}} />
		                                </InputGroup>
		                                <FormControl.Feedback />
		                                <div className="help-block with-errors"></div>
		                              </FormGroup>
		                              <FormGroup controlId="password">
		                                <InputGroup bsSize="large">
		                                  <InputGroup.Addon>
		                                    <Icon glyph="icon-fontello-key" />
		                                  </InputGroup.Addon>
		                                  <FormControl type="password" required className="border-focus-blue" placeholder="password" ref={input => {this.password = input;}} />
		                                </InputGroup>
		                                <FormControl.Feedback />
		                                <div className="help-block with-errors"></div>
		                              </FormGroup>
		                              <FormGroup>
		                                <Grid>
		                                  <Row>
		                                    <Col mdOffset={4} md={5}>
		                                    	<ProgressButton type="submit" state={this.state.submitState}>Submit</ProgressButton>
		                                    </Col>
		                                  </Row>
		                                </Grid>
		                              </FormGroup>
		                            </Form>
                          	}
                          </div>
                        </div>
                      </PanelBody>
                    </Panel>
                  </PanelContainer>
                </Col>
              </Row>
            </Grid>
					</div>
				</div>
			</div>
			);
	}

	submitLogin(e) {
		e.preventDefault();
		this.setState({ submitState: STATE.LOADING });
		const data = {
			username: ReactDOM.findDOMNode(this.mobile).value,
			password: ReactDOM.findDOMNode(this.password).value,
		};
		const responsePromise = login(data);
		responsePromise.then(
			resObj => this.loginHandler(resObj), resStr => this.loginException(resStr)
			);
	}

	loginOtp(e) {
		e.preventDefault();
		const data = {
			username: this.state.username,
			password: this.state.password,
			otp: ReactDOM.findDOMNode(this.otp).value,
		};
		const responsePromise = loginOtp(data);
		responsePromise.then(
			resObj => this.loginOtpHandler(resObj), resStr => this.loginException(resStr)
			);
	}

	loginHandler(resObj) {
		if (resObj.status === 200) {
			const username = ReactDOM.findDOMNode(this.mobile).value;
			const password = ReactDOM.findDOMNode(this.password).value;
			this.setState({ validAuthenticatioin: true, username, password });
		} else {
			this.setState({ submitState: STATE.ERROR });
			Alert.error(resObj.message);
		}
	}

	loginException(resStr) {
		this.setState({ submitState: STATE.ERROR });
		Alert.error(resStr);
	}

	loginOtpHandler(resObj) {
		if (resObj.status === 200) {
			const xUserToken = resObj.headers.get('X-USER-TOKEN');
			const user = {
				username: this.state.username,
				xUserToken
			};
			this.props.dispatch({type: SUCCESS_LOGIN, user});
			localStorage.setItem('xUserToken', xUserToken);
			browserHistory.push('/riskestimate');
		} else {
			this.setState({ error: [resObj] });
		}
	}
}

LoginPage.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(LoginPage);
