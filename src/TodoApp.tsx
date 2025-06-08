import {Plus} from 'lucide-react';

export default function TodoApp() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-indigo-900 p-4 overflow-hidden relative">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 pt-8">
                    <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-2xl bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
                        ✨ My Tasks
                    </h1>
                    <p className="text-white/80 text-lg">Organize your day with style</p>
                </div>

                {/* Add Todo Form */}
                <div className="mb-8">
                    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 border border-white/20 shadow-2xl">
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Add a new task..."
                                className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-300"
                            />
                            <button
                                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2"
                            >
                                <Plus size={20} />
                                Add
                            </button>
                        </div>
                    </div>
                </div>


                {/* Footer */}
                <div className="text-center mt-8 pb-8">
                    <p className="text-white/40 text-sm">Made with  for productivity</p>
                </div>
            </div>
        </div>
    );
}