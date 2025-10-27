"use client";

import React, { useState, useEffect } from "react";

const projectsData = [
  {
    id: 1,
    name: "E-Commerce Platform",
    type: "fullstack",
    description: "Modern e-commerce platform with cart, payments, and admin dashboard",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
    features: ["User Authentication", "Shopping Cart", "Payment Integration", "Admin Dashboard", "Order Management"],
    github: "https://github.com/kawsar/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    status: "completed"
  },
  {
    id: 2,
    name: "Task Management App", 
    type: "frontend",
    description: "Collaborative task management tool with real-time updates",
    tech: ["Next.js", "TypeScript", "Firebase", "Framer Motion"],
    features: ["Real-time Collaboration", "Drag & Drop", "Team Management", "Progress Tracking", "Notifications"],
    github: "https://github.com/kawsar/task-manager",
    live: "https://taskmanager-demo.vercel.app",
    status: "completed"
  },
  {
    id: 3,
    name: "Weather Dashboard",
    type: "api-integration", 
    description: "Beautiful weather dashboard with location-based forecasts",
    tech: ["Vue.js", "OpenWeather API", "Chart.js", "Geolocation"],
    features: ["Location Detection", "5-Day Forecast", "Weather Charts", "City Search", "Responsive Design"],
    github: "https://github.com/kawsar/weather-dashboard",
    live: "https://weather-app-demo.vercel.app",
    status: "in-progress"
  }
];

