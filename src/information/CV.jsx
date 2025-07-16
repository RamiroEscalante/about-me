"use client"

import { ButtonDownload } from '../button-download/button-download';
import { BoxAvilitys } from '../box-avilitys/box-avilitys';
import { MyProjects } from '../my-projects/my-projects';
import { WhatIamDoing } from '../im-doing/what-i-am-doinng';
import { ContactWithMe } from '../contact-me/contact-with-me';  
import { Certifications } from '../certifications/my-certifications';
import { User, Code, Briefcase, BookOpen, Mail, Menu, X , Send} from "lucide-react"
import { useState } from "react"

export const CV = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section - Optimizado para móvil */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-white/80 text-xs sm:text-sm font-medium">Available for opportunities</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
              Ramiro Damian
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Escalante Cadena
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Software Development student with a passion for Frontend Development. 
              Creating user-friendly and responsive web experiences with modern technologies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
              {['React', 'JavaScript', 'HTML/CSS', 'Node.js'].map((tech) => (
                <span key={tech} className="px-3 sm:px-4 py-1 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-xs sm:text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
            
            <ButtonDownload />
          </div>
        </div>
      </div>

      {/* Navigation - Mejorada para móvil */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center gap-8 py-4">
            {[
              { icon: User, label: 'About', href: '#about' },
              { icon: Code, label: 'Skills', href: '#skills' },
              { icon: Briefcase, label: 'Projects', href: '#projects' },
              { icon: BookOpen, label: 'Learning', href: '#learning' },
              { icon: Mail, label: 'Contact', href: '#contact' },
              { icon: Send, label: 'Certifications', href: '#certifications' }
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 hover:bg-slate-100 rounded-lg"
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between py-4">
            <span className="font-semibold text-slate-800">Portfolio</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200 py-4">
              <nav className="flex flex-col gap-2">
                {[
                  { icon: User, label: 'About', href: '#about' },
                  { icon: Code, label: 'Skills', href: '#skills' },
                  { icon: Briefcase, label: 'Projects', href: '#projects' },
                  { icon: BookOpen, label: 'Learning', href: '#learning' },
                  { icon: Mail, label: 'Contact', href: '#contact' },
                  { icon: Send, label: 'Certifications', href: '#certifications' }
                ].map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 hover:bg-slate-100 rounded-lg"
                    >
                      <IconComponent className="w-5 h-5" />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* Content Sections - Optimizado para móvil */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-8 sm:space-y-16">
        {/* About Section */}
        <section id="about" className="bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="p-2 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg">
              <User className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">About Me</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Software Development student with a strong interest in Frontend Development. I enjoy creating 
              user-friendly and responsive websites using HTML, CSS, JavaScript, and React, looking forward 
              to improving my skills and learning new technologies.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg mt-4">
              My goal is to gain experience and work on projects that would help me become a better developer, 
              contributing to meaningful solutions that make a difference.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <BoxAvilitys  />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <MyProjects />
        </section>

        {/* Learning Section */}
        <section id="learning">
          <WhatIamDoing />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactWithMe />
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-slate-400 text-sm sm:text-base">
            © 2025 Ramiro Damian Escalante Cadena. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
