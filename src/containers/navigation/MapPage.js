import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';

function mapStateToProps(state) {
  return {
    duck: state.getIn(['user', 'duck']),
    threed: state.getIn(['user', 'threed']),
    milk: state.getIn(['user', 'milk']),
    iceking: state.getIn(['user', 'iceking']),
    coast: state.getIn(['user', 'coast'])
  };
}

class Mappage extends Component {

	constructor(props) {
		super(props);
		this.state = {ruleSelected: false, loaded: false, loadImageNumber: 0, loadImageTotal: 6};
		this.selectRule = this.selectRule.bind(this);
		this.closePopup = this.closePopup.bind(this);
		this.imageLoadCallback = this.imageLoadCallback.bind(this);
		this.preloadImgs = this.preloadImgs.bind(this);
	}

	componentDidMount() {
		this.preloadImgs(this.state.loadImageTotal);
	}

	render() {
		const { duck, threed, milk, iceking, coast } = this.props;
		const loading = !this.state.loaded;
		const contentClassName = classNames('container', 'mappage-container', {
      'loading-content': loading,
    });
		return (
			<div className="root-container">
				<div className={ contentClassName }>
					<div className="row img-row">
						<div className="col-xs-4 img-col">
							{ this.state.ruleSelected ?
									<img ref="img1" className="img-wrapper-left" src="http://oa9futkbr.bkt.clouddn.com/ruleBtn_selected.png" />
								:
									<img ref="img1" onClick={this.selectRule} className="img-wrapper-left" src="http://oa9futkbr.bkt.clouddn.com/ruleBtn.png" data-toggle="modal" data-target="#ruleContent" />
							}
						</div>
						<div className="col-xs-4 img-col">
						<Link to="/treasure"><img ref="img2" className="img-wrapper-middle" src="http://oa9futkbr.bkt.clouddn.com/treasureBtn.png" /></Link>
						</div>
						<div className="col-xs-4 img-col">
							{ this.state.ruleSelected ?
									<img ref="img3" className="img-wrapper-right" src="http://oa9futkbr.bkt.clouddn.com/mapBtn.png" />
								:
									<img ref="img3" className="img-wrapper-right" src="http://oa9futkbr.bkt.clouddn.com/mapBtn_selected.png" />
							}
						</div>
					</div>

					<div className="modal fade" id="ruleContent" role="dialog" onClick={this.closePopup} >
						<div className="modal-dialog">
							<div className="modal-content rule-container">
								<div className="modal-body">
									<img ref="img4" onClick={this.closePopup} src="http://oa9futkbr.bkt.clouddn.com/x.png" type="button" className="close"
										 data-dismiss="modal" aria-hidden="true" />
									<img ref="img5" className="img-wrapper" src="http://oa9futkbr.bkt.clouddn.com/rule.png" />
								</div>
							</div>
						</div>
					</div>
					{ duck ?
							<div className="static-box1">
								<img ref="img6" src="http://oa9futkbr.bkt.clouddn.com/box_static.png" className="static-boxstyle"/>
							</div>
						:
							<div className="box-indicator1">
								<img ref="img6" src="http://oa9futkbr.bkt.clouddn.com/box.png" className="boxstyle"/>
							</div>
					}

					{ duck ?
							<div></div>
						:
							<div className="pulse loc1">
							</div>
					}
					{ duck ?
							<div></div>
						:
							<div className="pulse2 loc1">
							</div>
					}
					{ threed ?
							<div className="static-box2">
								<img ref="img6" src="http://oa9futkbr.bkt.clouddn.com/box_static.png" className="static-boxstyle"/>
							</div>
						:
							<div className="box-indicator2">
								<img ref="img6" src="http://oa9futkbr.bkt.clouddn.com/box.png" className="boxstyle"/>
							</div>
					}
					{ threed ?
							<div></div>
						:
							<div className="pulse loc2">
							</div>
					}
					{ threed ?
							<div></div>
						:
							<div className="pulse2 loc2">
							</div>
					}

					{ milk ?
							<div className="static-box3">
								<img ref="img6" src="http://oa9futkbr.bkt.clouddn.com/box_static.png" className="static-boxstyle"/>
							</div>
						:
							<div className="box-indicator3">
								<img ref="img6" src="http://oa9futkbr.bkt.clouddn.com/box.png" className="boxstyle"/>
							</div>
					}

					{ milk ?
							<div></div>
						:
							<div className="pulse loc3">
							</div>
					}
					{ milk ?
							<div></div>
						:
							<div className="pulse2 loc3">
							</div>
					}
					{ iceking ?
							<div className="static-box4">
								<img ref="img6" src="http://oa9futkbr.bkt.clouddn.com/box_static.png" className="static-boxstyle"/>
							</div>
						:
							<div className="box-indicator4">
								<img ref="img6" src="http://oa9futkbr.bkt.clouddn.com/box.png" className="boxstyle"/>
							</div>
					}

					{ iceking ?
							<div></div>
						:
							<div className="pulse loc4">
							</div>
					}
					{ iceking ?
							<div></div>
						:
							<div className="pulse2 loc4">
							</div>
					}
					{ coast ?
							<div className="static-box5">
								<img ref="img6" src="http://oa9futkbr.bkt.clouddn.com/box_static.png" className="static-boxstyle"/>
							</div>
						:
							<div className="box-indicator5">
								<img ref="img6" src="http://oa9futkbr.bkt.clouddn.com/box.png" className="boxstyle"/>
							</div>
					}

					{ coast ?
							<div></div>
						:
							<div className="pulse loc5">
							</div>
					}
					{ coast ?
							<div></div>
						:
							<div className="pulse2 loc5">
							</div>
					}
				</div>
				{
					loading && <div className="map-loading-bg" />
				}
			</div>
			);
	}

	selectRule() {
		this.setState({ruleSelected: true});
	}

	closePopup() {
		this.setState({ruleSelected: false});
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

Mappage.propTypes = {
  duck: PropTypes.bool.isRequired,
  threed: PropTypes.bool.isRequired,
  milk: PropTypes.bool.isRequired,
  iceking: PropTypes.bool.isRequired,
  coast: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps
)(Mappage);
