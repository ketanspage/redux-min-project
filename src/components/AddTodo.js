import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('normal'); // Initialize priority
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text: input, priority })); // Pass priority to addTodo
    setInput('');
  };

  return (
    <form onSubmit={addTodoHandler} className="mt-12 space-x-3">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-gray-100 py-2 px-3 outline-none transition-colors duration-200 ease-in-out"
        
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <select
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-gray-100 py-2 px-3 outline-none transition-colors duration-200 ease-in-out"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="normal">Mundane</option>
        <option value="important">Important</option>
        <option value="urgent">Urgent</option>
      </select>

      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
