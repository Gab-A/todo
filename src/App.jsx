import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import todoLogo from "./assets/logo/todo-logo.svg";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col bg-white h-[75%] w-[85%] rounded-lg shadow-lg p-6">
        <div className="flex flex-col justify-center">
          <a href="/">
            {" "}
            <img src={todoLogo} alt="todo-log" className="w-44 m-auto" />
          </a>
          <TodoForm />
        </div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
