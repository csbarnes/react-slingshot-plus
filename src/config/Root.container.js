import React, { Component } from 'react';
import FuelSavingsContainer from '../fuelSavings/FuelSavings.container';
import TodoContainer from '../todo/Todo.container';

export default class Root extends Component {
  render() {
    return (
      <div>
        <div className="col2">
          <FuelSavingsContainer />
        </div>
        <div className="col2">
          <div className="todoapp">
            <TodoContainer />
          </div>
        </div>
      </div>
    );
  }
}
