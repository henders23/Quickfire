import { useState, useEffect } from "react";
import { Play, ChevronRight } from "lucide-react";

interface Props {
  streak: number;
  onStart: () => void;
}

export default function StartScreen({ streak: _streak, onStart }: Props) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans overflow-hidden flex flex-col items-center justify-center">
      {/* Animated background waveform */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg className="absolute top-1/2 left-0 w-full h-64 -translate-y-1/2" viewBox="0 0 1000 200">
          <path
            d="M0,100 L300,100 L320,40 L340,160 L360,100 L600,100 L620,20 L640,180 L660,100 L1000,100"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="2"
          >
            <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="5s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      {/* Title block */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <h1
          className={`text-8xl md:text-[10rem] font-black italic tracking-tighter leading-none transition-all duration-75 select-none ${glitch ? "skew-x-12 translate-x-1 text-cyan-400" : "text-white"}`}
          style={{
            textShadow: glitch ? "3px 0 #ff00ff, -3px 0 #22d3ee" : "0 0 40px rgba(34,211,238,0.45)",
            WebkitTextStroke: "1px rgba(255,255,255,0.08)",
          }}
        >
          QUICKFIRE
        </h1>

        <p className="text-cyan-400 tracking-[0.55em] uppercase text-sm font-bold opacity-80 pl-[0.55em]">
          academic grammar and vocabulary
        </p>

        <button
          onClick={onStart}
          className="group relative overflow-hidden mt-8 bg-cyan-500 text-black py-5 px-10 flex items-center gap-5 hover:bg-white transition-all duration-300"
        >
          <Play size={22} fill="currentColor" />
          <span className="text-xl font-black tracking-tight">START GAME</span>
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          {/* Shimmer */}
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out" />
        </button>
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-50" />
    </div>
  );
}
