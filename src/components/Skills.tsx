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
        { name: 'Python', level: 'Advanced', icon: '🐍', description: 'Data Science, AI/ML, Backend' },
        { name: 'Java', level: 'Intermediate', icon: '☕', description: 'OOP, Enterprise Applications' },
        { name: 'SQL', level: 'Intermediate', icon: '🗃️', description: 'Database Design, Queries' },
        { name: 'JavaScript', level: 'Beginner', icon: '🟨', description: 'Frontend, React Development' }
      ]
    },
    {
      title: 'AI/ML Frameworks',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'TensorFlow', level: 'Intermediate', icon: '🧠', description: 'Deep Learning, Neural Networks' },
        { name: 'PyTorch', level: 'Intermediate', icon: '🔥', description: 'Research, Computer Vision' },
        { name: 'Scikit-learn', level: 'Advanced', icon: '🤖', description: 'Classical ML, Data Mining' },
        { name: 'OpenCV', level: 'Advanced', icon: '👁️', description: 'Computer Vision, Image Processing' },
        { name: 'Pandas', level: 'Advanced', icon: '🐼', description: 'Data Analysis, Manipulation' },
        { name: 'NumPy', level: 'Advanced', icon: '🔢', description: 'Numerical Computing, Arrays' }
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'React', level: 'Intermediate', icon: '⚛️', description: 'Frontend Development, SPAs' },
        { name: 'TypeScript', level: 'Intermediate', icon: '📘', description: 'Type-safe JavaScript' },
        { name: 'Tailwind CSS', level: 'Advanced', icon: '🎨', description: 'Utility-first CSS Framework' },
        { name: 'Node.js', level: 'Beginner', icon: '🟢', description: 'Backend JavaScript Runtime' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Google Cloud', level: 'Intermediate', icon: '☁️', description: 'AI/ML Services, Compute' },
        { name: 'AWS', level: 'Beginner', icon: '🟠', description: 'Cloud Infrastructure, Services' },
        { name: 'Git/GitHub', level: 'Advanced', icon: '🐙', description: 'Version Control, Collaboration' },
        { name: 'Docker', level: 'Beginner', icon: '🐳', description: 'Containerization, Deployment' },
        { name: 'Supabase', level: 'Intermediate', icon: '⚡', description: 'Backend-as-a-Service, PostgreSQL' }
      ]
    },
    {
      title: 'AI/ML Domains',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Computer Vision', level: 'Advanced', icon: '👁️', description: 'Image Recognition, Object Detection' },
        { name: 'Machine Learning', level: 'Advanced', icon: '🤖', description: 'Supervised, Unsupervised Learning' },
        { name: 'Deep Learning', level: 'Intermediate', icon: '🧠', description: 'Neural Networks, CNNs' },
        { name: 'NLP', level: 'Beginner', icon: '💬', description: 'Text Processing, Language Models' },
        { name: 'Data Mining', level: 'Intermediate', icon: '⛏️', description: 'Pattern Discovery, Analytics' }
      ]
    },
    {
      title: 'Professional Skills',
      icon: Users,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Problem Solving', level: 'Advanced', icon: '🧩', description: 'Analytical Thinking, Debugging' },
        { name: 'Team Collaboration', level: 'Advanced', icon: '🤝', description: 'Agile, Cross-functional Teams' },
        { name: 'Technical Communication', level: 'Advanced', icon: '📢', description: 'Documentation, Presentations' },
        { name: 'Project Management', level: 'Intermediate', icon: '📋', description: 'Planning, Execution, Delivery' }
      ]
    }
  ];

  // Tech badge data for visual representation
  const techBadges = [
    { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-blue-500', level: 'Advanced' },
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-500', level: 'Intermediate' },
    { name: 'TensorFlow', icon: '🧠', color: 'from-orange-400 to-red-500', level: 'Intermediate' },
    { name: 'OpenCV', icon: '👁️', color: 'from-green-400 to-teal-500', level: 'Advanced' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-yellow-500', level: 'Beginner' },
    { name: 'Google Cloud', icon: '🌐', color: 'from-blue-500 to-green-500', level: 'Intermediate' },
    { name: 'Git', icon: '🐙', color: 'from-gray-600 to-gray-800', level: 'Advanced' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-800', level: 'Intermediate' }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return darkMode ? 'bg-green-500/20 text-green-300 border-green-400/30' : 'bg-green-100 text-green-700 border-green-200';
      case 'Intermediate':
        return darkMode ? 'bg-blue-500/20 text-blue-300 border-blue-400/30' : 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Beginner':
        return darkMode ? 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30' : 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return darkMode ? 'bg-gray-500/20 text-gray-300 border-gray-400/30' : 'bg-gray-100 text-gray-700 border-gray-200';
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

          {/* Tech Badges Grid */}
          <div className={`mb-16 p-8 rounded-2xl backdrop-blur-lg border ${
            darkMode 
              ? 'bg-slate-700/50 border-slate-600/50' 
              : 'bg-slate-50/70 border-slate-200/50'
          }`}>
            <h3 className={`text-2xl font-bold mb-8 text-center ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Core Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {techBadges.map((tech) => (
                <div
                  key={tech.name}
                  className={`group relative p-4 rounded-xl bg-gradient-to-br ${tech.color} text-white text-center transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer`}
                  title={`${tech.name} - ${tech.level}`}
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="text-xs font-semibold">{tech.name}</div>
                  <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold border ${getLevelColor(tech.level)}`}>
                    {tech.level.charAt(0)}
                  </div>
                  
                  {/* Tooltip */}
                  <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 ${
                    darkMode ? 'bg-slate-800 text-white border border-slate-600' : 'bg-white text-slate-900 border border-slate-200 shadow-lg'
                  }`}>
                    {tech.level} Level
                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                      darkMode ? 'border-t-slate-800' : 'border-t-white'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Skills Categories */}
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
                          <div>
                            <span className={`font-semibold ${
                              darkMode ? 'text-slate-200' : 'text-slate-700'
                            }`}>
                              {skill.name}
                            </span>
                            <div className={`text-xs ${
                              darkMode ? 'text-slate-400' : 'text-slate-500'
                            }`}>
                              {skill.description}
                            </div>
                          </div>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full font-medium border ${getLevelColor(skill.level)}`}>
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className={`p-6 rounded-xl ${
                darkMode ? 'bg-green-500/10' : 'bg-green-50'
              }`}>
                <div className={`text-4xl font-bold mb-2 ${
                  darkMode ? 'text-green-400' : 'text-green-600'
                }`}>
                  14
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

              <div className={`p-6 rounded-xl ${
                darkMode ? 'bg-purple-500/10' : 'bg-purple-50'
              }`}>
                <div className={`text-4xl font-bold mb-2 ${
                  darkMode ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  6
                </div>
                <div className={`text-sm font-medium ${
                  darkMode ? 'text-purple-300' : 'text-purple-700'
                }`}>
                  Skill Categories
                </div>
                <div className={`text-xs mt-1 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Comprehensive coverage
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