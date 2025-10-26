"use client";

import React, { useState, useRef, useEffect } from "react";

const HireMeButton = ({ className = "", variant = "primary", size = "default" }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const buttonRef = useRef(null);

  // Size variants
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };

  // Variant styles - now with glassy effects
  const variantClasses = {
    primary: "backdrop-blur-xl bg-gradient-to-r from-orange-500/80 via-orange-600/80 to-red-500/80 text-white border border-orange-400/30",
    outline: "backdrop-blur-xl bg-white/10 text-white border-2 border-orange-500/50 hover:bg-orange-500/20",
    glass: "backdrop-blur-xl bg-gradient-to-r from-orange-400/60 via-orange-500/60 to-orange-600/60 text-white border border-orange-300/40"
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
      
      // Show contact info briefly
      setShowContactInfo(true);
      setTimeout(() => setShowContactInfo(false), 3000);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
      
      // Reset click state
      setTimeout(() => setIsClicked(false), 200);
    }
  };

  // Ripple effect styles only
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes ripple {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(4); opacity: 0; }
      }
      
      .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        animation: ripple 0.6s linear;
        pointer-events: none;
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="relative inline-block">
      {/* Contact Info Tooltip */}
      {showContactInfo && (
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gray-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-xl border border-gray-700 z-50 animate-in slide-in-from-bottom-2 duration-300">
          <div className="text-center">
            <div className="text-sm font-semibold text-orange-400">Let's Connect!</div>
            <div className="text-xs text-gray-300 mt-1">kawsar.ahmed@email.com</div>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}

      {/* Main Button */}
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={`
          relative overflow-hidden rounded-xl font-bold uppercase tracking-wider
          transition-all duration-300 ease-out
          transform hover:scale-105 hover:-translate-y-1
          active:scale-95
          focus:outline-none focus:ring-4 focus:ring-orange-500/30
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${isClicked ? 'scale-95' : ''}
          ${className}
        `}
        style={{
          background: variant === 'primary' 
            ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.8) 0%, rgba(234, 88, 12, 0.8) 50%, rgba(220, 38, 38, 0.8) 100%)'
            : variant === 'glass'
            ? 'linear-gradient(135deg, rgba(251, 146, 60, 0.6) 0%, rgba(249, 115, 22, 0.6) 50%, rgba(234, 88, 12, 0.6) 100%)'
            : undefined,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Glass reflection layers */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60"></div>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tl from-white/10 via-transparent to-white/5 opacity-40"></div>
        
        {/* Glass border highlight */}
        <div className="absolute inset-0 rounded-xl border border-white/30 opacity-50"></div>

        {/* Inner glow effect */}
        <div className="absolute inset-1 rounded-lg bg-gradient-to-r from-orange-400/10 via-transparent to-red-400/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Button Text with Icon */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
          </svg>
          Hire Me
          <svg className="w-4 h-4 transform transition-transform duration-300 hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </span>

        {/* Ripple Effects */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="ripple-effect"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}

      </button>
    </div>
  );
};

export default HireMeButton;
