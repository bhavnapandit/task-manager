import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";


const Todo = (props) => {
  // Destructuring todos state and setTodos function from TodoContext
  const [todos, setTodos] = useContext(TodoContext);

  const completeTasks = (e) => {
    const filterTask = todos.map((item) => {
      if (item.id === e.target.value) {
        if (e.target.checked) {
          item.completed = true; // Marking the item as completed
        } else {
          item.completed = false; // Marking the items  as no complete
        }
      }
      return item;
    });

    setTodos(filterTask); // Updating todos state with the modified array
  };

  const deleteTask = (e) => {
    e.preventDefault(); // Preventing default form submission behavior

    const idToDelete = e.target.id;

    // Filtering out the item with the id to delete
    const filteredTodo = todos.filter((item) => {
      return item.id !== idToDelete;
    });
    // Updating todos state with the modified array
    setTodos(filteredTodo);
  };

  // Checking if the task is completed and assigning "checked" if true, otherwise an empty string
  const isCompleted = props.completed ? "checked" : "";
  return (
    <>
      <p className="todo-item">
        <input
          type="checkbox"
          id={props.id}
          value={props.id}
          onChange={(e) => completeTasks(e)}
          checked={isCompleted}
        />
        <label htmlFor={props.id}>{props.title}</label>
        <button
          type="button"
          className="btn-delete"
          id={props.id}
          onClick={deleteTask}
        >
          Delete
        </button>
      </p>
    </>
  );
};

export default Todo;
