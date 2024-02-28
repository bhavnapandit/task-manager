import { useContext, useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { TodoContext } from "../context/TodoContext";
import { v4 as uuidv4 } from "uuid";
const AddTodo = () => {
  // State for storing the title of the new todo item
  const [title, setTitle] = useState("");
  // Destructuring todos state and setTodos function from TodoContext
  const [todos, setTodos] = useContext(TodoContext);

  const addTodo = (e) => {
    e.preventDefault();
    console.log("title: ", title);
    if ("" === title || undefined === title) {
      alert("Field can not be blank"); // Alert the user if title is blank
      return;
    }
    const newTodos = [
      ...todos,
      { id: uuidv4(), title: title, completed: false }, // Generating a new todo item with a unique id using uuidv4
    ];
    setTodos(newTodos); // Updating todos state with the new array of todos
    setTitle(""); // Clearing the title state after adding todo
    console.log(newTodos);
  };

  // useEffect dependency array ensures this effect runs whenever todos state changes
  useEffect(() => {
    // Saving todos state to localStorage whenever it changes
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <div className="form-input-container">
        <input
          value={title}
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add todo.."
        />
        <button type="button" className="form-btn" onClick={addTodo}>
          <IoIosAddCircle />
        </button>
      </div>
    </>
  );
};

export default AddTodo;
