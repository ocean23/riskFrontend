import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import { Button } from '@sketchpixy/rubix';

class RiskEstimate extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		const xUserToken = localStorage.getItem('xUserToken');
		console.log('------');
		console.log('xUserToken=' + xUserToken);
		console.log('------');
		return (
			<div className="root-container">
			  <div><Button bsStyle="green">Green Button!</Button></div>
			  <div><Button bsStyle="red">Red Button!</Button></div>
			  <div><Button bsStyle="blue" outlined>Blue Button!</Button></div>
			</div>
			);
	}

}

RiskEstimate.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(RiskEstimate);
