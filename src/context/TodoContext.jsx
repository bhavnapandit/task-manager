import React, { createContext, useState } from "react";

// Creating a context for managing todo items
export const TodoContext = createContext();

// TodoProvider component responsible for providing todos state and setTodos function to its children
export const TodoProvider = (props) => {
  // Retrieving todos from localStorage
  const getTodos = JSON.parse(localStorage.getItem("todos"));
  // Initializing todos state with the retrieved todos, or an empty array if there are no todos in localStorage
  const [todos, setTodos] = useState(getTodos ? getTodos : []);

  return (
    // Providing todos state and setTodos function to children components via TodoContext.Provider
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};
