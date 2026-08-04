import React from 'react';
import { Rocket, Code, GraduationCap, MonitorPlay } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export const heroData = {
  name: "Divya",
  role: "Full-Stack Developer",
  tagline: "Computer Science Engineering Student",
  description: "I enjoy building modern web applications, solving real-world problems, and continuously learning new technologies. My focus is creating clean, responsive, and user-friendly digital experiences.",
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:divyavenkatesan239@gmail.com"
  }
};

export const aboutData = {
  profileImage: profileImg, 
  quote: "\"Building modern web applications with clean code, intuitive user experiences, and scalable solutions. Passionate about learning, creating, and continuously improving as a developer.\"",
  slidingCards: [
    {
      title: "👋 Who I Am",
      content: (
        <ul className="space-y-2 text-sm">
          <li><span className="font-bold text-luxury-gold">Name:</span> <span className="text-soft-ivory/90">Divya Venkatesan</span></li>
          <li><span className="font-bold text-luxury-gold">Role:</span> <span className="text-soft-ivory/90">Full-Stack Developer</span></li>
        </ul>
      )
    },
    {
      title: "🎓 Education",
      content: (
        <ul className="space-y-2 text-sm">
          <li><span className="font-bold text-luxury-gold">Degree:</span> <span className="text-soft-ivory/90">B.E. Computer Science Engineering</span></li>
          <li><span className="font-bold text-luxury-gold">University:</span> <span className="text-soft-ivory/90">Jaya Engineering College, Anna University</span></li>
          <li><span className="font-bold text-luxury-gold">Year:</span> <span className="text-soft-ivory/90">3rd Year</span></li>
        </ul>
      )
    },
    {
      title: "💻 Tech Focus",
      content: (
        <ul className="space-y-2 text-sm list-disc list-inside text-soft-ivory/90">
          <li>MERN Stack Development</li>
          <li>Responsive Web Applications</li>
          <li>REST API Development</li>
          <li>Modern UI Development</li>
        </ul>
      )
    },
    {
      title: "🎯 Career Goal",
      content: (
        <p className="text-sm text-soft-ivory/90 leading-relaxed">
          To become a skilled Full-Stack Software Engineer by building scalable, user-centric applications and continuously learning modern technologies.
        </p>
      )
    },
    {
      title: "⚡ Interests",
      content: (
        <ul className="space-y-1 text-sm list-disc list-inside text-soft-ivory/90">
          <li>Full-Stack Development</li>
          <li>Frontend Design</li>
          <li>Backend Development</li>
          <li>Problem Solving</li>
          <li>Open Source Learning</li>
          <li>Building Real-World Projects</li>
        </ul>
      )
    }
  ]
};

export const skillsData = {
  categories: ['Programming Languages', 'Frontend', 'Backend', 'Database', 'Tools'],
  skills: [
    { id: '2', name: 'Python', category: 'Programming Languages', icon: '' },
    { id: '3', name: 'JavaScript', category: 'Programming Languages', icon: '' },
    { id: '6', name: 'HTML', category: 'Frontend', icon: '' },
    { id: '7', name: 'CSS', category: 'Frontend', icon: '' },
    { id: '8', name: 'React', category: 'Frontend', icon: '' },
    { id: '10', name: 'Node.js', category: 'Backend', icon: '' },
    { id: '11', name: 'Express', category: 'Backend', icon: '' },
    { id: '12', name: 'MongoDB', category: 'Database', icon: '' },
    { id: '13', name: 'Git', category: 'Tools', icon: '' },
    { id: '14', name: 'GitHub', category: 'Tools', icon: '' },
    { id: '15', name: 'VS Code', category: 'Tools', icon: '' },
  ]
};

export const projectsData = [
  {
    id: '1',
    title: 'TalentMatrix',
    description: 'A student collaboration platform that connects students with peers based on skills and interests, enabling project collaboration, networking, and team formation through an interactive dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Nexora',
    description: 'An AI-powered business collaboration platform that streamlines project management, team coordination, and intelligent workflows through role-based dashboards and automation features.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'python'],
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'ProjectBridge',
    description: 'A project marketplace that connects students with businesses, allowing companies to post real-world projects while students apply, collaborate, and gain practical industry experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  }
];

export const educationData = [
  {
    id: 1,
    title: "The Beginning",
    subtitle: "Discovering Code",
    description: "Started the journey into technology by exploring the fundamentals of programming. Built strong logic and problem-solving skills using C and basic web technologies like HTML and CSS.",
    icon: <Code size={20} />,
    color: "text-blue-400",
    bg: "bg-blue-500/20",
    border: "border-blue-500"
  },
  {
    id: 2,
    title: "Academic Roots",
    subtitle: "B.E. Computer Science Engineering",
    description: "Pursuing formal education at Anna University (Jaya Engineering College). Diving deep into data structures, algorithms, and software engineering principles.",
    icon: <GraduationCap size={20} />,
    color: "text-luxury-gold",
    bg: "bg-luxury-gold/20",
    border: "border-luxury-gold"
  },
  {
    id: 3,
    title: "The Full-Stack Shift",
    subtitle: "MERN Stack Development",
    description: "Transitioned from static pages to dynamic web applications. Mastered React.js for frontend and Express/Node.js with MongoDB for robust backend solutions.",
    icon: <MonitorPlay size={20} />,
    color: "text-[#39FF14]",
    bg: "bg-[#10B981]/20",
    border: "border-[#39FF14]"
  },
  {
    id: 4,
    title: "Continuous Learning",
    subtitle: "Modern UI & Scalability",
    description: "Currently focusing on crafting premium user interfaces, writing clean and scalable code, and building real-world projects to bridge the gap between theory and industry standards.",
    icon: <Rocket size={20} />,
    color: "text-emerald-400",
    bg: "bg-emerald-500/20",
    border: "border-emerald-400"
  }
];
