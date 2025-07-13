import React, { useEffect, useState, useRef } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [dark] = useState(true);
  const [musicOn, setMusicOn] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicOn) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
      setMusicOn(!musicOn);
    }
  };

  return (
    <Router>
      <div
        className={`min-h-screen w-full font-sans relative z-10 transition duration-500 ${
          dark
            ? "bg-gradient-to-br from-black via-slate-900 to-blue-950 text-white"
            : "bg-white text-black"
        }`}
      >
        {/* Background Glow Circles */}
        <div className="absolute top-[-300px] left-[-300px] w-[600px] h-[600px] bg-blue-500 opacity-20 rounded-full blur-[200px] z-0"></div>
        <div className="absolute bottom-[-300px] right-[-300px] w-[600px] h-[600px] bg-purple-500 opacity-20 rounded-full blur-[200px] z-0"></div>

        {/* Music */}
        <audio ref={audioRef} src="/startup.mp3" loop autoPlay />

        <button
          onClick={toggleMusic}
          className="fixed bottom-6 left-6 z-[999] bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-full p-2 hover:bg-white/20 transition"
          title={musicOn ? "Turn music off" : "Turn music on"}
        >
          {musicOn ? "🔊" : "🔇"}
        </button>

        {/* Header */}
        <nav className="fixed w-full top-0 left-0 z-40 px-6 py-4 backdrop-blur-lg bg-white/10 dark:bg-black/30 border-b border-white/10 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text drop-shadow">
              Sudhanshu Sureshrao Gode
            </h1>
            <div className="flex gap-6 text-white/90 text-base md:text-lg font-medium">
              {["Home", "Projects", "Contact"].map((text, i) => {
                const path = text.toLowerCase() === "home" ? "/" : `/${text.toLowerCase()}`;
                return (
                  <Link
                    key={i}
                    to={path}
                    className="relative px-2 py-1 transition-all duration-300 text-white group"
                  >
                    {text}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-full rounded-full"></span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Pages */}
        <div className="pt-24 z-10 relative">
          <AnimatedRoutes />
        </div>

        {/* Footer */}
        <footer className="text-center py-6 border-t border-white/10 mt-20 text-white/60 text-sm relative z-10">
          <p>© {new Date().getFullYear()} Sudhanshu Gode • Built with 💙 React, Tailwind & Framer Motion</p>
          <div className="mt-2 flex justify-center gap-4 text-white/50 text-lg">
            <a href="mailto:sudhanshu@example.com" className="hover:text-white">📧</a>
            <a href="https://github.com/yourgithub" target="_blank" className="hover:text-white">GitHub</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-white">LinkedIn</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
