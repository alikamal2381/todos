import React, { useState, useEffect } from "react"; // useEffect    todos={todos}
import Alert from "./components/Alert";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid/dist/v4";

/*
//localStorage.getItem("item name");
//localStorage.setItem("item name");
const initialTodos = [
  { id: uuid(), title: "to do 1", isCompleted: false },
  { id: uuid(), title: "to do 2", isCompleted: false },
  { id: uuid(), title: "to do 3", isCompleted: false },
  { id: uuid(), title: "to do 4", isCompleted: false },
  { id: uuid(), title: "to do 5", isCompleted: false },
];
*/

const initialTodos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

function App() {
  // **************** state values **************************
  // all todos, add todos   , setTodos
  const [todos, setTodos] = useState(initialTodos);
  // single title
  const [title, setTitle] = useState("");
  // single isCompleted
  const [isCompleted] = useState(false);
  // alert
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [edit, setEdit] = useState(false);
  // edit item
  const [id, setId] = useState(0);
  // **************** useEffect **************************
  useEffect(() => {
    console.log("we called useEffect");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // **************** functionality **************************
  const handleTitle = (e) => {
    //console.log(`title ${e.target.value}`);
    setTitle(e.target.value);
  };
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(title);
    if (title !== "") {
      //save funactionailty
      if (edit) {
        //edit mode
        let temptodos = todos.map((item) => {
          return item.id === id ? { ...item, title } : item;
        });
        setTodos(temptodos);
        setEdit(false);
      } else {
        const singleTitle = { id: uuid(), title, isCompleted };
        setTodos([...todos, singleTitle]);
        handleAlert({ type: "success", text: "item added" });
      }
      setTitle("");
    } else {
      // handle alert called
      handleAlert({
        type: "danger",
        text: `title can't be empty value`,
      });
    }
  };

  // clear all items
  const clearItems = () => {
    //console.log("cleared all items");
    setTodos([]);
    handleAlert({ type: "danger", text: "all item deleted" });
  };
  // handle Delete
  const handleDelete = (id) => {
    //console.log(`item deleted : ${id}`);
    let temptodos = todos.filter((item) => item.id !== id);
    //console.log(temptodos);
    setTodos(temptodos);
    handleAlert({ type: "danger", text: "item deleted" });
  };
  // handle Edit
  const handleEdit = (id) => {
    let todo = todos.find((item) => item.id === id);
    //console.log(todo);
    let { title } = todo;
    setTitle(title);
    setEdit(true);
    setId(id);
    handleAlert({ type: "success", text: "item edited" });
  };

  return (
    <div className="container">
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput
            title={title}
            handleTitle={handleTitle}
            handleSubmit={handleSubmit}
            edit={edit}
          />
          <TodoList
            todo={todos}
            clearItems={clearItems.bind(this)}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
