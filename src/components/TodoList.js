import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">to do list</h3>
        {this.props.todo.map((x) => {
          return (
            <TodoItem
              key={x.id}
              todo={x}
              handleEdit={this.props.handleEdit}
              handleDelete={this.props.handleDelete}
            />
          );
        })}

        {this.props.todo.length > 0 && (
          <button
            type="button"
            className="btn btn-danger btn-block text-capitalize mt-5"
            onClick={this.props.clearItems}
          >
            clear items
          </button>
        )}
      </ul>
    );
  }
}

export default TodoList;
