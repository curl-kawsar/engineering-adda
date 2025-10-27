"use client";

import React, { memo, useCallback, useState } from "react";

const ChevronDown = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const Code = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
  </svg>
);

const Users = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="m22 21-3-3m0 0a5 5 0 1 1-7-7 5 5 0 0 1 7 7Z" />
  </svg>
);

const Trophy = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55.47.98.97 1.21C12.04 18.75 13 20.24 13 22" />
    <path d="M14 14.66V17c0 .55-.47.98-.97 1.21C12.04 18.75 11 20.24 11 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const Badge = ({ children, className = "", variant = "default", ...props }) => {
  const variants = {
    default: "bg-gray-900 text-white",
    secondary: "bg-gray-800 text-gray-300 border border-gray-700",
    outline: "border border-gray-600 bg-transparent text-gray-300 hover:bg-gray-800"
  };

  return (
    <span 
      className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </span>
  );
};

const timelineData = [
  {
    id: "prof-exp-1",
    title: "Software Engineer",
    company: "Collegemastermind",
    location: "Phoenix, Arizona, USA",
    type: "Remote",
    duration: "2024—Present",
    icon: Code,
    responsibilities: [
      "Develop and maintain scalable web applications using modern JavaScript frameworks.",
      "Collaborate with cross-functional teams to deliver high-quality software solutions.",
      "Implement responsive designs and optimize application performance.",
      "Participate in code reviews and contribute to technical decision-making."
    ],
    skills: ["React", "Node.js", "JavaScript", "MongoDB", "Git"]
  },
  {
    id: "prof-exp-2", 
    title: "Software Engineer",
    company: "Wa-mach",
    location: "Phoenix, Arizona, USA",
    type: "Remote",
    duration: "2023—2024",
    icon: Code,
    responsibilities: [
      "Built full-stack applications using React and Node.js ecosystem.",
      "Implemented RESTful APIs and integrated third-party services.",
      "Worked in agile development environment with continuous integration.",
      "Collaborated with international team members on complex projects."
    ],
    skills: ["React", "Express.js", "TypeScript", "Firebase", "Tailwind CSS"]
  },
  {
    id: "prof-exp-3",
    title: "Project Lead",
    company: "BCC Interns First Batch",
    location: "Bangladesh",
    type: "Hybrid",
    duration: "2023",
    icon: Users,
    responsibilities: [
      "Led a team of junior developers and managed project timelines.",
      "Coordinated with stakeholders to define project requirements and scope.",
      "Mentored interns and conducted technical training sessions.",
      "Established development best practices and coding standards."
    ],
    skills: ["Leadership", "Project Management", "Mentoring", "Team Coordination"]
  },
  {
    id: "prof-exp-4",
    title: "General Secretary",
    company: "BAIUST Computer Club",
    location: "Bangladesh",
    type: "Hybrid", 
    duration: "2022—2023",
    icon: Trophy,
    responsibilities: [
      "Organized technical workshops and coding competitions.",
      "Managed club activities and coordinated with university administration.",
      "Led hackathon participation resulting in multiple wins and recognitions.",
      "Built strong community relationships and promoted tech culture."
    ],
    skills: ["Event Management", "Community Building", "Public Speaking", "Organization"]
  }
];

