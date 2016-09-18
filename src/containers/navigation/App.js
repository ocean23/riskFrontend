import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

	render() {
		return (
			<div className="root-container">
				{this.props.children}
			</div>
		);
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
