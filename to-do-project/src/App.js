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
  return (
      <section className="vh-100" style={{backgroundColor: "#eee"}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card rounded-3">
              <div className="card-body p-4">
              <h1 className="text-center my-3 pb-3">To Do App</h1>
              <AddToDoForm getAllTodos={getAllTodos} />
              <DisplayToDos setTodos={setTodos} getAllTodos={getAllTodos} todos={todos} />
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
  );
}

export default App;
