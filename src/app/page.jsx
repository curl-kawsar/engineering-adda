"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Workflow from "@/components/Workflow";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import ScrollToTop from "@/components/ScrollToTop";

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-[60] lg:hidden bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-2 text-white hover:bg-gray-800/90 transition-all duration-300 shadow-lg"
      >
        <MenuIcon />
      </button>

      {/* Layout Container */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar 
          isOpen={sidebarOpen} 
          onToggle={toggleSidebar}
          isCollapsed={sidebarCollapsed}
          onCollapse={toggleCollapse}
        />

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-80'}`}>
          <div id="hero">
            <Hero />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="experience">
            <Experience />
          </div>
          {/* <div id="education">
            <Education />
          </div> */}
          <div id="projects">
            <Projects />
          </div>
          <div id="workflow">
            <Workflow />
          </div>
        </main>
        
      </div>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
