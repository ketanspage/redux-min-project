import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleCheckbox } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="mt-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className={`mt-4 flex justify-between items-center px-4 py-2 rounded ${
              todo.completed ? "bg-green-500" : getPriorityColor(todo.priority)
            }`}
            key={todo.id}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleCheckbox(todo.id))}
                className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mr-2"
              />
              <div className={`text-white ${todo.completed ? "line-through" : ""}`}>
                {todo.text}
              </div>
            </div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

function getPriorityColor(priority) {
  switch (priority) {
    case 'important':
      return 'bg-yellow-500';
    case 'urgent':
      return 'bg-red-500';
    case 'mundane':
    default:
      return 'bg-zinc-800'; 
  }
}

export default Todos;
