import * as React from "react";
import { useState } from "react";
import { Plus } from "lucide-react";

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

  const handleAddTodo = (e: React.FormEvent) => {
    if (e) e.preventDefault();
    if (newTodo.trim()) {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
        priority: "medium",
        category: "Work",
      };
      setTodos((prevState) => [...prevState, newTodoItem]);
      setNewTodo("");
    }
  };

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
