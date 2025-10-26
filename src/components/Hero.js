"use client";

import React, { useState } from "react";
import CodeProfile from "./CodeProfile";
import HireMeButton from "./HireMeButton";
import ViewProjectsButton from "./ViewProjectsButton";
import PortfolioDock from "./Dock";

const LogoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6H10V10H6V6Z" fill="#F97316" />
    <path d="M14 6H18V10H14V6Z" fill="#F97316" />
    <path d="M6 14H10V18H6V14Z" fill="#F97316" />
    <path d="M14 14H18V18H14V14Z" fill="#F97316" fillOpacity="0.5" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const NavLink = ({ href, children, isActive = false }) => (
  <a 
    href={href} 
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive 
        ? "text-orange-500" 
        : "text-gray-300 hover:text-orange-500"
    }`}
  >
    {children}
  </a>
);

const Button = ({ children, variant = "primary", className = "" }) => {
  const baseClasses = "px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105";
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500 shadow-lg",
    secondary: "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-600 shadow-sm border border-gray-700",
    outline: "bg-transparent text-white border border-gray-600 hover:bg-gray-900 focus:ring-gray-600"
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const MobileMenu = ({ isOpen }) => {
  const smoothScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const mobileNavItems = [
    { name: "About", sectionId: "hero" },
    { name: "Skills", sectionId: "skills" },
    { name: "Experience", sectionId: "experience" },
    { name: "Education", sectionId: "education" },
    { name: "Projects", sectionId: "projects" },
    { name: "Workflow", sectionId: "workflow" }
  ];

  return (
    <div className={`
      md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-t border-gray-700 shadow-lg
      transition-all duration-300 ease-in-out
      ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
    `}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {mobileNavItems.map(item => (
          <button
            key={item.name}
            onClick={() => smoothScroll(item.sectionId)}
            className="text-gray-300 hover:text-orange-500 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="pt-4 pb-4 border-t border-gray-700">
        <div className="px-5">
          <HireMeButton variant="primary" size="default" className="w-full" />
        </div>
      </div>
    </div>
  );
};

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            {/* Custom Logo Icon */}
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center group-hover:scale-110">
                <div className="relative">
                  {/* K monogram */}
                  <svg className="w-6 h-6 text-white font-bold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4H8V12L14 6H17L11 12L17 20H14L10 14L8 16V20H6V4Z" fill="currentColor" strokeWidth="1.5"/>
                  </svg>
                  {/* Small dot accent */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
            </div>
            
            {/* Logo Text */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-display font-black text-gradient text-glow group-hover:scale-105 transition-transform duration-300">
                  Kawsar
                </span>
                <span className="text-xl font-display font-black group-hover:scale-105 transition-transform duration-300" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 50%, #d1d5db 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
                }}>
                  Ahmed
                </span>
              </div>
              <div className="flex items-center gap-1 -mt-1">
                <div className="w-3 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
                <span className="text-xs font-code text-orange-300 tracking-wider uppercase opacity-80">
                  dev
                </span>
                <div className="w-3 h-0.5 bg-gradient-to-l from-red-500 to-transparent"></div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            <PortfolioDock />
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <HireMeButton variant="glass" size="default" />
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} />
    </header>
  );
};

const HeroContent = () => (
  <section className="relative z-10 py-16 sm:py-24 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Portfolio Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase bg-orange-900/30 rounded-full">
            Software Engineer Portfolio
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-display font-black tracking-tight text-white leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-gradient text-glow">Md. Kawsar Ahmed</span>
          </h1>
          <h2 className="mt-4 text-2xl sm:text-3xl font-heading font-bold text-gray-300">
            Software Engineer
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            Passionate software engineer with <span className="font-semibold text-orange-500">1 year of experience</span> building 
            modern web applications. <span className="font-semibold text-orange-500">7-time hackathon winner and finalist</span> with 
            a proven track record of innovative solutions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4">
            <ViewProjectsButton size="large" className="w-full sm:w-auto" />
            <HireMeButton variant="glass" size="large" className="w-full sm:w-auto" />
          </div>
          
          {/* Achievement Badges */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            <div className="px-3 py-2 bg-gradient-to-r from-orange-900/40 to-orange-800/40 rounded-lg border border-orange-700/30">
              <span className="text-sm font-semibold text-orange-300">
                7x Hackathon Winner
              </span>
            </div>
            <div className="px-3 py-2 bg-gradient-to-r from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-700/30">
              <span className="text-sm font-semibold text-blue-300">
                1+ Years Experience
              </span>
            </div>
            <div className="px-3 py-2 bg-gradient-to-r from-green-900/40 to-green-800/40 rounded-lg border border-green-700/30">
              <span className="text-sm font-semibold text-green-300">
                Based in Bangladesh
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Code Profile */}
        <div className="order-1 lg:order-2">
          <CodeProfile />
        </div>
      </div>
    </div>
  </section>
);

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[40rem] h-[40rem] bg-gradient-to-tr from-orange-800/30 to-transparent opacity-10 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 pointer-events-none">
        <div className="w-[40rem] h-[40rem] bg-gradient-to-bl from-orange-800/30 to-transparent opacity-10 rounded-full blur-3xl" />
      </div>
      
      <HeaderSection />
      <main>
        <HeroContent />
      </main>
    </div>
  );
}
