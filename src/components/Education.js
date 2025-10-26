"use client";

import React from "react";

const GraduationIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="text-orange-500"
  >
    <path d="M12 3L1 9L12 15L23 9L12 3Z" />
    <path d="M5 13.18V17.18C5 17.96 5.21 18.72 5.6 19.4C6.57 21 8.96 22 12 22C15.04 22 17.43 21 18.4 19.4C18.79 18.72 19 17.96 19 17.18V13.18" />
  </svg>
);

const BookIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="text-orange-500"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const SchoolIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="text-orange-500"
  >
    <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
    <path d="M18 10h4l-6-6-6 6h4v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-8z" />
    <circle cx="12" cy="2" r="1" />
  </svg>
);

const EducationCard = ({ period, degree, institution, icon: Icon, level, gpa }) => {
  return (
    <div className="group relative bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:bg-gray-900/70 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
      {/* Period Badge */}
      <div className="absolute top-6 right-6">
        <span className="px-3 py-1 bg-orange-900/30 text-orange-400 text-xs font-semibold rounded-full border border-orange-700/30">
          {period}
        </span>
      </div>

      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
          <Icon />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300 mb-1">
              {degree}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded border border-gray-700">
                {level}
              </span>
              {gpa && (
                <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs font-medium rounded border border-green-700/30">
                  GPA: {gpa}
                </span>
              )}
            </div>
          </div>

          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
            {institution}
          </p>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

const educationData = [
  {
    id: 1,
    period: "2021 - Present",
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Bangladesh Army International University of Science and Technology (BAIUST)",
    level: "Undergraduate",
    gpa: "3.85",
    icon: GraduationIcon
  },
  {
    id: 2,
    period: "2019 - 2021",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Cumilla Collectorate School and College",
    level: "College",
    gpa: "5.00",
    icon: BookIcon
  },
  {
    id: 3,
    period: "2017 - 2019",
    degree: "Secondary School Certificate (SSC)",
    institution: "Chauddagram HJ Govt. Model High School",
    level: "High School",
    gpa: "5.00",
    icon: SchoolIcon
  }
];

const Education = () => {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 pointer-events-none">
        <div className="w-[35rem] h-[35rem] bg-gradient-to-bl from-orange-800/20 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 pointer-events-none">
        <div className="w-[30rem] h-[30rem] bg-gradient-to-tr from-blue-800/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase bg-orange-900/30 rounded-full mb-4">
            Academic Background
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black text-white mb-6">
            My <span className="text-gradient text-glow">Education</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A strong academic foundation in computer science and engineering, 
            with consistent excellence throughout my educational journey.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {educationData.map((education) => (
            <EducationCard
              key={education.id}
              period={education.period}
              degree={education.degree}
              institution={education.institution}
              level={education.level}
              gpa={education.gpa}
              icon={education.icon}
            />
          ))}
        </div>

        {/* Academic Achievements */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Academic <span className="text-orange-500">Highlights</span>
            </h3>
            <p className="text-gray-400">
              Consistent academic excellence and achievements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-orange-500">4+</span>
              </div>
              <div className="text-sm font-medium text-white mb-1">Years</div>
              <div className="text-xs text-gray-400">Current Study</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-orange-500">3.85</span>
              </div>
              <div className="text-sm font-medium text-white mb-1">CGPA</div>
              <div className="text-xs text-gray-400">Current</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-orange-500">5.00</span>
              </div>
              <div className="text-sm font-medium text-white mb-1">GPA</div>
              <div className="text-xs text-gray-400">HSC & SSC</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-orange-500">CSE</span>
              </div>
              <div className="text-sm font-medium text-white mb-1">Major</div>
              <div className="text-xs text-gray-400">Specialization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;