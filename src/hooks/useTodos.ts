import { useState } from "react";
import { TodoItem, Priority, Filter } from "../types/todo";

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [priority, setPriority] = useState<Priority>("low");
  const [filter, setFilter] = useState<Filter>("all");
  const [editInput, setEditInput] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const addTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
        priority: priority,
      };
      setTodos((prevState) => [...prevState, newTodoItem]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const startEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditInput(text);
  };

  const saveEdit = () => {
    if (editInput.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === editingId ? { ...todo, text: editInput.trim() } : todo,
        ),
      );
      setEditingId(null);
      setEditInput("");
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditInput("");
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = todos.filter((todo) => !todo.completed).length;

  return {
    // State
    todos,
    newTodo,
    priority,
    filter,
    editInput,
    editingId,
    filteredTodos,
    completedCount,
    activeCount,

    // State setters
    setNewTodo,
    setPriority,
    setFilter,
    setEditInput,

    // Actions
    addTodo,
    deleteTodo,
    toggleTodo,
    startEdit,
    saveEdit,
    cancelEdit,
  };
};
