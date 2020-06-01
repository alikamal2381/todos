import React, { useState, useEffect } from "react"; // useEffect    todos={todos}
import Alert from "./components/Alert";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid/dist/v4";

const initialTodos = [
  { id: uuid(), todo: "to do 1" },
  { id: uuid(), todo: "to do 2" },
  { id: uuid(), todo: "to do 3" },
  { id: uuid(), todo: "to do 4" },
  { id: uuid(), todo: "to do 5" },
];

function App() {
  // **************** state values **************************
  // all todos, add todos   , setTodos
  const [todos, setTodos] = useState(initialTodos);
  // **************** useEffect **************************
  useEffect(() => {
    console.log("we called useEffect");
    //localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // **************** functionality **************************

  return (
    <div className="container">
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput />
          <TodoList a={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
