import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Star, Shield, Trophy, Zap } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const certificationProviders = [
    {
      provider: 'Infosys Springboard',
      logo: '🎓',
      logoUrl: 'https://infyspringboard.onwingspan.com/web/assets/images/infosysheadstart/logo.png',
      color: 'from-blue-500 to-indigo-600',
      certifications: [
        { name: 'Deep Learning', verified: true, year: '2025', badge: 'Advanced' },
        { name: 'Computer Vision', verified: true, year: '2025', badge: 'Advanced' },
        { name: 'Generative AI', verified: true, year: '2025', badge: 'Emerging Tech' },
        { name: 'Agile Scrum', verified: true, year: '2025', badge: 'Professional' },
        { name: 'Soft Skills', verified: true, year: '2025', badge: 'Professional' }
      ],
      totalCerts: 5,
      credentialUrl: 'https://docs.google.com/spreadsheets/d/1fB75TJxYv2bVEQFSw0sKOAO7sGiz2B-8/edit?usp=sharing&ouid=116614540360172099735&rtpof=true&sd=true',
      description: 'Industry-leading AI/ML and professional development certifications'
    },
    {
      provider: 'AWS Educate',
      logo: '☁️',
      logoUrl: 'https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQK.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png',
      color: 'from-orange-500 to-red-500',
      certifications: [
        { name: 'Introduction to Generative AI', verified: true, year: '2025', badge: 'AI/ML' },
        { name: 'AWS Cloud Practitioner Essentials', verified: true, year: '2025', badge: 'Cloud Fundamentals' }
      ],
      totalCerts: 2,
      credentialUrl: 'https://docs.google.com/spreadsheets/d/187Ianzh3dJC35Fa5oHBIQose8XL05PGk/edit?usp=sharing&ouid=116614540360172099735&rtpof=true&sd=true',
      description: 'Cloud computing and AI fundamentals from AWS'
    },
    {
      provider: 'Google Cloud',
      logo: '🚀',
      logoUrl: 'https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png',
      color: 'from-green-500 to-teal-500',
      certifications: [
        { name: 'Gemini Apps with Streamlit', verified: true, year: '2025', badge: 'AI Development' },
        { name: 'Vertex AI Fundamentals', verified: true, year: '2025', badge: 'ML Platform' },
        { name: 'Cloud ML Skill Badges', verified: true, year: '2025', badge: 'Hands-on' }
      ],
      totalCerts: 3,
      credentialUrl: 'https://docs.google.com/spreadsheets/d/17IglKGat3vtJ4hBubkXgBrh7jNoYzU-E6xhNdhSgIaM/edit?usp=sharing',
      description: 'Google Cloud AI/ML platform expertise and practical skills'
    },
    {
      provider: 'Kaggle',
      logo: '📊',
      logoUrl: 'https://www.kaggle.com/static/images/site-logo.png',
      color: 'from-cyan-500 to-blue-500',
      certifications: [
        { name: 'Python Programming', verified: true, year: '2023', badge: 'Programming' },
        { name: 'Intro to Machine Learning', verified: true, year: '2024', badge: 'ML Fundamentals' },
        { name: 'Intermediate Machine Learning', verified: true, year: '2025', badge: 'Advanced ML' }
      ],
      totalCerts: 3,
      credentialUrl: 'https://docs.google.com/spreadsheets/d/1PCSOTQeDFoI3aM0njABFiZUK5EnLAQoN6OLnkAqVBnc/edit?usp=sharing',
      description: 'Data science and machine learning practical certifications'
    },
    {
      provider: 'Forage',
      logo: '💼',
      logoUrl: 'https://cdn.theforage.com/vinternships/companyassets/forage_logo.png',
      color: 'from-purple-500 to-pink-500',
      certifications: [
        { name: 'Deloitte Data Analytics Virtual Experience', verified: true, year: '2025', badge: 'Industry Experience' },
        { name: 'Solutions Architecture Virtual Experience', verified: true, year: '2025', badge: 'Enterprise' }
      ],
      totalCerts: 2,
      credentialUrl: 'https://docs.google.com/spreadsheets/d/1FHYzVyJXo-JM1pFeb1jx3x3v6qlBCAO5OzRyBaTHygs/edit?usp=sharing',
      description: 'Real-world industry experience and professional simulations'
    }
  ];

  const skillAreas = [
    { area: 'AI & Machine Learning', count: 8, icon: '🤖', color: 'from-blue-500 to-purple-500' },
    { area: 'Cloud Computing', count: 5, icon: '☁️', color: 'from-orange-500 to-red-500' },
    { area: 'Data Science', count: 5, icon: '📊', color: 'from-green-500 to-teal-500' },
    { area: 'Professional Skills', count: 3, icon: '💼', color: 'from-purple-500 to-pink-500' }
  ];

  const getBadgeColor = (badge: string) => {
    const badgeColors: Record<string, string> = {
      'Advanced': 'from-green-500 to-emerald-500',
      'AI/ML': 'from-blue-500 to-indigo-500',
      'Emerging Tech': 'from-purple-500 to-violet-500',
      'Professional': 'from-gray-500 to-slate-500',
      'Cloud Fundamentals': 'from-orange-500 to-red-500',
      'AI Development': 'from-cyan-500 to-blue-500',
      'ML Platform': 'from-teal-500 to-green-500',
      'Hands-on': 'from-yellow-500 to-orange-500',
      'Programming': 'from-indigo-500 to-purple-500',
      'ML Fundamentals': 'from-blue-500 to-cyan-500',
      'Advanced ML': 'from-green-500 to-teal-500',
      'Industry Experience': 'from-purple-500 to-pink-500',
      'Enterprise': 'from-gray-600 to-gray-800'
    };
    return badgeColors[badge] || 'from-gray-400 to-gray-600';
  };

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

          {/* Provider Logos Grid */}
          <div className={`mb-16 p-8 rounded-2xl backdrop-blur-lg border ${
            darkMode 
              ? 'bg-slate-700/50 border-slate-600/50' 
              : 'bg-slate-50/70 border-slate-200/50'
          }`}>
            <h3 className={`text-2xl font-bold mb-8 text-center ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Certification Providers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {certificationProviders.map((provider) => (
                <a
                  key={provider.provider}
                  href={provider.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-6 rounded-xl bg-gradient-to-br ${provider.color} text-white text-center transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer relative overflow-hidden`}
                >
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">{provider.logo}</div>
                    <div className="text-sm font-bold">{provider.provider}</div>
                    <div className="text-xs opacity-90 mt-1">{provider.totalCerts} Certifications</div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Verification badge */}
                  <div className="absolute -top-2 -right-2 p-1 bg-green-500 rounded-full">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </a>
              ))}
            </div>
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
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${provider.color} mr-4 text-3xl relative`}>
                      {provider.logo}
                      <div className="absolute -top-1 -right-1 p-1 bg-green-500 rounded-full">
                        <Shield className="w-3 h-3 text-white" />
                      </div>
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
                      <p className={`text-xs mt-1 ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {provider.description}
                      </p>
                    </div>
                  </div>
                  
                  <a
                    href={provider.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
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
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <Trophy className="w-4 h-4 text-yellow-500" />
                        </div>
                        <div>
                          <span className={`font-medium text-sm ${
                            darkMode ? 'text-slate-200' : 'text-slate-700'
                          }`}>
                            {cert.name}
                          </span>
                          <div className="flex items-center space-x-2 mt-1">
                            <Calendar className="w-3 h-3 text-blue-500" />
                            <span className={`text-xs ${
                              darkMode ? 'text-slate-400' : 'text-slate-500'
                            }`}>
                              Completed {cert.year}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-1">
                        {cert.verified && (
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            darkMode 
                              ? 'bg-green-500/20 text-green-300' 
                              : 'bg-green-100 text-green-700'
                          }`}>
                            Verified
                          </div>
                        )}
                        <div className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getBadgeColor(cert.badge)} text-white`}>
                          {cert.badge}
                        </div>
                      </div>
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
                    <Zap className="w-3 h-3 ml-1 text-yellow-500" />
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
                  className={`text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br ${area.color} text-white relative overflow-hidden group cursor-pointer`}
                >
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">{area.icon}</div>
                    <div className="text-2xl font-bold mb-2">{area.count}</div>
                    <div className="text-sm font-medium">{area.area}</div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                <div className={`text-xs mt-1 flex items-center justify-center ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                  All Verified
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
                <div className={`text-xs mt-1 flex items-center justify-center ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <Star className="w-3 h-3 mr-1 text-yellow-500" />
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
                <div className={`text-xs mt-1 flex items-center justify-center ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <Zap className="w-3 h-3 mr-1 text-blue-500" />
                  Specialized Expertise
                </div>
              </div>
              
              <div>
                <div className={`text-4xl font-bold mb-2 ${
                  darkMode ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  2025
                </div>
                <div className={`text-sm font-medium ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Latest Completion
                </div>
                <div className={`text-xs mt-1 flex items-center justify-center ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <Trophy className="w-3 h-3 mr-1 text-yellow-500" />
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