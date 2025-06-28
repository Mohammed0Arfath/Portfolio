import React, { Suspense, useEffect } from 'react';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import Spline from '@splinetool/react-spline';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  useEffect(() => {
    // Load Unicorn Studio script for mobile
    if (window.innerWidth < 1024) {
      if (!window.UnicornStudio) {
        window.UnicornStudio = { isInitialized: false };
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.26/dist/unicornStudio.umd.js';
        script.onload = function() {
          if (!window.UnicornStudio.isInitialized) {
            window.UnicornStudio.init();
            window.UnicornStudio.isInitialized = true;
          }
        };
        (document.head || document.body).appendChild(script);
      }
    }
  }, []);

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100'
    }`}>
      {/* Desktop Spline 3D Background */}
      <div className="hidden lg:block absolute inset-0 w-full h-full">
        <Suspense fallback={
          <div className={`w-full h-full flex items-center justify-center ${
            darkMode ? 'bg-slate-900' : 'bg-slate-50'
          }`}>
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
          </div>
        }>
          <Spline
            scene="https://prod.spline.design/UWb6mOJHCPe6V4s6/scene.splinecode"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1
            }}
          />
        </Suspense>
      </div>

      {/* Mobile Unicorn Studio 3D Background */}
      <div className="lg:hidden absolute inset-0 w-full h-full flex items-center justify-center">
        <div 
          data-us-project="KhmBWfY8ZjI5b59tOmWu" 
          className="w-full h-full"
          style={{
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            minHeight: '100dvh'
          }}
        />
      </div>

      {/* Fallback Background for Mobile (in case Unicorn Studio doesn't load) */}
      <div className="lg:hidden absolute inset-0 overflow-hidden" style={{ zIndex: -1 }}>
        {/* Animated gradient orbs */}
        <div className={`absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-30 animate-pulse ${
          darkMode ? 'bg-gradient-to-r from-blue-600 to-cyan-500' : 'bg-gradient-to-r from-blue-400 to-cyan-400'
        }`}></div>
        <div className={`absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-20 animate-pulse delay-1000 ${
          darkMode ? 'bg-gradient-to-r from-purple-600 to-pink-500' : 'bg-gradient-to-r from-purple-400 to-pink-400'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-25 animate-pulse delay-500 ${
          darkMode ? 'bg-gradient-to-r from-indigo-600 to-blue-500' : 'bg-gradient-to-r from-indigo-400 to-blue-400'
        }`}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full opacity-40 animate-pulse ${
                darkMode ? 'bg-blue-400' : 'bg-blue-500'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Geometric patterns */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke={darkMode ? "#3b82f6" : "#1e40af"} strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Overlay for text readability */}
      <div className={`absolute inset-0 z-10 ${
        darkMode 
          ? 'bg-slate-900/40' 
          : 'bg-white/60'
      }`}></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-lg border ${
            darkMode 
              ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' 
              : 'bg-blue-100/90 text-blue-800 border-blue-300/50 shadow-lg'
          }`}>
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Available for opportunities
          </div>

          {/* Main Heading */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
            darkMode 
              ? 'text-white' 
              : 'text-slate-900'
          }`}>
            Mohammed{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Arfath
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg sm:text-xl md:text-2xl mb-4 font-semibold ${
            darkMode 
              ? 'text-slate-100' 
              : 'text-slate-800'
          }`}>
            Turning Ideas into AI-Powered Realities
          </p>

          {/* Description */}
          <p className={`text-base sm:text-lg mb-8 max-w-2xl mx-auto font-medium ${
            darkMode 
              ? 'text-slate-200' 
              : 'text-slate-700'
          }`}>
            Integrated M.Tech student at VIT Vellore, passionate about AI/ML and Software Engineering. 
            Aspiring to work at FAANG companies in AI, ML, or Computer Vision domains.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Contact Me
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="https://drive.google.com/file/d/1uwRX6ITcPCIePoae-q9khDSgwukkaTeD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg border-2 transition-all duration-300 hover:scale-105 backdrop-blur-lg shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center ${
                darkMode 
                  ? 'border-slate-400/50 text-slate-200 hover:bg-slate-800/50 hover:border-slate-300' 
                  : 'border-slate-600/70 text-slate-800 hover:bg-white/70 hover:border-slate-700 bg-white/50'
              }`}
            >
              <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Download Resume
            </a>
          </div>

          {/* Featured Project */}
          <div className={`max-w-2xl mx-auto p-4 sm:p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 hover:scale-105 shadow-xl ${
            darkMode 
              ? 'bg-slate-800/70 border-slate-600/50' 
              : 'bg-white/90 border-slate-300/50 shadow-2xl'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
              <h3 className={`text-base sm:text-lg font-semibold ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                🚀 Featured Project: Memorify App
              </h3>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium self-start sm:self-auto ${
                darkMode 
                  ? 'bg-blue-500/20 text-blue-300' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                Built with Bolt.new
              </span>
            </div>
            <p className={`text-sm mb-4 ${
              darkMode ? 'text-slate-100' : 'text-slate-700'
            }`}>
              Agentic AI diary app with emotional journaling and AI companion. Built using Together.ai, ElevenLabs, and Supabase.
            </p>
            <a
              href="https://superlative-treacle-ce6a5f.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center font-medium text-sm hover:underline ${
                darkMode 
                  ? 'text-blue-400 hover:text-blue-300' 
                  : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              Try Memorify Live
              <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;