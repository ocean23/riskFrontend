import React, { Component } from 'react';

class Founder extends Component {

  render() {
    require('./founder.scss');
    return (
        <div className="row content-box">
            <img className="img-responsive center-block" src={ G.baseHost + '/assets/image/founder.png' } />
        </div>
    );
  }
}

export default Founder;
