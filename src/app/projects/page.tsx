"use client";

import { motion } from "framer-motion";
import CodeBackground from "@/components/CodeBackground";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern responsive portfolio with 3D elements and animations.",
    link: "https://github.com/SarthakAag/port",
  },
  {
    title: "Data Analytics Dashboard",
    description: "Dashboard for visualizing insights from large datasets.",
    link: "#",
  },
  // Add more projects here
];

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 gap-16 overflow-hidden"
    >
      {/* Background Layer */}
      <CodeBackground />

      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12
          bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400
          bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,180,255,0.8)]"
      >
        My Work
      </motion.h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            initial={{ opacity: 0, y: 40, rotateY: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-cyan-500/30 transition-transform duration-300 overflow-hidden"
          >
            {/* Gradient Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-2xl blur opacity-20"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-1 text-gray-300 text-sm sm:text-base">
                {project.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
