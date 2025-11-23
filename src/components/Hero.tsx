'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { heroContent } from '@/data/content';
import { downloadFile } from '@/utils/download';

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Web Developer', 'UI Designer', 'Problem Solver'];
  const currentRole = roles[currentTextIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      // Delete text
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, typingSpeed / 2);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % roles.length);
      }
    } else {
      // Type text
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Pause at the end of typing
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentTextIndex, isDeleting, currentRole, roles.length, typingSpeed]);

  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 text-center">
      <div className="glass-container flex flex-col items-center w-full max-w-4xl rounded-3xl p-8 backdrop-blur-sm">
        {/* Profile Photo */}
        <div className="mb-8">
          <img
            src="/profile.jpg"
            alt="Pon Divya"
            className="w-40 h-40 rounded-full object-cover border-4 border-accent/40 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <p className="mb-2 text-lg font-medium text-accent sm:text-xl">
          Hi, I&apos;m {heroContent.name} 👋
        </p>
        
        <h1 className="mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
          Computer Science Engineering Student
        </h1>
        
        <p className="mx-auto mb-6 max-w-2xl text-lg text-mist sm:text-xl">
          Web developer passionate about clean, user-friendly experiences.
        </p>

        <div className="mb-8 h-8 text-xl font-medium text-accent sm:h-10 sm:text-2xl">
          {displayText}
          <span className="ml-1 inline-block h-8 w-1.5 animate-pulse bg-accent sm:h-10"></span>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={heroContent.actionPrimary.href}
            className="group relative overflow-hidden rounded-2xl border-2 border-accent bg-accent/10 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-accent/30 hover:shadow-[0_0_20px_rgba(109,211,255,0.4)]"
          >
            <span className="relative z-10">{heroContent.actionPrimary.label}</span>
            <span className="absolute inset-0 -z-0 scale-0 rounded-full bg-accent/20 transition-transform duration-500 group-hover:scale-110"></span>
          </Link>
          
          <Link
            href={heroContent.actionSecondary.href}
            className="group relative overflow-hidden rounded-2xl border-2 border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-mist transition-all duration-300 hover:border-accent/50 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <span className="relative z-10">{heroContent.actionSecondary.label}</span>
            <span className="absolute inset-0 -z-0 scale-0 rounded-full bg-white/5 transition-transform duration-500 group-hover:scale-110"></span>
          </Link>

          <button
            onClick={() => downloadFile('/pon-divya-resume.pdf', 'Pon-Divya-Resume.pdf')}
            className="group relative flex aspect-square w-12 items-center justify-center overflow-hidden rounded-xl border-2 border-accent/30 bg-white/5 p-0 text-accent shadow-[0_4px_14px_rgba(109,211,255,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/10 hover:shadow-[0_6px_20px_rgba(109,211,255,0.25)] sm:w-14"
            aria-label="Download Resume"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:scale-110"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
