import { useState } from "react";
import { TodoItem, Priority, Filter } from "../types/todo";
import { useLocalStorage } from "react-use";

export const useTodos = () => {
  const [todos, setTodos] = useLocalStorage<TodoItem[]>("todos", []);
  const [newTodo, setNewTodo] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<Priority>("low");
  const [filter, setFilter] = useState<Filter>("all");
  const [editInput, setEditInput] = useState<string>("");
  const [editDescription, setEditDescription] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [expandedTodos, setExpandedTodos] = useState<Set<number>>(new Set());

  const safeTodos = todos ?? [];
  const filteredTodos = safeTodos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const addTodo = (e: React.FormEvent) => {
    if (e) e.preventDefault();
    if (newTodo.trim()) {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        text: newTodo.trim(),
        description: description.trim(),
        completed: false,
        priority: priority,
      };
      setTodos([...safeTodos, newTodoItem]);
      setNewTodo("");
      setDescription("");
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(safeTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      safeTodos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const startEdit = (id: number, text: string, description: string) => {
    setEditingId(id);
    setEditInput(text);
    setEditDescription(description);
  };

  const saveEdit = (e: React.FormEvent) => {
    if (e) e.preventDefault();
    if (editInput.trim()) {
      setTodos(
        safeTodos.map((todo) =>
          todo.id === editingId
            ? {
                ...todo,
                text: editInput.trim(),
                description: editDescription.trim(),
              }
            : todo
        )
      );
      setEditingId(null);
      setEditInput("");
      setEditDescription("");
    }
  };

  const cancelEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setEditingId(null);
    setEditInput("");
    setEditDescription("");
  };

  const toggleExpanded = (id: number) => {
    setExpandedTodos((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const completedCount = safeTodos.filter((todo) => todo.completed).length;
  const activeCount = safeTodos.filter((todo) => !todo.completed).length;

  return {
    // State
    todos,
    newTodo,
    description,
    priority,
    filter,
    editInput,
    editingId,
    editDescription,
    filteredTodos,
    completedCount,
    activeCount,
    expandedTodos,

    // State setters
    setNewTodo,
    setPriority,
    setDescription,
    setFilter,
    setEditInput,
    setEditDescription,
    setExpandedTodos,

    // Actions
    addTodo,
    deleteTodo,
    toggleTodo,
    toggleExpanded,
    startEdit,
    saveEdit,
    cancelEdit,
  };
};
