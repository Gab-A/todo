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
      const capitalisedTodo =
        newTodo.slice(0, 1).toUpperCase() + newTodo.slice(1);
      dispatch(addTodo({ text: capitalisedTodo }));
      dispatch(setNewTodo(""));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="-mt-10 ml-5 flex">
      <input
        type="text"
        name="newTodo"
        id="newTodo"
        value={newTodo}
        onChange={handleTextChange}
        className="rounded-full bg-gray-200 border-gray-200 p-2.5 pl-5 focus:outline-none m-auto sm:w-[85%] sm:items-stretch"
        placeholder="Add your task"
      />
      <button
        type="submit"
        className="bg-[#2f6ca2] uppercase font-semibold text-white rounded-full p-2.5 px-5 -ml-8 cursor-pointer sm:-ml-20"
      >
        Add
      </button>
    </form>
  );
}
