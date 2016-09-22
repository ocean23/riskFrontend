import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
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
  LoremIpsum,
  InputGroup,
  FormControl,
  ButtonGroup,
  ButtonToolbar,
  PanelContainer,
} from '@sketchpixy/rubix';
import { LOGIN_SAGAS } from '../constants/UserConstants';

class LoginPage extends Component {

	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
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
                          <h3 style={{margin: 0, padding: 25}}>Sign in to Rubix</h3>
                        </div>
                        <div className="bg-hoverblue fg-black50 text-center" style={{padding: 12.5}}>
                          <div>You need to sign in for those awesome features</div>
                          <div style={{marginTop: 12.5, marginBottom: 12.5}}>
                            <Button id="facebook-btn" lg bsStyle="darkblue" type="submit">
                              <Icon glyph="icon-fontello-facebook" />
                              <span>Sign in <span className="hidden-xs">with facebook</span></span>
                            </Button>
                          </div>
                          <div>
                            <a id="twitter-link" href="#"><Icon glyph="icon-fontello-twitter" /><span> or with twitter</span></a>
                          </div>
                        </div>
                        <div>
                          <div className="text-center" style={{padding: 12.5}}>
                            or use your Rubix account
                          </div>
                          <div style={{padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25}}>
                            <Form>
                              <FormGroup controlId="emailaddress">
                                <InputGroup bsSize="large">
                                  <InputGroup.Addon>
                                    <Icon glyph="icon-fontello-mail" />
                                  </InputGroup.Addon>
                                  <FormControl autoFocus type="email" className="border-focus-blue" placeholder="support@sketchpixy.com" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup controlId="password">
                                <InputGroup bsSize="large">
                                  <InputGroup.Addon>
                                    <Icon glyph="icon-fontello-key" />
                                  </InputGroup.Addon>
                                  <FormControl type="password" className="border-focus-blue" placeholder="password" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <Grid>
                                  <Row>
                                    <Col xs={6} collapseLeft collapseRight className="text-right">
                                      <Button outlined lg type="submit" bsStyle="blue">Login</Button>
                                    </Col>
                                  </Row>
                                </Grid>
                              </FormGroup>
                            </Form>
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

	handleLogin() {
		const data = {
			username: this.refs.mobile.value,
			password: this.refs.password.value
		};
		this.props.dispatch({type: LOGIN_SAGAS, user: data});
	}
}

LoginPage.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(LoginPage);
