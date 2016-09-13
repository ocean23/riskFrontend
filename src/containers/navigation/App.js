import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchUserDetailSagas } from '../../actions/huntingAction';
import classNames from 'classnames';

function mapStateToProps(state) {
  return {
    openid: state.getIn(['user', 'openid'])
  };
}

class App extends Component {

  constructor(props) {
    super(props);
    this.fetchUserDetail = this.fetchUserDetail.bind(this);
  }

  componentDidMount() {
    this.fetchUserDetail(G.code);
  }

	render() {
		const { openid } = this.props;
		let loading = true;
		if (openid !== '' && openid !== undefined) {
			loading = false;
		}
		const contentClassName = classNames('main-container', {
      'loading-content': loading,
    });
		return (
			<div className="root-container">
				{ loading ?
						<div className="map-loading-bg" />
					:
						<div className={ contentClassName }>
							{this.props.children}
						</div>
				}
			</div>
		);
	}

	fetchUserDetail(code) {
		this.props.dispatch(fetchUserDetailSagas(code));
	}
}

App.propTypes = {
	children: React.PropTypes.oneOfType([
	  React.PropTypes.arrayOf(React.PropTypes.node),
	  React.PropTypes.node
	]),
	openid: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps
)(App);
