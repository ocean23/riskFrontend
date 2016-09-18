import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
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
				Main Page
			</div>
			);
	}

}

MainPage.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(MainPage);
