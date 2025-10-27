"use client";

import React, { useState, useEffect } from "react";

const ChevronUpIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
  </svg>
);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    setIsAnimating(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    
    // Reset animation state after scroll completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <>
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className={`
            fixed bottom-8 right-8 z-50 p-3 rounded-full 
            bg-gradient-to-r from-orange-500 to-red-500
            text-white shadow-2xl hover:shadow-orange-500/25
            transition-all duration-300 ease-out
            hover:scale-110 hover:-translate-y-1
            focus:outline-none focus:ring-4 focus:ring-orange-500/30
            group backdrop-blur-sm border border-orange-400/20
            ${isAnimating ? 'animate-pulse scale-95' : ''}
          `}
          aria-label="Scroll to top"
          title="Back to top"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          
          {/* Icon */}
          <div className={`transform transition-transform duration-200 ${isAnimating ? 'scale-90' : 'group-hover:scale-110'}`}>
            <ChevronUpIcon />
          </div>
          
          {/* Ripple effect on click */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-white/20 transform scale-0 group-active:scale-100 transition-transform duration-150 rounded-full"></div>
          </div>
          
          {/* Progress indicator ring */}
          <div className="absolute -inset-1 rounded-full border-2 border-transparent bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
