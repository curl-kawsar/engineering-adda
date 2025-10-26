"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Portfolio navigation icons
const HomeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const SkillsIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ExperienceIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const EducationIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const ProjectsIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35.0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35.0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const WorkflowIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v6" />
    <path d="m15.01 8.5-.01-1.5" />
    <path d="M10.99 8.5 11 7" />
    <circle cx="12" cy="12" r="3" />
    <path d="m8 16-1.5.01" />
    <path d="M16 16l1.5.01" />
    <path d="M12 18v4" />
  </svg>
);

const DockIcon = ({ mouseX, href, children, onClick, title }) => {
  const ref = useRef(null);
  const defaultMouseX = useMotionValue(Infinity);
  const iconSize = 44;
  const iconMagnification = 64;
  const iconDistance = 140;

  const distance = useTransform(mouseX ?? defaultMouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distance,
    [-iconDistance, 0, iconDistance],
    [iconSize, iconMagnification, iconSize]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="flex aspect-square items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-200"
      title={title}
    >
      <a
        href={href}
        className="flex h-full w-full items-center justify-center rounded-full"
        onClick={handleClick}
      >
        {children}
      </a>
    </motion.div>
  );
};

const Dock = ({ children }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex h-[68px] items-center gap-2 rounded-2xl bg-gray-900/80 backdrop-blur-xl px-3 border border-gray-700/50 shadow-2xl"
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DockIcon) {
          return React.cloneElement(child, {
            ...child.props,
            mouseX: mouseX,
          });
        }
        return child;
      })}
    </motion.div>
  );
};

const PortfolioDock = () => {
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

  const icons = [
    {
      name: "Home",
      component: HomeIcon,
      sectionId: "hero",
      title: "About Me"
    },
    {
      name: "Skills",
      component: SkillsIcon,
      sectionId: "skills",
      title: "Technical Skills"
    },
    {
      name: "Experience",
      component: ExperienceIcon,
      sectionId: "experience",
      title: "Work Experience"
    },
    {
      name: "Education",
      component: EducationIcon,
      sectionId: "education",
      title: "Education"
    },
    {
      name: "Projects",
      component: ProjectsIcon,
      sectionId: "projects",
      title: "My Projects"
    },
    {
      name: "Workflow",
      component: WorkflowIcon,
      sectionId: "workflow",
      title: "My Process"
    }
  ];

  return (
    <div className="flex items-center justify-center">
      <Dock>
        {icons.map((icon) => (
          <DockIcon
            key={icon.name}
            href={`#${icon.sectionId}`}
            onClick={() => smoothScroll(icon.sectionId)}
            title={icon.title}
          >
            <icon.component className="h-full w-full p-2.5 text-white/80 hover:text-white transition-colors duration-200" />
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
};

export default PortfolioDock;
