// Button.jsx
import React, { Component } from 'react';

class Activity extends Component {

	render() {
		require('./activity.scss');
		return (
      <div className="row content-box">
				<div className="slider slider-for" id="sliderFor">
					<div><img className="img-responsive" src={ G.baseHost + '/assets/image/activity_AU.jpg' } /></div>
					<div><img className="img-responsive" src={ G.baseHost + '/assets/image/activity_GZ.jpg' } /></div>
					<div><img className="img-responsive" src={ G.baseHost + '/assets/image/activity_NJ.jpg' } /></div>
					<div><img className="img-responsive" src={ G.baseHost + '/assets/image/activity_SY.jpg' } /></div>
					<div><img className="img-responsive" src={ G.baseHost + '/assets/image/activity_SZ.jpg' } /></div>
				</div>
				<div className="jumbotron jumbotron_thumb">
					<div className="slider slider-nav center-block">
					<div><img className="img-responsive" src={ G.baseHost + '/assets/image/activity_AU.jpg' } /></div>
					<div><img className="img-responsive" src={ G.baseHost + '/assets/image/activity_GZ.jpg' } /></div>
					<div><img className="img-responsive" src={ G.baseHost + '/assets/image/activity_NJ.jpg' } /></div>
					<div><img className="img-responsive" src={ G.baseHost + '/assets/image/activity_SY.jpg' } /></div>
					<div><img className="img-responsive" src={ G.baseHost + '/assets/image/activity_SZ.jpg' } /></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Activity;
