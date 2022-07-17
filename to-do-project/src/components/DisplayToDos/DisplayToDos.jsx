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
  async function status(body) {

    let currentBody = {
      name: body.name,
      completed: "",
    };

    if (body.completed === "Not Started") {
      currentBody.completed = "In Progress";
    } else if (body.completed === "In Progress") {
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
      <table className="table mb-4">
        <thead>
          <tr>
            <th scope="col">To do Item</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map((object) => {
            return (
              <tr scope="row" key={object.id}>
                <td>{object.name}</td>
                <td>{object.completed}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(object.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success ms-1"
                    onClick={() => status(object)}
                  >
                    Status
                  </button>
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
