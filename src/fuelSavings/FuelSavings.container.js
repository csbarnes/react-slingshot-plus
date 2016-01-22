// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FuelSavingsApp from './FuelSavings.app.js';
import * as FuelSavingsActions from './core/fuelSavings.actions.js';

class FuelSavingsContainer extends React.Component {
  render() {
    const { fuelSavingsAppState, actions } = this.props;

    return (
        <FuelSavingsApp fuelSavingsAppState={fuelSavingsAppState} actions={actions} />
    );
  }
}

FuelSavingsContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavingsAppState: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FuelSavingsContainer);

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
