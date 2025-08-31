import React from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent animate-pulse-glow">
            Portfolio
          </h1>
          <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4 text-gray-300">
            <span className="inline-block animate-float-1">Creative</span>
            <span className="mx-2 sm:mx-4 text-blue-400">×</span>
            <span className="inline-block animate-float-2">Technical</span>
            <span className="mx-2 sm:mx-4 text-purple-400">×</span>
            <span className="inline-block animate-float-3">Innovative</span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          Full-Stack Developer crafting immersive digital experiences with 
          <span className="text-blue-400 font-semibold"> cutting-edge technology</span> and
          <span className="text-purple-400 font-semibold"> mathematical precision</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
          <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 active:scale-95">
            <span className="flex items-center space-x-2">
              <span>View My Work</span>
              <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-500 rounded-full font-semibold text-gray-300 hover:text-white hover:border-white transition-all duration-300 hover:bg-white/5">
            <span className="flex items-center space-x-2">
              <Download size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-y-1 transition-transform" />
              <span>Download Resume</span>
            </span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNext}
          className="animate-bounce text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 border border-blue-500/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-20 sm:top-40 right-4 sm:right-20 w-12 sm:w-18 lg:w-24 h-12 sm:h-18 lg:h-24 border border-purple-500/30 rotate-12 animate-float-reverse"></div>
        <div className="absolute bottom-16 sm:bottom-32 left-4 sm:left-20 w-10 sm:w-16 lg:w-20 h-10 sm:h-16 lg:h-20 border border-yellow-500/30 rotate-45 animate-pulse-slow"></div>
      </div>
    </section>
  );
};

export default Hero;