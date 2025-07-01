import React from 'react';
import { GraduationCap, Target, Code2, Trophy, Calendar, MapPin } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className={`py-20 ${
      darkMode ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              About Me
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Passionate AI/ML engineer building the future of intelligent systems
            </p>
          </div>

          {/* FAANG Goal Statement */}
          <div className={`text-center mb-16 p-8 rounded-2xl backdrop-blur-lg border ${
            darkMode 
              ? 'bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border-blue-500/30' 
              : 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200/50'
          }`}>
            <div className="flex items-center justify-center mb-4">
              <Target className={`w-8 h-8 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Career Aspiration
              </h3>
            </div>
            <p className={`text-xl font-semibold ${
              darkMode ? 'text-blue-300' : 'text-blue-700'
            }`}>
              Aspiring to join <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold">FAANG companies</span> as an AI/ML Engineer, 
              specializing in Computer Vision and Machine Learning systems that impact millions of users.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className={`group p-8 rounded-2xl backdrop-blur-lg border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              darkMode 
                ? 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70' 
                : 'bg-white/70 border-slate-200/50 hover:bg-white/90'
            }`}>
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mr-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Education
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-slate-700/50' : 'bg-slate-50'
                }`}>
                  <div className="flex items-start space-x-3 mb-3">
                    <MapPin className={`w-5 h-5 mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                    <div>
                      <h4 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        VIT Vellore
                      </h4>
                      <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        Integrated M.Tech in Software Engineering
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className={`w-4 h-4 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                        2022 - 2027
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Trophy className={`w-4 h-4 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
                      <span className={`font-semibold ${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>
                        CGPA: 9.06
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Currently in 4th year, focusing on advanced AI/ML coursework and research projects
                </div>
              </div>
            </div>

            {/* Technical Focus */}
            <div className={`group p-8 rounded-2xl backdrop-blur-lg border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              darkMode 
                ? 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70' 
                : 'bg-white/70 border-slate-200/50 hover:bg-white/90'
            }`}>
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Technical Focus
                </h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { area: 'Artificial Intelligence', level: 'Advanced' },
                  { area: 'Machine Learning', level: 'Advanced' },
                  { area: 'Computer Vision', level: 'Intermediate' },
                  { area: 'Deep Learning', level: 'Intermediate' },
                  { area: 'Software Engineering', level: 'Advanced' }
                ].map((skill) => (
                  <div key={skill.area} className={`p-3 rounded-lg ${
                    darkMode ? 'bg-slate-700/50' : 'bg-slate-50'
                  }`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {skill.area}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        skill.level === 'Advanced' 
                          ? (darkMode ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700')
                          : (darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700')
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className={`w-full bg-slate-200 rounded-full h-2 ${darkMode ? 'bg-slate-600' : ''}`}>
                      <div 
                        className={`h-2 rounded-full ${
                          skill.level === 'Advanced' ? 'bg-green-500 w-5/6' : 'bg-blue-500 w-3/4'
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Journey */}
            <div className={`group p-8 rounded-2xl backdrop-blur-lg border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              darkMode 
                ? 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70' 
                : 'bg-white/70 border-slate-200/50 hover:bg-white/90'
            }`}>
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Journey
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className={`p-4 rounded-lg border-l-4 border-blue-500 ${
                  darkMode ? 'bg-slate-700/50' : 'bg-blue-50'
                }`}>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Current Focus
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Building production-ready AI applications and contributing to open-source ML projects
                  </p>
                </div>
                
                <div className={`p-4 rounded-lg border-l-4 border-green-500 ${
                  darkMode ? 'bg-slate-700/50' : 'bg-green-50'
                }`}>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Next Steps
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Seeking internships and full-time opportunities at top tech companies
                  </p>
                </div>
                
                <div className={`p-4 rounded-lg border-l-4 border-purple-500 ${
                  darkMode ? 'bg-slate-700/50' : 'bg-purple-50'
                }`}>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Long-term Vision
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Leading AI research teams and developing systems that positively impact millions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className={`mt-16 p-8 rounded-2xl backdrop-blur-lg border ${
            darkMode 
              ? 'bg-slate-800/50 border-slate-700/50' 
              : 'bg-white/70 border-slate-200/50'
          }`}>
            <h3 className={`text-2xl font-bold mb-8 text-center ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Key Achievements
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className={`text-3xl font-bold ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  9.06
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  CGPA
                </div>
              </div>
              <div>
                <div className={`text-3xl font-bold ${
                  darkMode ? 'text-green-400' : 'text-green-600'
                }`}>
                  15+
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Certifications
                </div>
              </div>
              <div>
                <div className={`text-3xl font-bold ${
                  darkMode ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  5+
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  AI Projects
                </div>
              </div>
              <div>
                <div className={`text-3xl font-bold ${
                  darkMode ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  4th
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Year Student
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