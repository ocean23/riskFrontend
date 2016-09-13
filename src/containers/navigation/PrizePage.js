import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import { receiveUserPrizeSagas } from '../../actions/huntingAction';

function mapStateToProps(state) {
  return {
  	openid: state.getIn(['user', 'openid']),
    count: state.getIn(['user', 'count']),
    prized: state.getIn(['user', 'prized'])
  };
}

class PrizePage extends Component {

  constructor(props) {
    super(props);
    // 有些会缓存，导致不会call onload事件，所以减少3个
    this.state = {ruleSelected: false, loaded: false, loadImageNumber: 0, loadImageTotal: 7};
    this.selectRule = this.selectRule.bind(this);
    this.closePopup = this.closePopup.bind(this);
		this.imageLoadCallback = this.imageLoadCallback.bind(this);
		this.preloadImgs = this.preloadImgs.bind(this);
		this.confirmReceivePrize = this.confirmReceivePrize.bind(this);
  }

	componentDidMount() {
		this.preloadImgs(this.state.loadImageTotal);
	}

  render() {
  	const { count, openid, prized } = this.props;
  	const loading = !this.state.loaded;
    const contentClassName = classNames('container', 'treasure-container' + count, {
			  'loading-content': loading
		});
    if (!this.state.ruleSelected) {
			if (this.props.count === 5 && !this.props.prized) {
				$('#prizeContent').modal('show');
			} else if (this.props.count === 5 && this.props.prized) {
				$('#prizeReceived').modal('show');
			}
		}

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
							{ this.state.ruleSelected ?
									<img ref="img2" className="img-wrapper-middle" src="http://oa9futkbr.bkt.clouddn.com/treasureBtn.png" />
								:
									<img ref="img2" className="img-wrapper-middle" src="http://oa9futkbr.bkt.clouddn.com/treasureBtn_selected.png" />
							}
						</div>
						<div className="col-xs-4 img-col">
							<Link to="/map"><img ref="img3" className="img-wrapper-right" src="http://oa9futkbr.bkt.clouddn.com/mapBtn.png" /></Link>
						</div>
					</div>

	        <div className="modal fade" id="prizeContent" role="dialog">
	          <div className="modal-dialog">
	            <div className="modal-content rule-container">
	              <div className="modal-body">
								  <img src="/assets/iceworld/img/x.png" type="button" className="prize-close"
								     data-dismiss="modal" aria-hidden="true" />
	              	<img ref="img4" className="img-wrapper" src="http://oa9futkbr.bkt.clouddn.com/prize.png" />
								  <img ref="img5" onClick={this.confirmReceivePrize} src="http://oa9futkbr.bkt.clouddn.com/prizeConfirm.png" type="button" className="prize-confirm"
								     data-dismiss="modal" aria-hidden="true" />
	              </div>
	            </div>
	          </div>
	        </div>
				</div>
        <div className="modal fade" id="prizeReceived" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content rule-container">
              <div className="modal-body">
							  <img src="/assets/iceworld/img/x.png" type="button" className="prize-close"
							     data-dismiss="modal" aria-hidden="true" />
              	<img ref="img6" className="img-wrapper" src="http://oa9futkbr.bkt.clouddn.com/received.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="ruleContent" role="dialog" onClick={this.closePopup}>
          <div className="modal-dialog">
            <div className="modal-content rule-container">
              <div className="modal-body">
							  <img onClick={this.closePopup} src="http://oa9futkbr.bkt.clouddn.com/x.png" type="button" className="close"
							     data-dismiss="modal" aria-hidden="true" />
              	<img ref="img7" className="img-wrapper" src="http://oa9futkbr.bkt.clouddn.com/rule.png" />
              </div>
            </div>
          </div>
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

  confirmReceivePrize() {
		// $('#ruleContent').modal('hide');
		this.props.dispatch(receiveUserPrizeSagas(this.props.openid));
  }

	preloadImgs(imageTotal) {
		console.log('preloadImgs');
		for (let index = 1; index <= imageTotal; index++) {
			console.log(index);
	    const imgTag = this.refs['img' + index];
	    const imgSrc = imgTag.getAttribute('src');
	    const img = new window.Image();
	    img.onload = this.imageLoadCallback;
	    img.src = imgSrc;
		}
		console.log('preloadImgs');
	}

	imageLoadCallback() {
		this.state.loadImageNumber++;
		console.log('imageLoadCallback');
		console.log(this.state.loadImageNumber);
		console.log('imageLoadCallback');
    // 有些会缓存，导致不会call onload事件，所以减少3个
		if (this.state.loadImageNumber >= this.state.loadImageTotal) {
			G.hideLoading();
			this.setState({ loaded: true });
			console.log('enter loaded=true');
		}
	}
}

PrizePage.propTypes = {
	openid: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  prized: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};
// rename
export default connect(
  mapStateToProps
)(PrizePage);
