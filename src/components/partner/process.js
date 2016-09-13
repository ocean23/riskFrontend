import React, { Component } from 'react';

class Process extends Component {

	render() {
		require('./process.scss');
		return (
				<div className="row">
					<div className="container container-process" id="processContainer">
						<div className="row process-box" id="processImage">
							 <img className="img-responsive center-block" src={ G.baseHost + '/assets/image/process.png'} />
						</div>
					</div>
				</div>
		);
	}
}

export default Process;
