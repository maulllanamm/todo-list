import { TodoItem as TodoItemComponent } from "./TodoItem";
import { TodoItem } from "../types/todo";

interface TodoListProps {
  todos: TodoItem[];
  expandedTodos: Set<number>;
  editingId: number | null;
  editInput: string;
  editDescription: string;
  onToggleTodo: (id: number) => void;
  onToggleExpanded: (id: number) => void;
  onDeleteTodo: (id: number) => void;
  onStartEdit: (id: number, text: string, description: string) => void;
  onSaveEdit: (e: React.FormEvent) => void;
  onCancelEdit: (e: React.FormEvent) => void;
  onEditInputChange: (value: string) => void;
  onEditDescriptionChange: (value: string) => void;
}

export const TodoList = ({
  todos,
  expandedTodos,
  editingId,
  editInput,
  editDescription,
  onToggleTodo,
  onToggleExpanded,
  onDeleteTodo,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  onEditInputChange,
  onEditDescriptionChange,
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
        {[...todos]
          .sort((a, b) => {
            if (a.completed !== b.completed) {
              return Number(a.completed) - Number(b.completed);
            }

            const priorityOrder = { high: 0, medium: 1, low: 2 };
            return priorityOrder[a.priority] - priorityOrder[b.priority];
          })
          .map((todo) => (
            <TodoItemComponent
              key={todo.id}
              todo={todo}
              expandedTodos={expandedTodos}
              isEditing={editingId === todo.id}
              editInput={editInput}
              editDescription={editDescription}
              onToggle={onToggleTodo}
              onToggleExpanded={onToggleExpanded}
              onDelete={onDeleteTodo}
              onStartEdit={onStartEdit}
              onSaveEdit={onSaveEdit}
              onCancelEdit={onCancelEdit}
              onEditInputChange={onEditInputChange}
              onEditDescriptionChange={onEditDescriptionChange}
            />
          ))}
      </ul>
    </div>
  );
};
