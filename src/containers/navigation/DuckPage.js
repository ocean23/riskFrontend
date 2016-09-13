import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import { activeLocationSagas } from '../../actions/huntingAction';

function mapStateToProps(state) {
  return {
    openid: state.getIn(['user', 'openid'])
  };
}

class DuckPage extends Component {

	constructor(props) {
		super(props);
		this.state = { loaded: false, loadImageNumber: 0, loadImageTotal: 2 };
		this.imageLoadCallback = this.imageLoadCallback.bind(this);
		this.preloadImgs = this.preloadImgs.bind(this);
		this.activeLocation = this.activeLocation.bind(this);
	}

	componentDidMount() {
		this.preloadImgs(this.state.loadImageTotal);
		this.activeLocation();
	}

  render() {
  	const loading = !this.state.loaded;
		const contentClassName = classNames('container', 'page1', {
      'loading-content': loading,
    });

    return (
    	<div className="root-container">
        <div className={ contentClassName }>
          <Link to="/treasure"><img ref="img1" className="up-btn" src="/assets/iceworld/img/myTreasureBtn.png" /></Link>
          <Link to="/map"><img ref="img2" className="down-btn" src="/assets/iceworld/img/huntingBtn.png" /></Link>
        </div>
				{
					loading && <div className="map-loading-bg" />
				}
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

	preloadImgs(imageTotal) {
		for (let index = 1; index <= imageTotal; index++) {
	    const imgTag = this.refs['img' + index];
	    const imgSrc = imgTag.getAttribute('src');
	    const img = new window.Image();
	    img.onload = this.imageLoadCallback;
	    img.src = imgSrc;
		}
	}

	imageLoadCallback() {
		this.state.loadImageNumber++;
		if (this.state.loadImageNumber >= this.state.loadImageTotal) {
			this.setState({ loaded: true });
			 G.hideLoading();
		}
	}
}

DuckPage.propTypes = {
  openid: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps
)(DuckPage);
