import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../../store";

export default function TodoList() {
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => {
    return state.todo;
  });

  console.log(todos);

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      {todos?.length > 0 &&
        todos.map((todo) => {
          return (
            <div key={todo.id} className="flex gap-2">
              <p>{todo.text}</p>
              <button onClick={() => handleToggleTodo(todo.id)}>Update</button>
              <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
}
