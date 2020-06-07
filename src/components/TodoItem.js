import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { id, title } = this.props.todo;

    return (
      <div>
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
          <h6>{title}</h6>
          <div className="todo-icon">
            <span className="mx-2 text-success">
              <i
                style={{ cursor: "pointer" }}
                className="fas fa-pen"
                onClick={() => this.props.handleEdit(id)}
              />
            </span>
            <span className="mx-2 text-danger">
              <i
                style={{ cursor: "pointer" }}
                className="fas fa-trash"
                onClick={() => this.props.handleDelete(id)}
              />
            </span>
          </div>
        </li>
      </div>
    );
  }
}

export default TodoItem;
