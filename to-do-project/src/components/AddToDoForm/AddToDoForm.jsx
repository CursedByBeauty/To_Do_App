import React, { useState } from "react";
import axios from "axios";
const AddToDoForm = (props) => {
  const [newToDo, setNewToDo] = useState({
    name: "",
    completed: "Not Started",
  });
  async function handleClick(newObject) {
    try {
      await axios.post("http://127.0.0.1:8000/todos/", newObject);
      setNewToDo({ ...newToDo, name: "" });
      props.getAllTodos();
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
        <div className="col-12">
          <div className="form-outline">
            <input
            id="form1"
              className="form-control"
              value={newToDo.name}
              type="text"
              onChange={(event) =>
                setNewToDo({ ...newToDo, name: event.target.value })
              }
            />
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" onClick={() => handleClick(newToDo)}>Save</button>
        </div>
    </div>
  );
};

export default AddToDoForm;
