import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import classNames from 'classnames';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {loaded: false, loadImageNumber: 0, loadImageTotal: 1};
		this.imageLoadCallback = this.imageLoadCallback.bind(this);
		this.preloadImgs = this.preloadImgs.bind(this);
	}

  componentDidMount() {
  	this.preloadImgs(this.state.loadImageTotal);
  }

  render() {
  	const loading = !this.state.loaded;
		const contentClassName = classNames('home', {
      'loading-content': loading,
    });
    return (
    		<div className="root-container">
					<div className={ contentClassName }>
						<Link to="/map"><img ref="img1" className="btn-go" src="http://oa9futkbr.bkt.clouddn.com/home_btn.png" /></Link>
					</div>
					{
						loading && <div className="home-loading-bg" />
					}
				</div>
    	);
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

export default Home;
