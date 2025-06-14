import { useTodos } from "./hooks/useTodos";
import { TodoHeader } from "./components/TodoHeader";
import { TodoForm } from "./components/TodoForm";
import { TodoFilter } from "./components/TodoFilter";
import { TodoList } from "./components/TodoList";
import { TodoStats } from "./components/TodoStats";
import { Footer } from "./components/Footer";

export function TodoApp() {
  const {
    newTodo,
    priority,
    description,
    filter,
    editInput,
    editingId,
    editDescription,
    filteredTodos,
    safeTodos,
    completedCount,
    activeCount,
    expandedTodos,
    setNewTodo,
    setPriority,
    setFilter,
    setEditInput,
    setEditDescription,
    setDescription,

    addTodo,
    deleteTodo,
    toggleTodo,
    toggleExpanded,
    startEdit,
    saveEdit,
    cancelEdit,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <TodoHeader />

        <TodoForm
          newTodo={newTodo}
          priority={priority}
          description={description}
          onDescriptionChange={setDescription}
          onNewTodoChange={setNewTodo}
          onPriorityChange={setPriority}
          onSubmit={addTodo}
        />

        <TodoFilter filter={filter} onFilterChange={setFilter} />

        <TodoList
          todos={filteredTodos}
          expandedTodos={expandedTodos}
          editingId={editingId}
          editInput={editInput}
          editDescription={editDescription}
          onToggleTodo={toggleTodo}
          onToggleExpanded={toggleExpanded}
          onDeleteTodo={deleteTodo}
          onStartEdit={startEdit}
          onSaveEdit={saveEdit}
          onCancelEdit={cancelEdit}
          onEditInputChange={setEditInput}
          onEditDescriptionChange={setEditDescription}
        />

        <TodoStats
          totalCount={safeTodos.length}
          completedCount={completedCount}
          activeCount={activeCount}
        />

        <Footer />
      </div>
    </div>
  );
}
