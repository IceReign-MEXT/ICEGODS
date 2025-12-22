export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-cyan-400 flex flex-col items-center justify-center font-mono">
      <div className="border-2 border-cyan-900 p-10 bg-black shadow-[0_0_50px_rgba(6,182,212,0.1)]">
        <h1 className="text-4xl mb-2 tracking-[1em] uppercase">IceGods</h1>
        <p className="text-xs text-cyan-800 mb-8 uppercase">Alien Brain Virtualization Protocol</p>
        
        <div className="space-y-4">
          <div className="text-sm border-l-2 border-cyan-500 pl-4 py-2 bg-cyan-950/20">
            SYSTEM STATUS: <span className="text-white animate-pulse">CONNECTED</span>
          </div>
          <div className="text-sm border-l-2 border-cyan-500 pl-4 py-2 bg-cyan-950/20">
            ISOLATION: <span className="text-white font-bold">100% SECURE</span>
          </div>
        </div>

        <a href="https://t.me/ICEGODSICEDEVILS" className="mt-10 block text-center border border-cyan-400 py-3 hover:bg-cyan-400 hover:text-black transition uppercase text-sm tracking-widest">
          Enter Mainframe
        </a>
      </div>
    </div>
  );
}