const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const ProjectCard = ({ project, index, currentIndex, onClick }) => {
  const getCardStyle = () => {
    const diff = index - currentIndex;
    const absIndex = Math.abs(diff);
    
    let transform = "";
    let opacity = 1;
    let zIndex = 5;
    let filter = "";

    if (diff === 0) {
      // Active card
      transform = "translateX(0%) rotateY(0deg) scale(1)";
      zIndex = 10;
      opacity = 1;
    } else if (diff === -1 || (diff === projectsData.length - 1 && currentIndex === 0)) {
      // Left card
      transform = "translateX(-90%) rotateY(45deg) scale(0.8)";
      zIndex = 8;
      opacity = 0.6;
      filter = "brightness(0.7)";
    } else if (diff === 1 || (diff === -(projectsData.length - 1) && currentIndex === projectsData.length - 1)) {
      // Right card
      transform = "translateX(90%) rotateY(-45deg) scale(0.8)";
      zIndex = 8;
      opacity = 0.6;
      filter = "brightness(0.7)";
    } else {
      // Hidden cards
      const side = diff > 0 ? 1 : -1;
      transform = `translateX(${side * 150}%) rotateY(${-side * 75}deg) scale(0.6)`;
      zIndex = 4;
      opacity = 0.2;
      filter = "brightness(0.4)";
    }

    return {
      transform,
      opacity,
      zIndex,
      filter,
    };
  };

  const style = getCardStyle();

  return (
    <div 
      className="absolute w-full max-w-4xl cursor-pointer transition-all duration-700 ease-out"
      style={{
        transform: style.transform,
        opacity: style.opacity,
        zIndex: style.zIndex,
        filter: style.filter,
      }}
      onClick={() => onClick(index)}
    >
      <div className="max-w-4xl w-full mx-auto bg-gradient-to-r from-[#000000] to-[#0a0d37] border-[#1b2c68a0] relative rounded-lg border shadow-2xl">
        {/* Top border gradient */}
        <div className="flex flex-row">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500 to-purple-600"></div>
          <div className="h-[2px] w-full bg-gradient-to-r from-purple-600 to-transparent"></div>
        </div>

        {/* Title bar */}
        <div className="px-4 lg:px-8 py-5 flex justify-between items-center bg-[#000000]">
          <div className="flex flex-row space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
          <div className="text-xs text-gray-400 font-mono">
            {project.name.toLowerCase().replace(/\s+/g, '-')}.js
          </div>
        </div>

        {/* Code content */}
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 relative">
          {/* Background blurs */}
          <div className="absolute -top-24 -left-24 w-56 h-56 bg-orange-600 rounded-full opacity-10 filter blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-purple-600 rounded-full opacity-10 filter blur-3xl"></div>

          <div className="relative flex">
            {/* Line numbers */}
            <div className="hidden md:flex flex-col items-end pr-4 text-gray-500 font-mono text-xs">
              {Array.from({ length: 16 }, (_, i) => (
                <div key={i} className="leading-relaxed select-none opacity-70">
                  {i + 1}
                </div>
              ))}
            </div>

            {/* Code */}
            <code className="font-mono text-xs md:text-sm lg:text-base w-full">
              <div>
                <span className="mr-2 text-pink-400">const</span>
                <span className="mr-2 text-violet-400">project</span>
                <span className="mr-2 text-pink-400">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              
              <div className="pl-6">
                <span className="text-white">name:</span>
                <span className="text-gray-400">&#39;</span>
                <span className="text-green-400">{project.name}</span>
                <span className="text-gray-400">&#39;,</span>
              </div>
              
              <div className="pl-6">
                <span className="text-white">type:</span>
                <span className="text-gray-400">&#39;</span>
                <span className="text-green-400">{project.type}</span>
                <span className="text-gray-400">&#39;,</span>
              </div>
              
              <div className="pl-6">
                <span className="text-white">description:</span>
                <span className="text-gray-400">&#39;</span>
                <span className="text-green-400">{project.description}</span>
                <span className="text-gray-400">&#39;,</span>
              </div>
              
              <div className="pl-6">
                <span className="text-white">technologies:</span>
                <span className="text-gray-400">{"["}</span>
                <div className="pl-6 flex flex-wrap">
                  {project.tech.map((tech, index) => (
                    <span key={tech} className="mr-1">
                      <span className="text-gray-400">&#39;</span>
                      <span className="text-cyan-400">{tech}</span>
                      <span className="text-gray-400">&#39;</span>
                      {index < project.tech.length - 1 && (
                        <span className="text-gray-400">, </span>
                      )}
                    </span>
                  ))}
                </div>
                <span className="text-gray-400">{"],"}</span>
              </div>
              
              <div className="pl-6">
                <span className="text-white">features:</span>
                <span className="text-gray-400">{"["}</span>
                <div className="pl-6">
                  {project.features.map((feature, index) => (
                    <div key={feature}>
                      <span className="text-gray-400">&#39;</span>
                      <span className="text-yellow-400">{feature}</span>
                      <span className="text-gray-400">&#39;</span>
                      {index < project.features.length - 1 && (
                        <span className="text-gray-400">,</span>
                      )}
                    </div>
                  ))}
                </div>
                <span className="text-gray-400">{"],"}</span>
              </div>
              
              <div className="pl-6">
                <span className="text-white">status:</span>
                <span className="text-gray-400">&#39;</span>
                <span className={`${project.status === 'completed' ? 'text-green-400' : 'text-orange-400'}`}>
                  {project.status}
                </span>
                <span className="text-gray-400">&#39;,</span>
              </div>
              
              <div className="pl-6">
                <span className="text-white">links:</span>
                <span className="text-gray-400">{"{"}</span>
                <div className="pl-6">
                  <span className="text-white">github:</span>
                  <span className="text-gray-400">&#39;</span>
                  <span className="text-blue-400 hover:underline cursor-pointer">{project.github}</span>
                  <span className="text-gray-400">&#39;,</span>
                </div>
                <div className="pl-6">
                  <span className="text-white">live:</span>
                  <span className="text-gray-400">&#39;</span>
                  <span className="text-blue-400 hover:underline cursor-pointer">{project.live}</span>
                  <span className="text-gray-400">&#39;</span>
                </div>
                <span className="text-gray-400">{"}"}</span>
              </div>
              
              <div>
                <span className="text-gray-400">{"};"}</span>
              </div>
            </code>
          </div>
        </div>

        {/* Status bar */}
        <div className="px-4 lg:px-8 pb-4 mt-4 border-t border-gray-800 pt-3 text-xs text-gray-500 flex justify-between items-center">
          <span>UTF-8</span>
          <span>JavaScript</span>
          <span className={`px-2 py-1 rounded ${project.status === 'completed' ? 'bg-green-900/30 text-green-400' : 'bg-orange-900/30 text-orange-400'}`}>
            {project.status}
          </span>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle card
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 700);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 pointer-events-none">
        <div className="w-[40rem] h-[40rem] bg-gradient-to-br from-orange-800/15 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 pointer-events-none">
        <div className="w-[35rem] h-[35rem] bg-gradient-to-tl from-purple-800/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase bg-orange-900/30 rounded-full mb-4">
            Featured Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black text-white mb-6">
            My <span className="text-gradient text-glow">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore my development projects through an immersive 2D perspective slider with VS Code styling and smooth animations.
          </p>
        </div>

        {/* 2D Perspective Slider */}
        <div className="relative h-[600px] flex items-center justify-center mb-16">
          <div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ 
              perspective: "1500px",
              perspectiveOrigin: "center center"
            }}
          >
            {projectsData.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                currentIndex={currentIndex}
                onClick={goToSlide}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800/90 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800/90 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-3 mb-16">
          {projectsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${index === currentIndex 
                  ? 'bg-orange-500 w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
                }
              `}
            />
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold text-orange-500 mb-1">3+</div>
            <div className="text-gray-400 text-sm">Projects</div>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold text-orange-500 mb-1">2D</div>
            <div className="text-gray-400 text-sm">Perspective</div>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold text-orange-500 mb-1">VS</div>
            <div className="text-gray-400 text-sm">Code Style</div>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold text-orange-500 mb-1">60fps</div>
            <div className="text-gray-400 text-sm">Animation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
