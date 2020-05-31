import React from "react";

function TodoList({ todos }) {
  //const { id, todo } = todos;
  return (
    <div>
      <ul className="list">
        {todos.map((item) => {
          return <li>{item[0]}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
