import React from "react";

const coderData = {
  name: "Md. Kawsar Ahmed",
  role: "Software Engineer",
  seniority: "1 Year",
  location: "Bangladesh",
  skills: [
    "React", 
    "Next.js", 
    "JavaScript", 
    "TypeScript", 
    "TailwindCSS", 
    "CSS", 
    "Node.js", 
    "Express", 
    "MongoDB", 
    "Firebase", 
    "Git", 
    "GitHub", 
    "Figma", 
    "HTML"
  ]
};

const CoderProfileCard = () => {
  return (
    <div className="max-w-2xl w-full mx-auto bg-gradient-to-r from-[#000000] to-[#0a0d37] border-[#1b2c68a0] relative rounded-lg border shadow-lg">
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      <div className="px-4 lg:px-8 py-5 flex justify-between items-center bg-[#000000]">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-xs text-gray-400 font-mono">
          portfolio.js
        </div>
      </div>

      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 relative">
        <div className="absolute -top-24 -left-24 w-56 h-56 bg-blue-600 rounded-full opacity-10 filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-pink-600 rounded-full opacity-10 filter blur-3xl"></div>

        <div className="relative flex">
          <div className="hidden md:flex flex-col items-end pr-4 text-gray-500 font-mono text-xs">
            {Array.from({ length: 14 }, (_, i) => (
              <div key={i} className="leading-relaxed select-none opacity-70">
                {i + 1}
              </div>
            ))}
          </div>

          <code className="font-mono text-xs md:text-sm lg:text-base w-full">
            <div>
              <span className="mr-2 text-pink-400">const</span>
              <span className="mr-2 text-violet-400">engineer</span>
              <span className="mr-2 text-pink-400">=</span>
              <span className="text-gray-400">{"{"}</span>
            </div>
            <div className="pl-6">
              <span className="text-white">name:</span>
              <span className="text-gray-400">&#39;</span>
              <span className="text-green-400">
                {coderData.name}
              </span>
              <span className="text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-white">role:</span>
              <span className="text-gray-400">&#39;</span>
              <span className="text-green-400">
                {coderData.role}
              </span>
              <span className="text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-white">experience:</span>
              <span className="text-gray-400">&#39;</span>
              <span className="text-green-400">
                {coderData.seniority}
              </span>
              <span className="text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-white">location:</span>
              <span className="text-gray-400">&#39;</span>
              <span className="text-green-400">
                {coderData.location}
              </span>
              <span className="text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-white">skills:</span>
              <span className="text-gray-400">{"["}</span>
              <div className="pl-6 flex flex-wrap">
                {coderData.skills.map((skill, index) => (
                  <span key={skill} className="mr-1">
                    <span className="text-gray-400">&#39;</span>
                    <span className="text-cyan-400">{skill}</span>
                    <span className="text-gray-400">&#39;</span>
                    {index < coderData.skills.length - 1 && (
                      <span className="text-gray-400">, </span>
                    )}
                  </span>
                ))}
              </div>
              <span className="text-gray-400">{"],"}</span>
            </div>
            <div className="pl-6">
              <span className="text-white">achievements:</span>
              <span className="text-gray-400">&#39;</span>
              <span className="text-green-400">7 Time Hackathon Winner & Finalist</span>
              <span className="text-gray-400">&#39;</span>
            </div>
            <div>
              <span className="text-gray-400">{"};"}</span>
            </div>
          </code>
        </div>
      </div>

      <div className="px-4 lg:px-8 pb-4 mt-4 border-t border-gray-800 pt-3 text-xs text-gray-500 flex justify-between items-center">
        <span>UTF-8</span>
        <span>JavaScript</span>
        <span>Ln 14, Col 2</span>
      </div>
    </div>
  );
};

export default function CodeProfile() {
  return (
    <div className="flex items-center justify-center p-4 font-sans">
      <CoderProfileCard />
    </div>
  );
}
