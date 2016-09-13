import React, { Component } from 'react';

class Advantage extends Component {

  render() {
    require('./advantage.scss');
    return (
        <div className="row content-box">
          <img className="img-responsive center-block" src={ G.baseHost + '/assets/image/advantage.png' } />
        </div>
    );
  }
}

export default Advantage;
