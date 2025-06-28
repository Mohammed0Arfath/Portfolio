import React from 'react';
import { ExternalLink, Github, Sparkles, Eye, Users, Cpu, Camera, MessageSquare } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: 'Memorify App',
      description: 'Agentic AI diary app with emotional journaling and AI companion. Features voice recording, sentiment analysis, and personalized insights.',
      technologies: ['Together.ai', 'ElevenLabs', 'Supabase', 'PWA', 'React'],
      link: 'https://superlative-treacle-ce6a5f.netlify.app/',
      github: 'https://github.com/Mohammed0Arfath/Memorify-App',
      icon: Sparkles,
      featured: true,
      badge: 'Built with Bolt.new',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Sign Language ChatBot',
      description: 'Revolutionary chatbot that converts sign language gestures into conversations using computer vision and AI.',
      technologies: ['OpenCV', 'KNN', 'Gemini API', 'Python'],
      link: '#',
      github: 'https://github.com/Mohammed0Arfath',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Crowd Demographics Analysis',
      description: 'Public safety insights through age and gender analysis of crowd demographics using deep learning.',
      technologies: ['UTKFace Dataset', 'MLP', 'Python', 'Computer Vision'],
      link: '#',
      github: 'https://github.com/Mohammed0Arfath',
      icon: Users,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'FruitVision ML System',
      description: 'Advanced fruit quality classification system using state-of-the-art computer vision techniques.',
      technologies: ['EfficientNet', 'LBP', 'GLCM', 'Machine Learning'],
      link: '#',
      github: 'https://github.com/Mohammed0Arfath',
      icon: Eye,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Real-time Facial Recognition',
      description: 'High-performance facial recognition system with advanced thresholding and voting prediction algorithms.',
      technologies: ['OpenCV', 'Python', 'Computer Vision', 'Real-time Processing'],
      link: '#',
      github: 'https://github.com/Mohammed0Arfath',
      icon: Camera,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="projects" className={`py-20 ${
      darkMode ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Featured Projects
            </h2>
            <p className={`text-lg ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              AI-powered solutions that showcase innovation and technical expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  project.featured 
                    ? (darkMode 
                        ? 'bg-gradient-to-br from-slate-800/80 to-slate-700/80 border-blue-400/30 ring-2 ring-blue-400/20' 
                        : 'bg-gradient-to-br from-white/90 to-slate-50/90 border-blue-300/30 ring-2 ring-blue-300/20')
                    : (darkMode 
                        ? 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70' 
                        : 'bg-white/70 border-slate-200/50 hover:bg-white/90')
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {project.featured && (
                  <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full">
                    Featured
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} mr-4`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {project.title}
                      </h3>
                      {project.badge && (
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-1 ${
                          darkMode 
                            ? 'bg-blue-500/20 text-blue-300' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {project.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className={`mb-6 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode 
                          ? 'bg-slate-700 text-slate-300' 
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 py-2 font-semibold rounded-lg border-2 transition-all duration-300 text-sm ${
                      darkMode 
                        ? 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500' 
                        : 'border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400'
                    }`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;