import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import { Button } from '@sketchpixy/rubix';
import { loginSagas } from '../../actions/userAction';

class MainPage extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="root-container">
			  <div><Button bsStyle="green">Green Button!</Button></div>
			  <div><Button bsStyle="red">Red Button!</Button></div>
			  <div><Button bsStyle="blue" outlined>Blue Button!</Button></div>
			</div>
			);
	}

}

MainPage.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(MainPage);
