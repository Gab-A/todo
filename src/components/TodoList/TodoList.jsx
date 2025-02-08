import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../../store";

export default function TodoList() {
  const dispatch = useDispatch();

  const filteredCompletedTodos = useSelector((state) => {
    return state.todo.todos.filter((todo) => todo.completed !== false);
  }, shallowEqual);

  const filteredActiveTodos = useSelector((state) => {
    return state.todo.todos.filter((todo) => todo.completed !== true);
  }, shallowEqual);

  const toggleTodoHandler = (id) => {
    dispatch(toggleTodo(id));
  };

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const activeBtnStyles =
    "rounded-full border-[#2f6ca2] border-2 w-5  h-5 cursor-pointer";
  const completedBtnStyles = `${activeBtnStyles} bg-[#2f6ca2] flex justify-center items-center`;

  const dividerStyles = "border-t-[1.5px] border-[#feefe0] mt-4";
  const sectionTitleStyles = "text-[#2f6ca2] font-bold uppercase mt-5 text-lg";

  const renderTodoList = (todos, isCompleted) => {
    return todos.map((todo) => (
      <div key={todo.id} className="flex justify-between">
        <div className="flex items-center gap-2 mt-2">
          <button
            className={`${isCompleted ? completedBtnStyles : activeBtnStyles}`}
            onClick={() => toggleTodoHandler(todo.id)}
          >
            {isCompleted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="#e8e8e8"
                className="size-3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            )}
          </button>
          <p className="font-light text-lg">{todo.text}</p>
        </div>
        <div className="flex">
          <button
            onClick={() => removeTodoHandler(todo.id)}
            className="font-bold text-lg text-[#2f6ca2] cursor-pointer"
          >
            X
          </button>
        </div>
      </div>
    ));
  };

  const renderedCompletedTodosList = renderTodoList(
    filteredCompletedTodos,
    true
  );
  const renderedActiveTodosList = renderTodoList(filteredActiveTodos, false);

  return (
    <div className="p-6 space-y-4 h-full ">
      <div className={dividerStyles}></div>
      <div className="h-2/5">
        <h1 className={sectionTitleStyles}>Todo Tasks</h1>
        {renderedActiveTodosList}
      </div>
      <div className={dividerStyles}></div>
      <div>
        <h1 className={sectionTitleStyles}>Completed Tasks</h1>
        {renderedCompletedTodosList}
      </div>
    </div>
  );
}
