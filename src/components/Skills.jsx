"use client";

import React from "react";
import Logomarquee from "./Logomarquee";

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 pointer-events-none">
        <div className="w-[30rem] h-[30rem] bg-gradient-to-bl from-orange-800/20 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 pointer-events-none">
        <div className="w-[25rem] h-[25rem] bg-gradient-to-tr from-blue-800/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase bg-orange-900/30 rounded-full mb-4">
            Technical Skills
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black text-white mb-6">
            Technologies I <span className="text-gradient text-glow">Master</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Passionate about modern web development with expertise in cutting-edge technologies. 
            From frontend frameworks to backend solutions, I build scalable and performant applications.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Frontend</h3>
            <p className="text-gray-400 text-sm">React, Next.js, Vue, Svelte, TypeScript</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
            <p className="text-gray-400 text-sm">Node.js, Express, MongoDB, Firebase</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Tools & Design</h3>
            <p className="text-gray-400 text-sm">Git, GitHub, Figma, TailwindCSS</p>
          </div>
        </div>

        {/* Animated Tech Stack */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            My <span className="text-orange-500">Tech Stack</span>
          </h3>
          <Logomarquee />
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">14+</div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">1+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">7</div>
            <div className="text-gray-400 text-sm">Hackathon Wins</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">∞</div>
            <div className="text-gray-400 text-sm">Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
