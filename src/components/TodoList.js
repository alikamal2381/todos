import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const x = this.props.a;

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">to do list</h3>
        {x.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}

        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
        >
          clear items
        </button>
      </ul>
    );
  }
}

export default TodoList;
