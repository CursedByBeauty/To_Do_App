import React from "react";
const DisplayToDos = (props) => {
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
                <td><button>DELETE</button></td>
                <td><button>FINISHED</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayToDos;
