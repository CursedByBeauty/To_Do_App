import React, { useState } from "react";
import axios from "axios";
const DisplayToDos = (props) => {
  async function deleteItem(id) {
    try {
      await axios.delete(`http://127.0.0.1:8000/todos/${id}/`);
      props.getAllTodos();
    } catch (error) {
      alert(error.message);
    }
  }
  async function finished(body) {
    let currentBody = {
      name: body.name,
      completed: "",
    };
    if ((body.completed === "Not Started")) {
      currentBody.completed = "In Progress";
    } else if ((body.completed === "In Progress")) {
      currentBody.completed = "Completed";
    } else {
      currentBody.completed = "Not Started";
    }
    try {
      await axios.put(`http://127.0.0.1:8000/todos/${body.id}/`, currentBody);
      props.getAllTodos();
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Todo Item</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map((object) => {
            return (
              <tr key={object.id}>
                <td>{object.name}</td>
                <td>{object.completed}</td>
                <td>
                  <button onClick={() => deleteItem(object.id)}>DELETE</button>
                </td>
                <td>
                  <button onClick={() => finished(object)}>STATUS</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayToDos;
