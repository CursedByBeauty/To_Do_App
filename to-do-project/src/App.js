import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayToDos from "./components/DisplayToDos/DisplayToDos";
import AddToDoForm from "./components/AddToDoForm/AddToDoForm";
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getAllTodos();
  }, []);

  async function getAllTodos() {
    try {
      let myTodos = await axios.get("http://127.0.0.1:8000/todos/");
      setTodos(myTodos.data);
    } catch (error) {
      alert(error.message);
      console.log(todos);
    }
  }
  return <div>
    <h1>To Do App</h1>
    <AddToDoForm getAllTodos={getAllTodos} />
    <DisplayToDos todos={todos}/>
  </div>;
}

export default App;
