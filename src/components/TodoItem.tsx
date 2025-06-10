import { Check, Edit3, X } from "lucide-react";
import { TodoItem as TodoItemType } from "../types/todo";
import { PRIORITY_STYLES } from "../utils/constans.ts";

interface TodoItemProps {
  todo: TodoItemType;
  isEditing: boolean;
  editInput: string;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onStartEdit: (id: number, text: string) => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
  onEditInputChange: (value: string) => void;
}

export const TodoItem = ({
  todo,
  isEditing,
  editInput,
  onToggle,
  onDelete,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  onEditInputChange,
}: TodoItemProps) => {
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveEdit();
  };

  const handleCancelEdit = (e: React.FormEvent) => {
    e.preventDefault();
    onCancelEdit();
  };

  return (
    <li className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3">
        {/* Checkbox */}
        <button
          onClick={() => onToggle(todo.id)}
          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
            todo.completed
              ? "bg-green-500 border-green-500 text-white"
              : "border-gray-300 hover:border-green-400"
          }`}
        >
          {todo.completed && <Check size={14} />}
        </button>

        {/* Todo Content */}
        <div className="flex-1">
          {isEditing ? (
            <form onSubmit={handleSaveEdit} className="flex gap-2">
              <input
                type="text"
                value={editInput}
                onChange={(e) => onEditInputChange(e.target.value)}
                className="flex-1 px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
              >
                Save
              </button>
              <button
                onClick={handleCancelEdit}
                className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
              >
                Cancel
              </button>
            </form>
          ) : (
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
                  className={`text-xs px-2 py-1 rounded-full ${PRIORITY_STYLES[todo.priority]}`}
                >
                  {todo.priority}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        {!isEditing && (
          <div className="flex items-center gap-1">
            <button
              onClick={() => onStartEdit(todo.id, todo.text)}
              className="p-2 text-gray-400 hover:text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
              title="Edit"
            >
              <Edit3 size={16} />
            </button>

            <button
              onClick={() => onDelete(todo.id)}
              className="p-2 text-gray-400 hover:text-red-500 rounded-md hover:bg-red-50 transition-colors"
              title="Delete"
            >
              <X size={16} />
            </button>
          </div>
        )}
      </div>
    </li>
  );
};