const TimelineItemContent = memo(function TimelineItemContent({ item }) {
  return (
    <div className="mt-6 space-y-6 animate-in slide-in-from-top-1 duration-200">
      {/* Responsibilities */}
      <div className="space-y-3">
        {item.responsibilities.map((responsibility, idx) => (
          <div key={`${item.id}-resp-${idx}`} className="flex items-start gap-3 group">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0 group-hover:bg-orange-400 transition-colors duration-200" />
            <p className="text-sm text-gray-300 leading-relaxed">
              {responsibility}
            </p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-800">
        {item.skills.map((skill, skillIdx) => (
          <Badge key={`${item.id}-skill-${skillIdx}`} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
});

TimelineItemContent.displayName = "TimelineItemContent";

const TimelineItem = memo(function TimelineItem({ item, expanded, onToggle }) {
  const Icon = item.icon;
  const headerId = `timeline-header-${item.id}`;
  const contentId = `timeline-content-${item.id}`;

  return (
    <div className="relative group">
      {/* Timeline line */}
      <div className="absolute left-6 top-14 bottom-0 w-[2px] bg-gradient-to-b from-orange-500 via-gray-600 to-orange-500/30" />

      {/* Timeline dot */}
      <div className="absolute left-4 top-6 w-4 h-4 bg-black border-2 border-gray-700 rounded-full flex items-center justify-center transform transition-all duration-200 z-10 group-hover:border-orange-500">
        <div className="w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>

      {/* Content */}
      <div className="ml-12 mb-8">
        <div className={`
          bg-gray-900 border border-gray-800
          rounded-lg transition-all duration-200
          ${expanded ? "shadow-lg shadow-orange-500/10" : "shadow-none hover:shadow-md hover:shadow-orange-500/5"}
          hover:border-gray-700
        `}>
          {/* Header */}
          <button 
            id={headerId} 
            className="w-full text-left p-6 group/button cursor-pointer hover:bg-gray-800/50 transition-colors duration-200 rounded-t-lg" 
            onClick={() => onToggle(item.id)} 
            aria-expanded={expanded} 
            aria-controls={contentId}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-500/10 border border-orange-500/20 rounded-md">
                    <Icon className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-medium text-orange-400">
                        {item.company}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-400">
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 ml-11">
                  <Badge variant="outline" className="text-xs">
                    {item.type}
                  </Badge>
                  <span className="text-xs text-gray-400">
                    {item.duration}
                  </span>
                </div>
              </div>

              <div className={`
                text-gray-400 transition-transform duration-200
                ${expanded ? "rotate-180" : ""}
              `}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </button>

          {/* Expanded content */}
          {expanded && (
            <div 
              id={contentId} 
              role="region" 
              aria-labelledby={headerId} 
              className="px-6 pb-6 border-t border-gray-800"
            >
              <TimelineItemContent item={item} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

TimelineItem.displayName = "TimelineItem";

export function ProfessionalTimeline({ data, defaultExpandedIds, expandMode = "multi" }) {
  const initial = defaultExpandedIds ?? data.map(item => item.id);
  const [expanded, setExpanded] = useState(() => new Set(initial));

  const onToggle = useCallback(id => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (expandMode === "single") {
        return prev.has(id) ? new Set() : new Set([id]);
      }
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, [expandMode]);

  return (
    <div className="relative">
      {data.map((item, index) => (
        <TimelineItem 
          key={item.id} 
          item={item} 
          expanded={expanded.has(item.id)} 
          onToggle={onToggle} 
          index={index} 
        />
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 pointer-events-none">
        <div className="w-[35rem] h-[35rem] bg-gradient-to-br from-orange-800/15 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 pointer-events-none">
        <div className="w-[30rem] h-[30rem] bg-gradient-to-tl from-blue-800/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase bg-orange-900/30 rounded-full mb-4">
            Professional Journey
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black text-white mb-6">
            My <span className="text-gradient text-glow">Experience</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            A comprehensive overview of my professional journey, from leadership roles to 
            hands-on development across different organizations and projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <ProfessionalTimeline data={timelineData} expandMode="multi" />
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-orange-500 mb-1">4+</div>
            <div className="text-gray-400 text-sm">Positions</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-orange-500 mb-1">2+</div>
            <div className="text-gray-400 text-sm">Countries</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-orange-500 mb-1">3+</div>
            <div className="text-gray-400 text-sm">Companies</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-orange-500 mb-1">100%</div>
            <div className="text-gray-400 text-sm">Remote Ready</div>
          </div>
        </div>
      </div>
    </section>
  );
}
