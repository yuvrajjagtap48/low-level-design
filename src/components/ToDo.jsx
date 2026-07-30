import { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Add or Update Todo
  const handleTodo = () => {
    if (input.trim() === "") return;

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = input;
      setTodos(updatedTodos);
      setEditIndex(null);
    } 
    else {
      setTodos([...todos, input]);
    }

    setInput("");
  };   

  // Delete Todo
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
    if (editIndex === index) {
      setInput("");
      setEditIndex(null);
    }
  };

  // Edit Todo
  const editTodo = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };

  // Clear All
  const clearAll = () => {
    setTodos([]);
    setInput("");
    setEditIndex(null);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5">
      <h1 className="text-3xl font-bold text-center mb-5">
        Todo App
      </h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded flex-1"
        />

        <button
          onClick={handleTodo}
          className="bg-green-500 text-white px-4 rounded"
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <button
        onClick={clearAll}
        className="bg-red-500 text-white px-4 py-2 rounded mb-4"
      >
        Clear All
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center border p-2 rounded mb-2"
          >
            <span>{todo}</span>

            <div className="space-x-2">
              <button
                onClick={() => editTodo(index)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteTodo(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;