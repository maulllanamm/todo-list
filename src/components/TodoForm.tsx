import { Plus } from "lucide-react";
import { Priority } from "../types/todo";
import { PRIORITIES } from "../utils/constans.ts";

interface TodoFormProps {
  newTodo: string;
  description: string;
  priority: Priority;
  onDescriptionChange: (value: string) => void;
  onNewTodoChange: (value: string) => void;
  onPriorityChange: (priority: Priority) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const TodoForm = ({
  newTodo,
  priority,
  description,
  onNewTodoChange,
  onDescriptionChange,
  onPriorityChange,
  onSubmit,
}: TodoFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <div className="space-y-4">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => onNewTodoChange(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <select
            value={priority}
            onChange={(e) => onPriorityChange(e.target.value as Priority)}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition-colors cursor-pointer min-w-32 appearance-none bg-no-repeat bg-right bg-[length:16px] pr-8"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: "right 0.75rem center",
            }}
          >
            {PRIORITIES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors flex items-center gap-2"
          >
            <Plus size={18} />
            Add
          </button>
        </form>
        <textarea
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          placeholder="Add description (optional)..."
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>
    </div>
  );
};
