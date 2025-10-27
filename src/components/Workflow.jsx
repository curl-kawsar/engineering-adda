"use client";

import React, { useEffect, useRef, useState } from "react";

// Workflow step icons
const ProposalIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const DesignIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1m0 18v2m8-10h6m-6 4h6m-6-8h6" />
  </svg>
);

const TechIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const TestingIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const DeployIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
  </svg>
);

const workflowSteps = [
  {
    id: 1,
    number: "01",
    title: "Discovery & Planning",
    description: "Understanding your requirements, goals, and target audience to create a comprehensive project roadmap.",
    icon: ProposalIcon,
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    textColor: "text-orange-400",
    side: "left"
  },
  {
    id: 2,
    number: "02", 
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that provide exceptional user experiences and drive engagement.",
    icon: DesignIcon,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-400",
    side: "right"
  },
  {
    id: 3,
    number: "03",
    title: "Development",
    description: "Building robust, scalable applications using modern technologies and best practices for optimal performance.",
    icon: TechIcon,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
    side: "left"
  },
  {
    id: 4,
    number: "04",
    title: "Testing & QA",
    description: "Rigorous testing across devices and browsers to ensure flawless functionality and user experience.",
    icon: TestingIcon,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    textColor: "text-green-400",
    side: "right"
  },
  {
    id: 5,
    number: "05",
    title: "Deployment & Launch",
    description: "Seamless deployment with ongoing support and maintenance to keep your application running smoothly.",
    icon: DeployIcon,
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/30",
    textColor: "text-yellow-400",
    side: "left"
  }
];

const WorkflowStep = ({ step, index, isVisible }) => {
  const IconComponent = step.icon;
  
  return (
    <div className={`relative flex items-center mb-16 md:mb-24 transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-16'
    }`}>
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-4 border-black shadow-lg z-20"></div>
      
      {/* Content card */}
      <div className={`w-full ${step.side === 'left' ? 'md:w-5/12 md:mr-auto md:pr-16' : 'md:w-5/12 md:ml-auto md:pl-16'}`}>
        <div className={`relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl transform transition-all duration-700 hover:scale-105 ${
          step.side === 'left' ? 'md:rotate-2 -rotate-1' : 'rotate-1 md:-rotate-2'
        } hover:rotate-0`}>
          
          {/* Connecting line */}
          <div className={`absolute top-1/2 ${
            step.side === 'left' 
              ? 'right-0 translate-x-full w-8 md:w-16' 
              : 'left-0 -translate-x-full w-8 md:w-16'
          } h-0.5 bg-gradient-to-r from-orange-500 to-red-500 opacity-60`}></div>
          
          {/* Icon */}
          <div className={`absolute -top-6 right-8 p-4 rounded-full bg-gradient-to-r ${step.color} border ${step.borderColor} backdrop-blur-sm z-10`}>
            <IconComponent className={`${step.textColor}`} />
          </div>
          
          <div className="pt-8">
            <div className={`bg-gradient-to-t ${step.color} rounded-2xl p-6 border ${step.borderColor}`}>
              <div className="space-y-4">
                <div className={`${step.textColor} font-mono text-4xl font-bold mb-2`}>
                  {step.number}
                </div>
                <h3 className="text-2xl text-white font-bold">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
          
          {/* Subtle glow effect */}
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${step.color} opacity-20 blur-xl -z-10`}></div>
        </div>
      </div>
    </div>
  );
};

const Workflow = () => {
  const [visibleSteps, setVisibleSteps] = useState(new Set([0])); // First step visible by default
  const stepRefs = useRef([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps(prev => new Set([...prev, index]));
            }
          });
        },
        { 
          threshold: 0.3,
          rootMargin: '-50px 0px'
        }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="workflow" className="py-20 px-4 relative overflow-hidden bg-black">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 pointer-events-none">
        <div className="w-[40rem] h-[40rem] bg-gradient-to-br from-orange-800/15 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 pointer-events-none">
        <div className="w-[35rem] h-[35rem] bg-gradient-to-tl from-purple-800/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-3 text-sm font-semibold tracking-wider text-orange-400 uppercase bg-orange-900/30 rounded-full mb-6 shadow-lg">
            My Workflow
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-8xl font-display font-black text-white mb-8 leading-tight display-text">
            My Process,<br />
            <span className="text-gradient text-glow">Step by Step</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            From concept to deployment, here's how I transform your ideas into{" "}
            <span className="text-orange-500 font-semibold">powerful digital solutions</span>{" "}
            that drive results.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-500 via-gray-600 to-orange-500 h-full opacity-30"></div>
          
          {/* Workflow steps */}
          {workflowSteps.map((step, index) => (
            <div
              key={step.id}
              ref={el => stepRefs.current[index] = el}
            >
              <WorkflowStep 
                step={step} 
                index={index}
                isVisible={visibleSteps.has(index)}
              />
            </div>
          ))}
          
          {/* Timeline end dot */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-4 border-black shadow-lg"></div>
        </div>

        {/* Final CTA Card */}
        <div className="relative flex items-center justify-center mt-16">
          <div className="w-full max-w-2xl">
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl transform rotate-1 transition-all duration-700 hover:scale-105 hover:rotate-0">
              {/* Icon */}
              <div className="absolute -top-6 right-8 p-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <div className="pt-8">
                <div className="bg-gradient-to-t from-green-500/20 to-transparent rounded-2xl p-6 border border-green-500/30">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl text-white font-bold">
                      Your <span className="text-orange-500">All-in-One</span> Development Partner
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Ready to transform your ideas into powerful digital solutions? 
                      Let's build something amazing together!
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-20 blur-xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* Workflow Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold text-orange-500 mb-1">5</div>
            <div className="text-gray-400 text-sm">Steps Process</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold text-orange-500 mb-1">100%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold text-orange-500 mb-1">24/7</div>
            <div className="text-gray-400 text-sm">Support Available</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold text-orange-500 mb-1">∞</div>
            <div className="text-gray-400 text-sm">Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
