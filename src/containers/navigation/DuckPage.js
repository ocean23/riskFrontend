import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import { activeLocationSagas } from '../../actions/huntingAction';

function mapStateToProps(state) {
  return {
    // openid: state.getIn(['user', 'openid'])
    openid: '1111111'
  };
}

class DuckPage extends Component {

	constructor(props) {
		super(props);
		// this.activeLocation = this.activeLocation.bind(this);
	}

	componentDidMount() {
	}

  render() {
  	const loading = false;
		const contentClassName = classNames('container', 'page1', {
      'loading-content': loading,
    });

    return (
    	<div className="root-container">
        <div className={ contentClassName }>
          <Link to="/treasure"><img ref="img1" className="up-btn" src="/assets/iceworld/img/myTreasureBtn.png" /></Link>
          <Link to="/map"><img ref="img2" className="down-btn" src="/assets/iceworld/img/huntingBtn.png" /></Link>
        </div>
      </div>
      );
  }

  activeLocation() {
  	const data = {
  		openid: this.props.openid,
  		location: 'duck'
  	};
  	this.props.dispatch(activeLocationSagas(data));
  }
}

DuckPage.propTypes = {
  openid: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps
)(DuckPage);
