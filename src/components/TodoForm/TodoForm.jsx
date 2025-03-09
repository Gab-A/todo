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
    <form onSubmit={handleSubmit} className="-mt-10">
      <div className="relative flex">
        <input
          type="text"
          name="newTodo"
          id="newTodo"
          value={newTodo}
          onChange={handleTextChange}
          className="rounded-full bg-gray-200 border-gray-200 p-2.5 pl-5 focus:outline-none m-auto min-[400px]:w-[85%] sm:w-[85%] sm:items-stretch md:w-[95%] lg:w-[70%] xl:w-[75%]"
          placeholder="Add your task"
        />
        <button
          type="submit"
          className="absolute bg-[#2f6ca2] hover:bg-[#255482] uppercase font-semibold text-white rounded-full p-2.5 px-5 right-4 cursor-pointer transition active:scale-95 lg:right-30 xl:right-26 2xl:right-38"
        >
          Add
        </button>
      </div>
    </form>
  );
}
