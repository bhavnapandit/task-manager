import "./App.css";
import AddTodo from './components/AddTodo'
import List from './components/List'
import { TodoProvider } from "./context/TodoContext";

function App() {
 
  return (
    // TodoProvider wraps the components that need access to the todo state
    <TodoProvider>
    <div className="container">
      <h1 className="app-title">Personal Task Manager</h1>
      <AddTodo/>
      <List/>
    </div>
    </TodoProvider>
  );
}

export default App;
