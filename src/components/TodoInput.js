import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    //console.log(this.props.title);

    //console.log(this.props.handleTitle);

    //console.log(this.props.handleSubmit);

    return (
      <div className="card card-body my-3">
        <form onSubmit={this.props.handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              value={this.props.title}
              onChange={this.props.handleTitle}
            />
          </div>
          <button
            type="submit"
            className="btn btn-block btn-primary mt-3 text-capitalize"
          >
            {this.props.edit ? "edit Todo" : "Add Todo"}
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
