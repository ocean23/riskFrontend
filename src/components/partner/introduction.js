// Button.jsx
import React, { Component } from 'react';

class Introduction extends Component {

	render() {
		require('./introduction.scss');
		return (
				<div className="row">
					<div className="jumbotron jumbotron-homepage">
						<nav className="navbar navbar-fixed-top" data-spy="affix" data-offset-top="0">
							<div className="container-fluid">
								<div className="navbar-header">
									<img className="navbar-brand img-responsive" src={ G.baseHost + '/assets/image/logo.png' } />
								</div>
								<ul className="nav navbar-nav navbar-right">
									<li><a className="naviLink" href="#userName"><img className="navbar-brand" src={ G.baseHost + '/assets/image/join.png'} /></a></li>
								</ul>
							</div>
						</nav>
						<div className="row text-box ">
							 <img className="img-responsive center-block" src={ G.baseHost + '/assets/image/homepage_text.png' } />
						</div>
					</div>
				</div>
		);
	}
}

export default Introduction;
