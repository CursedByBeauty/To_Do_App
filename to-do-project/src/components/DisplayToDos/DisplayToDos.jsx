import React, { useState } from "react";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
  function handleOnDragEnd(result) {
    try {
      const items = Array.from(props.todos);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      props.setTodos(items);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <table className="table mb-4">
        <thead>
          <tr>
            <th></th>
            <th scope="col">To do Item</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <tbody {...provided.droppableProps} ref={provided.innerRef}>
                {props.todos.map((object, index) => {
                  return (
                    <Draggable
                      key={object.id}
                      draggableId={String(object.id)}
                      index={index}
                    >
                      {(provided) => (
                        <tr
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          scope="row"
                        >
                          <td>
                            <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-drag-and-drop-development-royyan-wijaya-detailed-outline-royyan-wijaya.png" />
                          </td>
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
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </tbody>
            )}
          </Droppable>
        </DragDropContext>
      </table>
    </div>
  );
};

export default DisplayToDos;
