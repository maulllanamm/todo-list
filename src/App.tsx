import { Calendar, PlusCircle } from "lucide-react";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 border border-red-400 py-12 sm:px-6 lg:px-8 ">
        <div className="max-w-md mx-auto border border-green-400">
          <div className="text-center mb-8 border border-amber-400">
            <h1 className="text-3xl font-semibold text-gray-800">TODO LIST</h1>
            <p className="text-gray-600 mt-2">Manage your tasks efficiently</p>
          </div>

          {/* Add form todo */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-blue-400">
            <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg ">
              <input
                type="text"
                className="grow bg-transparent border-none focus:ring-0 focus:outline-none text-gray-700"
                placeholder="Add a new task..."
              />
              <div className="flex items-center gap-2 border border-amber-200">
                <div className="relative">
                  <input
                    type="date"
                    className="opacity-0 absolute inset-0 w-8 cursor-pointer"
                  />
                  <Calendar size={18} className="text-gray-500" />
                  <button
                    type="submit"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <PlusCircle size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
