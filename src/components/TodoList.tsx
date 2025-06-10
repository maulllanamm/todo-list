import { TodoItem as TodoItemComponent } from "./TodoItem";
import { TodoItem } from "../types/todo";

interface TodoListProps {
  todos: TodoItem[];
  editingId: number | null;
  editInput: string;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
  onStartEdit: (id: number, text: string) => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
  onEditInputChange: (value: string) => void;
}

export const TodoList = ({
  todos,
  editingId,
  editInput,
  onToggleTodo,
  onDeleteTodo,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  onEditInputChange,
}: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-8 text-center text-gray-500">
          <p>No tasks found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <ul className="divide-y divide-gray-200">
        {todos.map((todo) => (
          <TodoItemComponent
            key={todo.id}
            todo={todo}
            isEditing={editingId === todo.id}
            editInput={editInput}
            onToggle={onToggleTodo}
            onDelete={onDeleteTodo}
            onStartEdit={onStartEdit}
            onSaveEdit={onSaveEdit}
            onCancelEdit={onCancelEdit}
            onEditInputChange={onEditInputChange}
          />
        ))}
      </ul>
    </div>
  );
};
