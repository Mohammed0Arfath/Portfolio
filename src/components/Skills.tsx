import React from 'react';
import { Code, Database, Brain, Camera, MessageSquare, BarChart3 } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'Java', 'SQL', 'DSA'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI & ML',
      skills: ['Machine Learning', 'Artificial Intelligence', 'Scikit-learn'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Camera,
      title: 'Computer Vision',
      skills: ['OpenCV', 'Image Processing'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Database,
      title: 'Data Science',
      skills: ['Data Mining', 'Analytics'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: MessageSquare,
      title: 'Communication',
      skills: ['Technical Communication'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="skills" className={`py-20 ${
      darkMode ? 'bg-slate-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Technical Skills
            </h2>
            <p className={`text-lg ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              A comprehensive toolkit for AI and software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`group p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  darkMode 
                    ? 'bg-slate-700/50 border-slate-600/50 hover:bg-slate-700/70' 
                    : 'bg-slate-50/70 border-slate-200/50 hover:bg-white/70'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        darkMode 
                          ? 'bg-slate-600/50 text-slate-200 group-hover:bg-slate-600' 
                          : 'bg-white text-slate-700 group-hover:bg-slate-50'
                      }`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* All Skills List */}
          <div className={`mt-12 p-8 rounded-2xl backdrop-blur-lg border ${
            darkMode 
              ? 'bg-slate-700/50 border-slate-600/50' 
              : 'bg-slate-50/70 border-slate-200/50'
          }`}>
            <h3 className={`text-xl font-semibold mb-6 text-center ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Complete Skillset
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'Python', 'Java', 'Scikit-learn', 'OpenCV', 'SQL', 'DSA', 
                'Image Processing', 'Data Mining', 'Machine Learning', 
                'Artificial Intelligence', 'Technical Communication'
              ].map((skill) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30' 
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;