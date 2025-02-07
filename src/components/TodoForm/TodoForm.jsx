import { useDispatch, useSelector } from "react-redux";
import { addTodo, setNewTodo } from "../../store";

export default function TodoForm() {
  const dispatch = useDispatch();

  const handleTextChange = (event) => {
    dispatch(setNewTodo(event.target.value));
  };

  const { newTodo } = useSelector((state) => {
    return state.todo;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo({ text: newTodo }));
      dispatch(setNewTodo(""));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="newTodo"
        id="newTodo"
        value={newTodo}
        onChange={handleTextChange}
        className="border-2"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
