import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const certifications = [
    {
      provider: 'Infosys Springboard',
      courses: [
        'Deep Learning',
        'Computer Vision',
        'Generative AI',
        'Agile Scrum',
        'Soft Skills'
      ],
      color: 'from-blue-500 to-indigo-500',
      icon: '🎓'
    },
    {
      provider: 'AWS Educate',
      courses: ['Introduction to Generative AI'],
      color: 'from-orange-500 to-red-500',
      icon: '☁️'
    },
    {
      provider: 'Google Cloud',
      courses: [
        'Gemini Apps with Streamlit',
        'Vertex AI',
        'Skill Badges Completed'
      ],
      color: 'from-green-500 to-teal-500',
      icon: '🚀'
    },
    {
      provider: 'Kaggle',
      courses: [
        'Python',
        'Intro to Machine Learning',
        'Intermediate Machine Learning'
      ],
      color: 'from-cyan-500 to-blue-500',
      icon: '📊'
    },
    {
      provider: 'Forage',
      courses: [
        'Deloitte Data Analytics Virtual Experience',
        'Solutions Architecture Virtual Experience'
      ],
      color: 'from-purple-500 to-pink-500',
      icon: '💼'
    }
  ];

  return (
    <section id="certifications" className={`py-20 ${
      darkMode ? 'bg-slate-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Certifications
            </h2>
            <p className={`text-lg ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Continuous learning and professional development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.provider}
                className={`group p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  darkMode 
                    ? 'bg-slate-700/50 border-slate-600/50 hover:bg-slate-700/70' 
                    : 'bg-slate-50/70 border-slate-200/50 hover:bg-white/70'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} mr-4 text-2xl`}>
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {cert.provider}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2">
                  {cert.courses.map((course) => (
                    <div
                      key={course}
                      className={`flex items-center p-3 rounded-lg transition-colors ${
                        darkMode 
                          ? 'bg-slate-600/50 group-hover:bg-slate-600' 
                          : 'bg-white group-hover:bg-slate-50'
                      }`}
                    >
                      <Award className={`w-4 h-4 mr-3 ${
                        darkMode ? 'text-blue-400' : 'text-blue-500'
                      }`} />
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-slate-200' : 'text-slate-700'
                      }`}>
                        {course}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-opacity-20">
                  <div className={`flex items-center text-xs ${
                    darkMode ? 'text-slate-400 border-slate-600' : 'text-slate-500 border-slate-200'
                  }`}>
                    <Calendar className="w-3 h-3 mr-1" />
                    Completed
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className={`mt-12 p-8 rounded-2xl backdrop-blur-lg border ${
            darkMode 
              ? 'bg-slate-700/50 border-slate-600/50' 
              : 'bg-slate-50/70 border-slate-200/50'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className={`text-3xl font-bold ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
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
                  darkMode ? 'text-green-400' : 'text-green-600'
                }`}>
                  5
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Platforms
                </div>
              </div>
              <div>
                <div className={`text-3xl font-bold ${
                  darkMode ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  AI/ML
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Focus Area
                </div>
              </div>
              <div>
                <div className={`text-3xl font-bold ${
                  darkMode ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  2025
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Latest Year
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;