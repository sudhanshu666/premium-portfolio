import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const projectData = [
  {
    title: "Weather App",
    description: "Real-time weather checker with city suggestions.",
    link: "/project/weather/index.html",
  },
  {
    title: "Calculator Site",
    description: "A clean and simple online calculator using HTML/CSS.",
    link: "/project/calculator/index.html",
  },
  {
    title: "Simple Website Game",
    description: "A fun, Chrome-Dino style mini game built from scratch.",
    link: "/project/game/index.html",
  },
];

const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const handleMouseMove = (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        const rotateX = (y - 0.5) * 10;
        const rotateY = (x - 0.5) * -10;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };

      const reset = () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", reset);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", reset);
      };
    });
  }, []);

  return (
    <motion.div
      className="min-h-screen px-4 sm:px-6 py-28 max-w-6xl mx-auto relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Floating blurred ring background */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[180px] rounded-full left-1/2 top-1/3 -translate-x-1/2 -z-10" />

      <h2 className="text-4xl font-bold text-center mb-12 text-white/90">
        📁 Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project, index) => (
          <motion.div
            ref={(el) => (cardsRef.current[index] = el)}
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="project-card group relative bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-2xl hover:bg-white/20 transition-all overflow-hidden cursor-pointer"
          >
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45 animate-shimmer"></div>
            </div>

            <h3 className="text-2xl font-semibold mb-2 text-blue-300 flex items-center gap-2">
              🚀 {project.title}
            </h3>
            <p className="text-white/80 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-400 hover:text-blue-200 font-medium transition-all underline underline-offset-4 decoration-blue-300 hover:decoration-blue-100"
            >
              Open Project →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
