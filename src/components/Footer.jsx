"use client";

import React from "react";

function Footer() {
  const navLinks = [
    {
      name: "About",
      href: "#hero"
    },
    {
      name: "Skills",
      href: "#skills"
    },
    {
      name: "Experience",
      href: "#experience"
    },
    {
      name: "Education",
      href: "#education"
    },
    {
      name: "Projects",
      href: "#projects"
    },
    {
      name: "Workflow",
      href: "#workflow"
    }
  ];

  const socialIcons = [
    {
      name: "GitHub",
      href: "https://github.com/kawsarahmed",
      svg: (
        <svg className="w-6 h-6 transition-transform duration-200 hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/kawsarahmed",
      svg: (
        <svg className="w-6 h-6 transition-transform duration-200 hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
        </svg>
      )
    },
    {
      name: "Twitter",
      href: "https://twitter.com/kawsarahmed",
      svg: (
        <svg className="w-6 h-6 transition-transform duration-200 hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://instagram.com/kawsarahmed",
      svg: (
        <svg className="w-6 h-6 transition-transform duration-200 hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@kawsarahmed",
      svg: (
        <svg className="w-6 h-6 transition-transform duration-200 hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "Email",
      href: "mailto:kawsar.ahmed@email.com",
      svg: (
        <svg className="w-6 h-6 transition-transform duration-200 hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7L4 8v10h16V8l-8 5Zm0-2l8-5H4l8 5ZM4 8V6v12V8Z"/>
        </svg>
      )
    }
  ];

  const smoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black border-t border-gray-800">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 pointer-events-none">
        <div className="w-[30rem] h-[30rem] bg-gradient-to-br from-orange-800/10 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 pointer-events-none">
        <div className="w-[25rem] h-[25rem] bg-gradient-to-tl from-purple-800/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        {/* Logo and Name */}
        <div className="mb-8 flex items-center justify-center">
          <div className="flex items-center gap-4 group">
            {/* Footer Logo Icon */}
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-xl group-hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center">
                <div className="relative">
                  {/* K monogram */}
                  <svg className="w-7 h-7 text-white font-bold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4H8V12L14 6H17L11 12L17 20H14L10 14L8 16V20H6V4Z" fill="currentColor" strokeWidth="1.5"/>
                  </svg>
                  {/* Small dot accent */}
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl blur-lg opacity-30 -z-10"></div>
            </div>
            
            {/* Footer Logo Text */}
            <div className="text-center">
              <div className="flex items-center gap-3 justify-center mb-1">
                <span className="text-3xl font-display font-black text-gradient text-glow">
                  Kawsar
                </span>
                <span className="text-3xl font-display font-black" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 50%, #d1d5db 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
                }}>
                  Ahmed
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <div className="w-4 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
                <span className="text-orange-400 text-sm font-code tracking-wider uppercase">
                  software.engineer
                </span>
                <div className="w-4 h-0.5 bg-gradient-to-l from-red-500 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mb-8 w-full">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base font-medium">
            {navLinks.map(link => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={(e) => smoothScroll(e, link.href)}
                  className="text-gray-400 hover:text-orange-400 transition-all duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm">
          {socialIcons.map(icon => (
            <a 
              key={icon.name} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={icon.name} 
              className="text-gray-400 hover:text-orange-400 transition-all duration-300 p-2 rounded-full hover:bg-orange-500/10 border border-transparent hover:border-orange-500/20" 
              href={icon.href}
            >
              {icon.svg}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Contact CTA */}
        {/* <div className="mb-8 text-center">
          <h3 className="text-white text-lg font-semibold mb-2">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-gray-400 text-sm mb-4 max-w-md">
            Ready to transform your ideas into powerful digital solutions? 
            I'd love to hear about your next project.
          </p>
          <a 
            href="mailto:kawsar.ahmed@email.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Get In Touch
          </a>
        </div> */}

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">
            &copy; {new Date().getFullYear()} Md. Kawsar Ahmed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
