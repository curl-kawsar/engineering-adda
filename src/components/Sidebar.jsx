"use client";

import React, { useState, useEffect } from "react";

// Icons for different sections
const HomeIcon = () => (
  <svg className="w-5 h-5 mr-2 text-orange-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5 mr-2 text-blue-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-5 h-5 mr-2 text-green-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-5 h-5 mr-2 text-purple-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
  </svg>
);

const AcademicCapIcon = () => (
  <svg className="w-5 h-5 mr-2 text-yellow-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const FolderIcon = () => (
  <svg className="w-5 h-5 mr-2 text-cyan-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6l2 2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const FileIcon = () => (
  <svg className="w-5 h-5 mr-2 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const ReactIcon = () => (
  <svg className="w-5 h-5 mr-2 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <g>
      <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" stroke="currentColor" strokeWidth="1.5" />
    </g>
  </svg>
);

const ChevronIcon = ({ isOpen }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-90" : ""}`}
  >
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

const CollapseIcon = ({ isCollapsed }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    className={`w-4 h-4 text-gray-400 hover:text-gray-300 transition-all duration-200 ${isCollapsed ? "rotate-180" : ""}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

// Navigation data structure
const navigationData = [
  {
    name: "portfolio.js",
    type: "folder",
    isOpen: true,
    children: [
      {
        name: "Hero.jsx",
        type: "file",
        icon: HomeIcon,
        sectionId: "hero"
      },
      {
        name: "Skills.jsx", 
        type: "file",
        icon: CodeIcon,
        sectionId: "skills"
      },
      {
        name: "Experience.jsx",
        type: "file", 
        icon: BriefcaseIcon,
        sectionId: "experience"
      },
      {
        name: "Education.jsx",
        type: "file",
        icon: AcademicCapIcon,
        sectionId: "education"
      },
      {
        name: "Projects.jsx",
        type: "file",
        icon: FolderIcon,
        sectionId: "projects"
      },
      {
        name: "Workflow.jsx",
        type: "file",
        icon: CodeIcon,
        sectionId: "workflow"
      }
    ]
  },
  {
    name: "components",
    type: "folder",
    children: [
      {
        name: "CodeProfile.jsx",
        type: "file",
        icon: ReactIcon
      },
      {
        name: "Logomarquee.jsx",
        type: "file",
        icon: ReactIcon
      },
      {
        name: "PerspectiveSlider.jsx",
        type: "file",
        icon: ReactIcon
      }
    ]
  },
  {
    name: "package.json",
    type: "file",
    icon: FileIcon
  },
  {
    name: "README.md",
    type: "file", 
    icon: FileIcon
  }
];

const TreeIcon = ({ item, isOpen }) => {
  if (item.icon) {
    const IconComponent = item.icon;
    return <IconComponent />;
  }
  
  if (item.type === "folder") {
    return (
      <svg className="w-5 h-5 mr-2 text-yellow-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        )}
      </svg>
    );
  }
  
  return <FileIcon />;
};

const TreeNode = ({ item, selectedFile, onFileSelect, openFolders, setOpenFolders }) => {
  const isFolder = item.type === "folder";
  const isOpen = isFolder ? openFolders[item.name] : false;
  
  const handleToggle = () => {
    if (isFolder) {
      setOpenFolders(prev => ({
        ...prev,
        [item.name]: !prev[item.name]
      }));
    } else {
      onFileSelect(item);
    }
  };
  
  const isSelected = !isFolder && selectedFile === item.name;
  
  return (
    <div className="text-gray-300 relative">
      <div 
        className={`flex items-center py-1.5 px-2 rounded-md cursor-pointer transition-colors duration-150 ${
          isSelected 
            ? "bg-orange-500/20 text-orange-400 border-l-2 border-orange-500" 
            : "hover:bg-gray-800/50"
        }`} 
        onClick={handleToggle}
      >
        <div className="flex items-center flex-grow">
          {isFolder ? (
            <ChevronIcon isOpen={isOpen} />
          ) : (
            <div className="w-4 shrink-0"></div>
          )}
          <div className="flex items-center ml-1">
            <TreeIcon item={item} isOpen={isOpen} />
            <span className="text-sm ml-1.5 font-mono">{item.name}</span>
          </div>
        </div>
      </div>

      <div className={`pl-4 relative overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-[1000px]" : "max-h-0"
      }`}>
        <div className="absolute left-[13px] top-0 bottom-0 w-px bg-gray-800"></div>
        {isFolder && isOpen && item.children && item.children.map(child => (
          <TreeNode 
            key={child.name} 
            item={child} 
            selectedFile={selectedFile} 
            onFileSelect={onFileSelect}
            openFolders={openFolders}
            setOpenFolders={setOpenFolders}
          />
        ))}
      </div>
    </div>
  );
};

export default function Sidebar({ isOpen, onToggle, isCollapsed, onCollapse }) {
  const [selectedFile, setSelectedFile] = useState("Hero.jsx");
  const [openFolders, setOpenFolders] = useState({
    "portfolio.js": true,
    "components": false
  });

  const handleFileSelect = (item) => {
    setSelectedFile(item.name);
    
    // Smooth scroll to section if it has a sectionId
    if (item.sectionId) {
      const element = document.getElementById(item.sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }
    
    console.log(`Selected file: ${item.name}`);
  };

  // Auto-close sidebar on mobile after selection
  const handleMobileFileSelect = (item) => {
    handleFileSelect(item);
    if (window.innerWidth < 1024) {
      setTimeout(() => onToggle(), 300);
    }
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full bg-gray-950/95 backdrop-blur-xl border-r border-gray-800 z-50 transform transition-all duration-300 ease-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        ${isCollapsed ? 'w-16' : 'w-80'}
        lg:translate-x-0 lg:fixed lg:z-auto
      `}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className={`flex items-center ${isCollapsed ? 'justify-center w-full' : ''}`}>
            {!isCollapsed && (
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            )}
            {!isCollapsed && (
              <span className="ml-4 text-gray-400 text-sm font-mono transition-opacity duration-300">Explorer</span>
            )}
          </div>
          
          <div className={`flex items-center space-x-2 ${isCollapsed ? 'absolute top-4 right-4' : ''}`}>
            {/* Collapse button - always visible on desktop */}
            <button 
              onClick={onCollapse}
              className="hidden lg:flex p-1.5 rounded-md hover:bg-gray-800 text-gray-400 hover:text-gray-300 transition-colors duration-200"
              title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              <CollapseIcon isCollapsed={isCollapsed} />
            </button>
            
            {/* Close button for mobile */}
            <button 
              onClick={onToggle}
              className="lg:hidden p-1 rounded-md hover:bg-gray-800 text-gray-400"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* File Tree */}
        <div className={`p-4 overflow-y-auto h-full transition-opacity duration-300 ${isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="w-full">
            {!isCollapsed && navigationData.map(item => (
              <TreeNode 
                key={item.name} 
                item={item} 
                selectedFile={selectedFile} 
                onFileSelect={handleMobileFileSelect}
                openFolders={openFolders}
                setOpenFolders={setOpenFolders}
              />
            ))}
          </div>
        </div>

        {/* Collapsed State - Mini Icons */}
        {isCollapsed && (
          <div className="p-2 space-y-2 overflow-y-auto h-full pt-16">
            {navigationData[0].children.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleMobileFileSelect(item)}
                  className={`
                    w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 mx-auto
                    ${selectedFile === item.name 
                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                      : 'hover:bg-gray-800/50 text-gray-400 hover:text-gray-300'
                    }
                  `}
                  title={item.name}
                >
                  <IconComponent />
                </button>
              );
            })}
          </div>
        )}

        {/* Footer */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800 bg-gray-950/50 transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
          {!isCollapsed && (
            <div className="text-xs text-gray-500 font-mono">
              <div className="flex items-center gap-2 mb-2">
                {/* Mini logo in sidebar */}
                <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-md flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4H8V12L14 6H17L11 12L17 20H14L10 14L8 16V20H6V4Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="font-display font-bold text-xs" style={{
                      background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>Kawsar</span>
                    <span className="font-display font-bold text-xs" style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>Ahmed</span>
                  </div>
                  <span className="text-gray-600 text-xs font-code tracking-wider">dev.portfolio</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>v2.0</span>
                <span className="text-orange-400">●</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
