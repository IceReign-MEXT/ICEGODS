export default function IceGods() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navbar */}
      <nav className="border-b border-slate-800 p-4 flex justify-between items-center bg-slate-900/50 backdrop-blur-md">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          ICEGODS
        </h1>
        <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition">
          + New Bot
        </button>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-xl font-semibold mb-6">Your Services</h2>
        
        {/* Bot Card (Like Render) */}
        <div className="grid gap-4">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex justify-between items-center hover:border-blue-500/50 transition cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div>
                <h3 className="font-bold">Music-Bot-01</h3>
                <p className="text-slate-400 text-sm">main.py • GitHub: icegods/bot</p>
              </div>
            </div>
            <span className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-300">Running</span>
          </div>
        </div>
      </main>
    </div>
  );
}

