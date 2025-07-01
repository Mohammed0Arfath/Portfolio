import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Star } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const certificationProviders = [
    {
      provider: 'Infosys Springboard',
      logo: '🎓',
      color: 'from-blue-500 to-indigo-600',
      certifications: [
        { name: 'Deep Learning', verified: true, year: '2024' },
        { name: 'Computer Vision', verified: true, year: '2024' },
        { name: 'Generative AI', verified: true, year: '2024' },
        { name: 'Agile Scrum', verified: true, year: '2024' },
        { name: 'Soft Skills', verified: true, year: '2024' }
      ],
      totalCerts: 5,
      credentialUrl: '#'
    },
    {
      provider: 'AWS Educate',
      logo: '☁️',
      color: 'from-orange-500 to-red-500',
      certifications: [
        { name: 'Introduction to Generative AI', verified: true, year: '2024' }
      ],
      totalCerts: 1,
      credentialUrl: '#'
    },
    {
      provider: 'Google Cloud',
      logo: '🚀',
      color: 'from-green-500 to-teal-500',
      certifications: [
        { name: 'Gemini Apps with Streamlit', verified: true, year: '2024' },
        { name: 'Vertex AI Fundamentals', verified: true, year: '2024' },
        { name: 'Cloud ML Skill Badges', verified: true, year: '2024' }
      ],
      totalCerts: 3,
      credentialUrl: '#'
    },
    {
      provider: 'Kaggle',
      logo: '📊',
      color: 'from-cyan-500 to-blue-500',
      certifications: [
        { name: 'Python Programming', verified: true, year: '2024' },
        { name: 'Intro to Machine Learning', verified: true, year: '2024' },
        { name: 'Intermediate Machine Learning', verified: true, year: '2024' }
      ],
      totalCerts: 3,
      credentialUrl: '#'
    },
    {
      provider: 'Forage',
      logo: '💼',
      color: 'from-purple-500 to-pink-500',
      certifications: [
        { name: 'Deloitte Data Analytics Virtual Experience', verified: true, year: '2024' },
        { name: 'Solutions Architecture Virtual Experience', verified: true, year: '2024' }
      ],
      totalCerts: 2,
      credentialUrl: '#'
    }
  ];

  const skillAreas = [
    { area: 'AI & Machine Learning', count: 8, icon: '🤖' },
    { area: 'Cloud Computing', count: 4, icon: '☁️' },
    { area: 'Data Science', count: 5, icon: '📊' },
    { area: 'Professional Skills', count: 3, icon: '💼' }
  ];

  return (
    <section id="certifications" className={`py-20 ${
      darkMode ? 'bg-slate-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Certifications & Learning
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Continuous professional development through industry-recognized certifications
            </p>
          </div>

          {/* Certification Providers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {certificationProviders.map((provider, index) => (
              <div
                key={provider.provider}
                className={`group relative p-8 rounded-2xl backdrop-blur-lg border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  darkMode 
                    ? 'bg-slate-700/50 border-slate-600/50 hover:bg-slate-700/70' 
                    : 'bg-slate-50/70 border-slate-200/50 hover:bg-white/70'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Provider Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${provider.color} mr-4 text-3xl`}>
                      {provider.logo}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {provider.provider}
                      </h3>
                      <div className="flex items-center mt-1">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className={`text-sm ${
                          darkMode ? 'text-slate-300' : 'text-slate-600'
                        }`}>
                          {provider.totalCerts} Certifications
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href={provider.credentialUrl}
                    className={`p-2 rounded-lg transition-colors ${
                      darkMode 
                        ? 'hover:bg-slate-600 text-slate-400 hover:text-white' 
                        : 'hover:bg-slate-100 text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {/* Certifications List */}
                <div className="space-y-3">
                  {provider.certifications.map((cert, certIndex) => (
                    <div
                      key={cert.name}
                      className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
                        darkMode 
                          ? 'bg-slate-600/50 group-hover:bg-slate-600' 
                          : 'bg-white group-hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <CheckCircle className={`w-5 h-5 ${
                          cert.verified 
                            ? 'text-green-500' 
                            : (darkMode ? 'text-slate-500' : 'text-slate-400')
                        }`} />
                        <div>
                          <span className={`font-medium text-sm ${
                            darkMode ? 'text-slate-200' : 'text-slate-700'
                          }`}>
                            {cert.name}
                          </span>
                          <div className={`text-xs ${
                            darkMode ? 'text-slate-400' : 'text-slate-500'
                          }`}>
                            Completed {cert.year}
                          </div>
                        </div>
                      </div>
                      
                      {cert.verified && (
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          darkMode 
                            ? 'bg-green-500/20 text-green-300' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          Verified
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Provider Badge */}
                <div className={`mt-6 pt-4 border-t ${
                  darkMode ? 'border-slate-600' : 'border-slate-200'
                }`}>
                  <div className={`flex items-center justify-center text-xs ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    <Award className="w-3 h-3 mr-1" />
                    Industry Recognized
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skill Areas Summary */}
          <div className={`mb-16 p-8 rounded-2xl backdrop-blur-lg border ${
            darkMode 
              ? 'bg-slate-700/50 border-slate-600/50' 
              : 'bg-slate-50/70 border-slate-200/50'
          }`}>
            <h3 className={`text-2xl font-bold mb-8 text-center ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Certification Areas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skillAreas.map((area) => (
                <div
                  key={area.area}
                  className={`text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    darkMode ? 'bg-slate-600/50' : 'bg-white'
                  }`}
                >
                  <div className="text-4xl mb-3">{area.icon}</div>
                  <div className={`text-2xl font-bold mb-2 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {area.count}
                  </div>
                  <div className={`text-sm font-medium ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {area.area}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Overall Stats */}
          <div className={`p-8 rounded-2xl backdrop-blur-lg border ${
            darkMode 
              ? 'bg-slate-700/50 border-slate-600/50' 
              : 'bg-slate-50/70 border-slate-200/50'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className={`text-4xl font-bold mb-2 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  15+
                </div>
                <div className={`text-sm font-medium ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Total Certifications
                </div>
                <div className={`text-xs mt-1 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Verified & Industry-Recognized
                </div>
              </div>
              
              <div>
                <div className={`text-4xl font-bold mb-2 ${
                  darkMode ? 'text-green-400' : 'text-green-600'
                }`}>
                  5
                </div>
                <div className={`text-sm font-medium ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Learning Platforms
                </div>
                <div className={`text-xs mt-1 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Top-tier Providers
                </div>
              </div>
              
              <div>
                <div className={`text-4xl font-bold mb-2 ${
                  darkMode ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  AI/ML
                </div>
                <div className={`text-sm font-medium ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Primary Focus
                </div>
                <div className={`text-xs mt-1 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Specialized Expertise
                </div>
              </div>
              
              <div>
                <div className={`text-4xl font-bold mb-2 ${
                  darkMode ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  2024
                </div>
                <div className={`text-sm font-medium ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Latest Completion
                </div>
                <div className={`text-xs mt-1 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Continuous Learning
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