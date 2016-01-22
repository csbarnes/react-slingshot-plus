import React, { Component, PropTypes } from 'react';
import TodoItem from './components/TodoItem.component';
import Footer from './components/Footer.component';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from './core/todo.consts';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
};

class Todo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { filter: SHOW_ALL };
  }

  handleClearCompleted() {
    const atLeastOneCompleted = this.props.todoAppState.some(todo => todo.completed);
    if (atLeastOneCompleted) {
      this.props.actions.clearCompleted();
    }
  }

  handleShow(filter) {
    this.setState({ filter });
  }

  renderToggleAll(completedCount) {
    const { todoAppState, actions } = this.props;
    if (todoAppState.length > 0) {
      return (
        <input className="toggle-all"
               type="checkbox"
               checked={completedCount === todoAppState.length}
               onChange={actions.completeAll} />
      );
    }
  }

  renderFooter(completedCount) {
    const { todoAppState } = this.props;
    const { filter } = this.state;
    const activeCount = todoAppState.length - completedCount;

    if (todoAppState.length) {
      return (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.handleClearCompleted.bind(this)}
                onShow={this.handleShow.bind(this)} />
      );
    }
  }

  render() {
    const { todoAppState, actions } = this.props;
    const { filter } = this.state;

    const filteredTodos = todoAppState.filter(TODO_FILTERS[filter]);
    const completedCount = todoAppState.reduce((count, todo) =>
        todo.completed ? count + 1 : count,
      0
    );

    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    );
  }
}

Todo.propTypes = {
  actions: PropTypes.object.isRequired,
  todoAppState: PropTypes.array.isRequired
};

export default Todo;
