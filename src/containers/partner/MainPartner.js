// Button.jsx
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Introduction from '../../components/partner/introduction.js';
import Process from '../../components/partner/process.js';
import Consignation from '../../components/partner/consignation.js';
import Founder from '../../components/partner/founder.js';
import Advantage from '../../components/partner/advantage.js';
import Activity from '../../components/partner/activity.js';
import Copywriter from '../../components/partner/copywriter.js';
import { sagasSubmitForm } from '../../actions/rentAction';

class MainPartner extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  render() {
    return (
      <div className="container">
        <Introduction />
        <Process />
        <div className="row">
          <div className="container mainContainer">
            <Consignation />
            <Founder />
            <Advantage />
            <Activity />
            <Copywriter submitForm={ this.submitForm } />
          </div>
        </div>
      </div>
    );
  }

  submitForm(data) {
    this.props.dispatch(sagasSubmitForm(data));
  }
}

MainPartner.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(MainPartner);
