import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleCheckbox, editTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // State to track the edited text
  const [editedText, setEditedText] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);

  const handleEditClick = (todo) => {
    setEditedText(todo.text);
    setEditingTodoId(todo.id);
  };

  const handleSaveClick = () => {
    if (editedText.trim() !== "") {
      dispatch(editTodo({ id: editingTodoId, text: editedText }));
      setEditingTodoId(null);
    }
  };

  const handleCancelClick = () => {
    setEditedText("");
    setEditingTodoId(null);
  };

  return (
    <div className="container mx-auto px-8 py-8">
      <h2 className="text-lg font-bold mb-4">Todos</h2>
      <ul className="list-none">
        {todos.map((todo) => (
          <div key={todo.id}>
            <li
              className={`mt-4 flex justify-between items-center px-4 py-2 rounded ${
                todo.completed ? "bg-green-500" : getPriorityColor(todo.priority)
              }`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleCheckbox(todo.id))}
                  className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mr-2"
                />
                {editingTodoId === todo.id ? (
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                ) : (
                  <div className={`text-white ${todo.completed ? "line-through" : ""}`}>
                    {todo.text}
                  </div>
                )}
              </div>
              <div className="justify-between space-x-2">
                {editingTodoId === todo.id ? (
                  <>
                    <button
                      onClick={handleSaveClick}
                      className="text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelClick}
                      className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-lg"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleEditClick(todo)}
                    className="text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-lg"
                >
                  Delete
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

function getPriorityColor(priority) {
  switch (priority) {
    case 'important':
      return 'bg-yellow-500';
    case 'urgent':
      return 'bg-orange-500';
    case 'mundane':
    default:
      return 'bg-zinc-800'; 
  }
}

export default Todos;
