import React from 'react';
import { GraduationCap, MapPin, Calendar, Trophy } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className={`py-20 ${
      darkMode ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              About Me
            </h2>
            <p className={`text-lg ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Passionate about leveraging AI to solve real-world problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-2xl backdrop-blur-lg border ${
              darkMode 
                ? 'bg-slate-800/50 border-slate-700/50' 
                : 'bg-white/70 border-slate-200/50'
            }`}>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Education
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className={`w-5 h-5 mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      VIT Vellore
                    </h4>
                    <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      Integrated M.Tech in Software Engineering
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Calendar className={`w-5 h-5 mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      2022 - 2027
                    </h4>
                    <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      Currently in 3rd year
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Trophy className={`w-5 h-5 mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      CGPA: 9.06
                    </h4>
                    <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      Academic Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-2xl backdrop-blur-lg border ${
              darkMode 
                ? 'bg-slate-800/50 border-slate-700/50' 
                : 'bg-white/70 border-slate-200/50'
            }`}>
              <h3 className={`text-xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Career Aspirations
              </h3>
              
              <div className="space-y-4">
                <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  I aspire to work at <strong className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Google/FAANG</strong> companies, 
                  specializing in AI, Machine Learning, and Computer Vision domains.
                </p>
                
                <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  My journey involves building innovative AI solutions that can positively impact millions of lives, 
                  combining technical expertise with creative problem-solving.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {['Artificial Intelligence', 'Machine Learning', 'Computer Vision', 'Software Engineering'].map((item) => (
                    <span key={item} className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode 
                        ? 'bg-blue-500/20 text-blue-300' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;