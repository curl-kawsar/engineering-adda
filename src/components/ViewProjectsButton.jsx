"use client";

import React, { useState, useRef, useEffect } from "react";

const ViewProjectsButton = ({ className = "", size = "default" }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef(null);

  // Size variants
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };

  // Handle click with ripple effect
  const handleClick = (e) => {
    const button = buttonRef.current;
    if (button) {
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      const newRipple = {
        x,
        y,
        size,
        id: Date.now()
      };

      setRipples(prev => [...prev, newRipple]);
      setIsClicked(true);
      
      // Scroll to projects section
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
      
      // Reset click state
      setTimeout(() => setIsClicked(false), 200);
    }
  };

  // Ripple effect styles
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes glass-ripple {
        0% { transform: scale(0); opacity: 0.8; }
        100% { transform: scale(4); opacity: 0; }
      }
      
      .glass-ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        animation: glass-ripple 0.6s linear;
        pointer-events: none;
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative overflow-hidden rounded-xl font-bold
        backdrop-blur-xl bg-white/10 border border-white/20
        text-white shadow-2xl
        transition-all duration-300 ease-out
        transform hover:scale-105 hover:-translate-y-1
        active:scale-95
        focus:outline-none focus:ring-4 focus:ring-white/30
        ${sizeClasses[size]}
        ${isClicked ? 'scale-95' : ''}
        ${isHovered ? 'bg-white/20 border-white/30 shadow-white/10' : ''}
        ${className}
      `}
      style={{
        background: isHovered 
          ? 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Glass reflection layers */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50"></div>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tl from-white/10 via-transparent to-white/5 opacity-30"></div>
      
      {/* Animated border glow */}
      <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-500 ${
        isHovered ? 'border-white/40' : 'border-white/20'
      }`}></div>
      
      {/* Inner glow effect */}
      <div className="absolute inset-1 rounded-lg bg-gradient-to-r from-orange-400/20 via-transparent to-blue-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-3 drop-shadow-lg">
        {/* Project icon */}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6l2 2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        
        View My Projects
        
        {/* Arrow with micro-animation */}
        <svg className="w-4 h-4 transform transition-transform duration-300 hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </span>

      {/* Click ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="glass-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}

      
      {/* Glass edge highlights */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-white/40 via-transparent to-white/20"></div>
      <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-white/20 to-white/40"></div>
    </button>
  );
};

export default ViewProjectsButton;
