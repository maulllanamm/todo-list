interface TodoStatsProps {
  totalCount: number;
  completedCount: number;
  activeCount: number;
}

export const TodoStats = ({
  totalCount,
  completedCount,
  activeCount,
}: TodoStatsProps) => {
  const progressPercentage =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="mt-6 bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Statistics</h3>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-gray-800">{totalCount}</div>
          <div className="text-sm text-gray-500">Total</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-600">
            {completedCount}
          </div>
          <div className="text-sm text-gray-500">Completed</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-600">{activeCount}</div>
          <div className="text-sm text-gray-500">Active</div>
        </div>
      </div>

      {totalCount > 0 && (
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progress</span>
            <span>{progressPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
