import React, {useState} from "react";
import {addtodo, removetodo, updatetodo} from "./authSlice";
import {useDispatch, useSelector} from "react-redux";

export default function TodoPage() {
  const [newTitle, setNewTitle] = useState("");
  const [title, setTitle] = useState("");
  const [editableTodoId, setEditableTodoId] = useState(null);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.data.todo);

  const addfunc = () => {
    const c = {
      id: Date.now(),
      title: title,
      isActive: true,
    };
    if (title == "") {
    } else {
      dispatch(addtodo(c));
    }
    setTitle("");
  };

  const handleEditClick = (todo) => {
    if (editableTodoId === todo.id) {
      dispatch(updatetodo({id: todo.id, texttodo: newTitle}));
      setEditableTodoId(null);
    } else {
      setEditableTodoId(todo.id);
      setNewTitle(todo.title);
    }
  };

  return (
    <div className="todo-container" style={{minHeight: "289px"}}>
      <h2 className="text-center text-2xl font-bold mb-6">Todo List</h2>

      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="border p-2 rounded w-1/2"
          placeholder="Add a new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="ml-2 px-4 py-2 bg-teal-600 text-white rounded"
          onClick={addfunc}
        >
          Add
        </button>
      </div>

      <ul className="todo-list">
        {todos && todos.length > 0 ? (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="todo-item flex justify-between items-center pl-10 pr-10 bg-gray-100 rounded-lg mb-2"
            >
              {editableTodoId === todo.id ? (
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="flex-1 p-1 border-2 border-black rounded-md mr-2"
                />
              ) : (
                <p className="flex-1 text-lg">{todo.title}</p>
              )}

              <button
                className="text-blue-500 hover:text-blue-700 transition duration-200"
                onClick={() => handleEditClick(todo)}
              >
                {editableTodoId === todo.id ? <h2>Save</h2> : <h2>Edit</h2>}
              </button>

              <button
                onClick={() => dispatch(removetodo(todo.id))} // Remove todo
                className="text-red-500 hover:text-red-700 transition duration-200 ml-2"
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <li className="text-center text-gray-500">No todos available</li>
        )}
      </ul>
    </div>
  );
}
