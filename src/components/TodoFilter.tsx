import { Filter } from "../types/todo";
import { FILTERS } from "../utils/constans.ts";

interface TodoFilterProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

export const TodoFilter = ({ filter, onFilterChange }: TodoFilterProps) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1">
        {FILTERS.map((filterType) => (
          <button
            key={filterType}
            onClick={() => onFilterChange(filterType)}
            className={`px-4 py-2 text-sm font-medium rounded-md capitalize transition-colors ${
              filter === filterType
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {filterType}
          </button>
        ))}
      </div>
    </div>
  );
};
