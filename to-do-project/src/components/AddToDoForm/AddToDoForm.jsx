import React, { useState } from "react";
import axios from "axios";
const AddToDoForm = (props) => {
  const [newToDo, setNewToDo] = useState({
    name: "",
    completed: "Not Started",
  });
  async function handleClick(newObject) {
    try {
        await axios.post("http://127.0.0.1:8000/todos/", newObject )
        setNewToDo({...newToDo, name: ""})
        props.getAllTodos()
    } catch (error) {
        alert(error.message)
    }
  }
  return (
    <div>
      <div>
        <input
          value={newToDo.name}
          type="text"
          onChange={(event) => setNewToDo({ ...newToDo, name: event.target.value })}
        />
        <button onClick={()=>handleClick(newToDo)}>SAVE</button>
      </div>
    </div>
  );
};

export default AddToDoForm;
