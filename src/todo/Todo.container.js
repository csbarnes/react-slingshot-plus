import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './components/Header.component';
import Todo from './Todo.app';
import * as TodoActions from './core/todo.actions';

class TodoContainer extends Component {
  render() {
    const { todoAppState, actions } = this.props;
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <Todo todoAppState={todoAppState} actions={actions} />
      </div>
    );
  }
}

TodoContainer.propTypes = {
  todoAppState: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todoAppState: state.todoAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
