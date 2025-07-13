import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const titles = ["Web Developer", "Game Builder", "UI Enthusiast"];

const Home = () => {
  const fullName = "Sudhanshu Sureshrao Gode";
  const [typedName, setTypedName] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [blinker, setBlinker] = useState(true);

  // ✅ Type name once
  useEffect(() => {
    let index = 0;
    const typer = setInterval(() => {
      if (index < fullName.length) {
        setTypedName((prev) => prev + fullName.charAt(index));
        index++;
      } else {
        clearInterval(typer);
      }
    }, 100);
    return () => clearInterval(typer);
  }, []);

  // ✅ Loop role titles
  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(titleInterval);
  }, []);

  // ✅ Blinking "|"
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinker((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 text-center text-white overflow-x-hidden">
      {/* Hero */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mt-28 mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m {typedName}
      </motion.h1>

      {/* Titles */}
      <p className="text-xl font-mono text-white/80 min-h-[1.5rem]">
        {titles[titleIndex]} {blinker && <span className="animate-pulse">|</span>}
      </p>

      {/* 8. About Me */}
      <motion.section
        className="mt-28 max-w-4xl w-full text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-4">💡 About Me</h2>
        <p className="text-white/90 leading-relaxed">
          I’m a frontend developer with a sharp eye for design and interaction. I craft modern UIs, engaging experiences, and practical web tools that feel smooth and intuitive.
        </p>
      </motion.section>

      {/* 7. Skills */}
      <motion.section
        className="mt-24 max-w-4xl w-full text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-3">🧠 Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Framer Motion", "Git", "Responsive Design"].map((skill) => (
            <li
              key={skill}
              className="bg-white/10 px-4 py-2 rounded-md hover:bg-blue-400/30 transition text-center text-white/90 shadow hover:scale-105 duration-200"
            >
              {skill}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* 3. Focus */}
      <motion.section
        className="mt-24 max-w-4xl w-full text-left mb-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4">🎯 My Focus</h2>
        <ul className="list-disc ml-6 text-white/85 leading-relaxed space-y-2">
          <li>Designing immersive, fluid interfaces using React + Tailwind</li>
          <li>Making tools like calculators, games, and weather apps</li>
          <li>Blending performance with creativity to craft next-gen UIs</li>
        </ul>
      </motion.section>
    </div>
  );
};

export default Home;
