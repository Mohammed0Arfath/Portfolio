import React from 'react';
import { 
  Code, Database, Brain, Camera, MessageSquare, BarChart3, 
  Cpu, Globe, Layers, Zap, Users, Target 
} from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 'Advanced', icon: '🐍' },
        { name: 'Java', level: 'Intermediate', icon: '☕' },
        { name: 'SQL', level: 'Intermediate', icon: '🗃️' },
        { name: 'JavaScript', level: 'Beginner', icon: '🟨' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Scikit-learn', level: 'Advanced', icon: '🤖' },
        { name: 'OpenCV', level: 'Advanced', icon: '👁️' },
        { name: 'TensorFlow', level: 'Intermediate', icon: '🧠' },
        { name: 'React', level: 'Intermediate', icon: '⚛️' },
        { name: 'Pandas', level: 'Advanced', icon: '🐼' },
        { name: 'NumPy', level: 'Advanced', icon: '🔢' }
      ]
    },
    {
      title: 'AI/ML Domains',
      icon: Brain,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Machine Learning', level: 'Advanced', icon: '🤖' },
        { name: 'Computer Vision', level: 'Advanced', icon: '👁️' },
        { name: 'Deep Learning', level: 'Intermediate', icon: '🧠' },
        { name: 'NLP', level: 'Beginner', icon: '💬' },
        { name: 'Data Mining', level: 'Intermediate', icon: '⛏️' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git/GitHub', level: 'Advanced', icon: '🐙' },
        { name: 'Jupyter', level: 'Advanced', icon: '📓' },
        { name: 'Google Cloud', level: 'Intermediate', icon: '☁️' },
        { name: 'AWS', level: 'Beginner', icon: '🟠' },
        { name: 'Docker', level: 'Beginner', icon: '🐳' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Problem Solving', level: 'Advanced', icon: '🧩' },
        { name: 'Team Collaboration', level: 'Advanced', icon: '🤝' },
        { name: 'Technical Communication', level: 'Advanced', icon: '📢' },
        { name: 'Project Management', level: 'Intermediate', icon: '📋' }
      ]
    },
    {
      title: 'Specialized Areas',
      icon: Target,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Image Processing', level: 'Advanced', icon: '🖼️' },
        { name: 'Data Structures', level: 'Advanced', icon: '🏗️' },
        { name: 'Algorithms', level: 'Advanced', icon: '⚡' },
        { name: 'System Design', level: 'Intermediate', icon: '🏛️' }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return darkMode ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700';
      case 'Intermediate':
        return darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700';
      case 'Beginner':
        return darkMode ? 'bg-yellow-500/20 text-yellow-300' : 'bg-yellow-100 text-yellow-700';
      default:
        return darkMode ? 'bg-gray-500/20 text-gray-300' : 'bg-gray-100 text-gray-700';
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'Advanced': return 'w-5/6';
      case 'Intermediate': return 'w-3/4';
      case 'Beginner': return 'w-1/2';
      default: return 'w-1/3';
    }
  };

  return (
    <section id="skills" className={`py-20 ${
      darkMode ? 'bg-slate-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Technical Skills
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              A comprehensive toolkit for building next-generation AI solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`group p-8 rounded-2xl backdrop-blur-lg border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  darkMode 
                    ? 'bg-slate-700/50 border-slate-600/50 hover:bg-slate-700/70' 
                    : 'bg-slate-50/70 border-slate-200/50 hover:bg-white/70'
                }`}
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`p-4 rounded-lg transition-all duration-300 hover:scale-102 ${
                        darkMode 
                          ? 'bg-slate-600/50 hover:bg-slate-600' 
                          : 'bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className={`font-semibold ${
                            darkMode ? 'text-slate-200' : 'text-slate-700'
                          }`}>
                            {skill.name}
                          </span>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      
                      <div className={`w-full bg-slate-200 rounded-full h-2 ${darkMode ? 'bg-slate-500' : ''}`}>
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            skill.level === 'Advanced' ? 'bg-green-500' :
                            skill.level === 'Intermediate' ? 'bg-blue-500' : 'bg-yellow-500'
                          } ${getLevelWidth(skill.level)}`}
                          style={{ animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className={`mt-16 p-8 rounded-2xl backdrop-blur-lg border ${
            darkMode 
              ? 'bg-slate-700/50 border-slate-600/50' 
              : 'bg-slate-50/70 border-slate-200/50'
          }`}>
            <h3 className={`text-2xl font-bold mb-8 text-center ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Skill Proficiency Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className={`p-6 rounded-xl ${
                darkMode ? 'bg-green-500/10' : 'bg-green-50'
              }`}>
                <div className={`text-4xl font-bold mb-2 ${
                  darkMode ? 'text-green-400' : 'text-green-600'
                }`}>
                  12
                </div>
                <div className={`text-sm font-medium ${
                  darkMode ? 'text-green-300' : 'text-green-700'
                }`}>
                  Advanced Skills
                </div>
                <div className={`text-xs mt-1 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Production-ready expertise
                </div>
              </div>
              
              <div className={`p-6 rounded-xl ${
                darkMode ? 'bg-blue-500/10' : 'bg-blue-50'
              }`}>
                <div className={`text-4xl font-bold mb-2 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  8
                </div>
                <div className={`text-sm font-medium ${
                  darkMode ? 'text-blue-300' : 'text-blue-700'
                }`}>
                  Intermediate Skills
                </div>
                <div className={`text-xs mt-1 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Solid working knowledge
                </div>
              </div>
              
              <div className={`p-6 rounded-xl ${
                darkMode ? 'bg-yellow-500/10' : 'bg-yellow-50'
              }`}>
                <div className={`text-4xl font-bold mb-2 ${
                  darkMode ? 'text-yellow-400' : 'text-yellow-600'
                }`}>
                  4
                </div>
                <div className={`text-sm font-medium ${
                  darkMode ? 'text-yellow-300' : 'text-yellow-700'
                }`}>
                  Learning Skills
                </div>
                <div className={`text-xs mt-1 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Actively developing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;