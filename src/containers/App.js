import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';
/* Common Components */
import SidebarComponent from '../components/common/SidebarComponent';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { loadPermissions } from '../actions/userAction';

class App extends Component {
  constructor(props) {
    super(props);
  }

	componentDidMount() {
		loadPermissions();
	}

  render() {
    return (
      <MainContainer {...this.props}>
        <SidebarComponent />
        <Header />
        <div id="body">
          <Grid>
            <Row>
              <Col xs={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}

App.propTypes = {
	children: React.PropTypes.oneOfType([
	  React.PropTypes.arrayOf(React.PropTypes.node),
	  React.PropTypes.node
	]),
	location: React.PropTypes.object,
	router: React.PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

export default withRouter(connect()(App));
