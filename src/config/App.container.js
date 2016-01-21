// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FuelSavingsApp from '../fuelSavings/FuelSavings.app.js';
import * as FuelSavingsActions from '../fuelSavings/core/fuelSavings.actions.js';

class App extends React.Component {
  render() {
    const { fuelSavingsAppState, actions } = this.props;

    return (
        <FuelSavingsApp fuelSavingsAppState={fuelSavingsAppState} actions={actions} />
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavingsAppState: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

//////////

function mapStateToProps(state) {
  return {
    fuelSavingsAppState: state.fuelSavingsAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FuelSavingsActions, dispatch)
  };
}
