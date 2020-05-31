import React, { useState } from "react"; // useEffect
import "./App.css";
import Alert from "./components/Alert";
import TodoList from "./components/TodoList";
import uuid from "uuid/dist/v4";

const initialTodos = [
  { id: uuid(), todo: "to do 1" },
  { id: uuid(), todo: "to do 2" },
  { id: uuid(), todo: "to do 3" },
];

function App() {
  // **************** state values **************************
  // all todos, add todos   , setTodos
  const [todos] = useState(initialTodos);

  return (
    <div className="App">
      <Alert />

      <h1>Hello World</h1>

      <TodoList todos={todos} />

      <p>This is dummy text....</p>
    </div>
  );
}

export default App;
