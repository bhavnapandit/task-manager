import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "../context/TodoContext";

const List = () => {
  const [todos, setTodos] = useContext(TodoContext);
  return (
    // Checking if there are todos in the todos array
    1 <= todos.length ? (
      todos.map((item) => {
        // If there are todos, map through them and return Todo components for each todo item
        return (
          <Todo
            key={item.id}
            id={item.id}
            title={item.title}
            completed={item.completed}
          />
        );
      })
    ) : (
      <h4>No task found. Please add some...</h4>
    )
  );
};

export default List;
