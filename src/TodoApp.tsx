import * as React from "react";
import { useState } from "react";
import { Check, Plus } from "lucide-react";

type Priority = "low" | "medium" | "high";
type Category = "Work" | "Personal" | "Other";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
  priority: Priority;
  category: Category;
}
export function TodoApp() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [priority, setPriority] = useState<Priority>("low");

  const dropdownPriority: Priority[] = ["low", "medium", "high"];

  const handleAddTodo = (e: React.FormEvent) => {
    if (e) e.preventDefault();
    if (newTodo.trim()) {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
        priority: priority,
        category: "Work",
      };
      setTodos((prevState) => [...prevState, newTodoItem]);
      setNewTodo("");
    }
  };

  function toggleTodo(id: number) {
    const todosMap = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item,
    );
    setTodos(todosMap);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            React Todo App
          </h1>
          <p className="text-gray-600">
            A simple todo application built with React hooks
          </p>
        </header>

        {/* Add Todo */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex gap-3">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as Priority)}
              className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition-colors cursor-pointer min-w-32 appearance-none bg-no-repeat bg-right bg-[length:16px] pr-8"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: "right 0.75rem center",
              }}
            >
              {dropdownPriority.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button
              onClick={handleAddTodo}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors flex items-center gap-2"
            >
              <Plus size={18} />
              Add
            </button>
          </div>
        </div>

        {/* Todo List */}
        <div className="bg-white rounded-lg shadow-sm border">
          {todos.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p>No tasks found</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {/* Checkbox */}
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        todo.completed
                          ? "bg-green-500 border-green-500 text-white"
                          : "border-gray-300 hover:border-green-400"
                      }`}
                    >
                      {todo.completed && <Check size={14} />}
                    </button>
                    <div className="flex-1">
                      <div>
                        <span
                          className={`text-base ${
                            todo.completed
                              ? "text-gray-500 line-through"
                              : "text-gray-800"
                          }`}
                        >
                          {todo.text}
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              todo.priority === "high"
                                ? "bg-red-100 text-red-700"
                                : todo.priority === "medium"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-green-100 text-green-700"
                            }`}
                          >
                            {todo.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-500 text-sm">
          <p>
            Built with React • Demonstrating hooks, state management, and
            component patterns
          </p>
        </footer>
      </div>
    </div>
  );
}
