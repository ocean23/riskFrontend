import React, { Component } from 'react';
import Articles from '../../components/partner/articles.js';

class Consignation extends Component {

	render() {
		require('./consignation.scss');
		return (
			<div className="row video-box">
			<div className="col-sm-9 col-xs-12">
			<div className="row">
			<div className="col-xs-10">
			<div className="col-xs-12" id="Carousel-slider">
				<div className="row">
					<div className="col-sm-12" id="carousel-contain">
						<div className="carousel slide" id="demoCarousel">
							<div className="carousel-inner">
								<div className="item active embed-responsive embed-responsive-16by9" data-slide-number="0">
                  <video id="player0" width="680" className="embed-responsive-item" controls crossOrigin poster={ G.baseHost + '/assets/image/promotionpreview.png' }>
                    <source src="http://o7u4iloq0.bkt.clouddn.com/promotion.mp4" type="video/mp4" />
                    <source src="http://o7u4iloq0.bkt.clouddn.com/promotion.ogv" type="video/ogg" />
                    <source src="http://o7u4iloq0.bkt.clouddn.com/promotion.webm" type="video/webm" />
                  </video>
								</div>
								<div className="item embed-responsive embed-responsive-16by9" data-slide-number="1">
                  <video id="player1" width="680" className="embed-responsive-item" controls crossOrigin poster={ G.baseHost + '/assets/image/auspeakpreview.png' }>
                    <source src="http://o7u4iloq0.bkt.clouddn.com/auspeak.mp4" type="video/mp4" />
                    <source src="http://o7u4iloq0.bkt.clouddn.com/auspeak.ogv" type="video/ogg" />
                    <source src="http://o7u4iloq0.bkt.clouddn.com/auspeak.webm" type="video/webm" />
                  </video>
								</div>
						</div>
					</div>
				</div>
			</div>
			</div>
			</div>
			<div className="col-xs-2" id="carousel-thumb">
			<ul className="thumb-list">
      <li className="col-sm-12">
        <a className="thumbnail" id="thumb-0">
          <img className="img-thumbnail nopadding" src={ G.baseHost + '/assets/image/advertising.jpg' } />
        </a>
      </li>
      <li className="col-sm-12">
        <a className="thumbnail" id="thumb-1">
          <img className="img-thumbnail nopadding" src={ G.baseHost + '/assets/image/lecture.jpg' } />
        </a>
      </li>
			</ul>
			</div>
			</div>
			</div>
			<div className="col-sm-3" id="news">
				<div className="panel panel-default">
					<div className="panel-heading" id="newsHeader"><center><h4>最新动态</h4></center></div>
						<div className="list-group liststyle" id="newsList">
							<a href="#" className="list-group-item" data-toggle="modal" data-target="#article1">时尚集团董事长郭奎章专访</a>
							<a href="#" className="list-group-item" data-toggle="modal" data-target="#article2">从第一桶金仅15元到创建“时尚系”商业帝国</a>
						</div>
						<Articles />
					</div>
				</div>
			</div>
		);
	}
}

export default Consignation;
