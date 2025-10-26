"use client";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Md. Kawsar Ahmed",
    "givenName": "Kawsar",
    "familyName": "Ahmed",
    "additionalName": "Md.",
    "jobTitle": "Software Engineer",
    "description": "Passionate Software Engineer with 3 year of experience and 7-time hackathon winner specializing in modern web development.",
    "url": "https://kawsarahmed.dev",
    "image": "https://kawsarahmed.dev/profile-image.jpg",
    "sameAs": [
      "https://github.com/kawsarahmed",
      "https://linkedin.com/in/kawsarahmed",
      "https://twitter.com/kawsarahmed_dev",
      "https://instagram.com/kawsarahmed.dev",
      "https://youtube.com/@kawsarahmed"
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
      "Git",
      "Docker",
      "AWS",
      "Web Development",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Engineer",
      "description": "Full Stack Web Developer specializing in React, Next.js, and Node.js",
      "occupationLocation": {
        "@type": "Country",
        "name": "Bangladesh"
      }
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "International Islamic University Chittagong",
      "department": "Computer Science and Engineering"
    },
    "award": [
      "7-time Hackathon Winner",
      "Hackathon Finalist"
    ],
    "skills": "React, Next.js, JavaScript, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, Tailwind CSS, Git, Docker, AWS",
    "workLocation": {
      "@type": "Place",
      "name": "Remote/Bangladesh"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "mdkawsarahmed.dev@gmail.com",
      "contactType": "professional",
      "availableLanguage": ["English", "Bengali"]
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Md. Kawsar Ahmed - Software Engineer Portfolio",
    "description": "Portfolio website of Md. Kawsar Ahmed, showcasing projects, skills, and professional experience in software engineering.",
    "url": "https://kawsarahmed.dev",
    "author": {
      "@type": "Person",
      "name": "Md. Kawsar Ahmed"
    },
    "inLanguage": "en-US",
    "copyrightYear": new Date().getFullYear(),
    "genre": "Portfolio",
    "keywords": "software engineer, web developer, react developer, next.js, portfolio, hackathon winner"
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://kawsarahmed.dev"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://kawsarahmed.dev#hero"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Skills",
        "item": "https://kawsarahmed.dev#skills"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Experience",
        "item": "https://kawsarahmed.dev#experience"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Education",
        "item": "https://kawsarahmed.dev#education"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Projects",
        "item": "https://kawsarahmed.dev#projects"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
    </>
  );
}
