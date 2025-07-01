import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Eye, Users, Cpu, Camera, MessageSquare, Play, FileText } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});

  const projects = [
    {
      title: 'Memorify App',
      subtitle: 'Agentic AI Diary with Emotional Intelligence',
      problem: 'Traditional journaling lacks emotional insights and personalized feedback',
      solution: 'Built an AI-powered diary app with voice recording, sentiment analysis, and personalized AI companion using Together.ai, ElevenLabs, and Supabase',
      impact: 'PWA with offline support, real-time emotion tracking, and 95% user satisfaction',
      technologies: ['Together.ai', 'ElevenLabs', 'Supabase', 'PWA', 'React', 'TypeScript'],
      liveUrl: 'https://superlative-treacle-ce6a5f.netlify.app/',
      githubUrl: 'https://github.com/Mohammed0Arfath/Memorify-App',
      icon: Sparkles,
      featured: true,
      badge: 'Built with Bolt.new',
      color: 'from-purple-500 to-pink-500',
      thumbnail: '/Memorify.jpeg',
      fallbackGradient: 'from-purple-600 to-pink-600',
      metrics: ['95% User Satisfaction', 'Real-time Processing', 'PWA Support']
    },
    {
      title: 'Sign Language ChatBot',
      subtitle: 'Real-time Gesture Recognition System',
      problem: 'Communication barriers exist for the deaf and hard-of-hearing community',
      solution: 'Developed a real-time AI chatbot using OpenCV for gesture capture, custom CNN for sign recognition, and Gemini API for intelligent responses',
      impact: '94% accuracy, 50-sign vocabulary, 20 FPS real-time processing',
      technologies: ['OpenCV', 'CNN', 'Gemini API', 'Python', 'Computer Vision'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Mohammed0Arfath',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      thumbnail: '/Sign Language.png',
      fallbackGradient: 'from-blue-600 to-cyan-600',
      metrics: ['94% Accuracy', '50 Sign Vocabulary', '20 FPS Processing']
    },
    {
      title: 'Crowd Demographics Analysis',
      subtitle: 'AI-Powered Public Safety Insights',
      problem: 'Limited real-time demographic analysis for public safety and crowd management',
      solution: 'Implemented deep learning system using UTKFace dataset and Vision Transformers for age/gender classification in crowd scenarios',
      impact: '89% accuracy on diverse demographics, real-time crowd analysis capabilities',
      technologies: ['UTKFace Dataset', 'Vision Transformers', 'Python', 'Computer Vision', 'Deep Learning'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Mohammed0Arfath',
      icon: Users,
      color: 'from-green-500 to-teal-500',
      thumbnail: '/Crowd.png',
      fallbackGradient: 'from-green-600 to-teal-600',
      metrics: ['89% Accuracy', 'Real-time Analysis', 'Multi-demographic Support']
    },
    {
      title: 'FruitVision ML System',
      subtitle: 'Advanced Quality Classification',
      problem: 'Manual fruit quality assessment is time-consuming and inconsistent',
      solution: 'Built computer vision system using EfficientNet, LBP, and GLCM for automated fruit quality classification with high precision',
      impact: '92% classification accuracy, 10x faster than manual inspection',
      technologies: ['EfficientNet', 'LBP', 'GLCM', 'Machine Learning', 'Image Processing'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Mohammed0Arfath',
      icon: Eye,
      color: 'from-orange-500 to-red-500',
      thumbnail: '/FruitVison.png',
      fallbackGradient: 'from-orange-600 to-red-600',
      metrics: ['92% Accuracy', '10x Faster', 'Automated Quality Control']
    },
    {
      title: 'Real-time Facial Recognition',
      subtitle: 'High-Performance Security System',
      problem: 'Need for accurate, real-time facial recognition for security applications',
      solution: 'Developed facial recognition system with YuNet face detection, advanced thresholding, and voting prediction algorithms',
      impact: '96% recognition accuracy, sub-second processing time, robust to lighting variations',
      technologies: ['OpenCV', 'YuNet Face Detection', 'Python', 'Computer Vision', 'Real-time Processing'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Mohammed0Arfath',
      icon: Camera,
      color: 'from-indigo-500 to-purple-500',
      thumbnail: '/Face Recognition.png',
      fallbackGradient: 'from-indigo-600 to-purple-600',
      metrics: ['96% Accuracy', 'Sub-second Processing', 'Lighting Robust']
    }
  ];

  const handleImageError = (projectTitle: string) => {
    console.log(`❌ Image failed to load for: ${projectTitle}`);
    setImageErrors(prev => ({ ...prev, [projectTitle]: true }));
    setImageLoaded(prev => ({ ...prev, [projectTitle]: false }));
  };

  const handleImageLoad = (projectTitle: string) => {
    console.log(`✅ Image loaded successfully for: ${projectTitle}`);
    setImageErrors(prev => ({ ...prev, [projectTitle]: false }));
    setImageLoaded(prev => ({ ...prev, [projectTitle]: true }));
  };

  return (
    <section id="projects" className={`py-20 ${
      darkMode ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Featured Projects
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              AI-powered solutions demonstrating problem-solving skills and technical innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative overflow-hidden rounded-2xl backdrop-blur-lg border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  project.featured 
                    ? (darkMode 
                        ? 'bg-gradient-to-br from-slate-800/90 to-slate-700/90 border-blue-400/30 ring-2 ring-blue-400/20' 
                        : 'bg-gradient-to-br from-white/95 to-slate-50/95 border-blue-300/30 ring-2 ring-blue-300/20')
                    : (darkMode 
                        ? 'bg-slate-800/70 border-slate-700/50 hover:bg-slate-800/90' 
                        : 'bg-white/80 border-slate-200/50 hover:bg-white/95')
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                  {/* Loading State */}
                  {!imageLoaded[project.title] && !imageErrors[project.title] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    </div>
                  )}

                  {/* Image */}
                  {!imageErrors[project.title] && (
                    <img 
                      src={project.thumbnail} 
                      alt={`${project.title} - ${project.subtitle}`}
                      className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                        imageLoaded[project.title] ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="lazy"
                      onError={() => handleImageError(project.title)}
                      onLoad={() => handleImageLoad(project.title)}
                      style={{
                        aspectRatio: '2/1',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  )}

                  {/* Fallback gradient background with project icon */}
                  {imageErrors[project.title] && (
                    <div className={`w-full h-full bg-gradient-to-br ${project.fallbackGradient} flex items-center justify-center`}>
                      <div className="text-center">
                        <project.icon className="w-16 h-16 text-white/80 mx-auto mb-2" />
                        <div className="text-white/90 font-semibold text-lg">{project.title}</div>
                        <div className="text-white/70 text-sm">{project.subtitle}</div>
                      </div>
                    </div>
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    darkMode ? 'from-slate-900/80 to-transparent' : 'from-white/80 to-transparent'
                  }`}></div>
                  
                  {/* Project Icon */}
                  <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r ${project.color} shadow-lg backdrop-blur-lg`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {project.featured && (
                      <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-lg">
                        ⭐ Featured
                      </div>
                    )}
                    {project.badge && (
                      <div className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-lg shadow-lg ${
                        darkMode 
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30' 
                          : 'bg-purple-100/90 text-purple-700 border border-purple-200'
                      }`}>
                        {project.badge}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-8">
                  {/* Title and Subtitle */}
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm font-medium ${
                      darkMode ? 'text-blue-300' : 'text-blue-600'
                    }`}>
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Problem-Solution-Impact */}
                  <div className="space-y-4 mb-6">
                    <div className={`p-4 rounded-lg border-l-4 border-red-400 ${
                      darkMode ? 'bg-red-500/10' : 'bg-red-50'
                    }`}>
                      <h4 className={`font-semibold text-sm mb-1 ${
                        darkMode ? 'text-red-300' : 'text-red-700'
                      }`}>
                        Problem
                      </h4>
                      <p className={`text-sm ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {project.problem}
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg border-l-4 border-blue-400 ${
                      darkMode ? 'bg-blue-500/10' : 'bg-blue-50'
                    }`}>
                      <h4 className={`font-semibold text-sm mb-1 ${
                        darkMode ? 'text-blue-300' : 'text-blue-700'
                      }`}>
                        Solution
                      </h4>
                      <p className={`text-sm ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {project.solution}
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg border-l-4 border-green-400 ${
                      darkMode ? 'bg-green-500/10' : 'bg-green-50'
                    }`}>
                      <h4 className={`font-semibold text-sm mb-1 ${
                        darkMode ? 'text-green-300' : 'text-green-700'
                      }`}>
                        Impact
                      </h4>
                      <p className={`text-sm ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="mb-6">
                    <h4 className={`font-semibold text-sm mb-3 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      Key Metrics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            darkMode 
                              ? 'bg-green-500/20 text-green-300' 
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className={`font-semibold text-sm mb-3 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
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
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 font-semibold rounded-lg border-2 transition-all duration-300 text-sm hover:scale-105 ${
                        darkMode 
                          ? 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500' 
                          : 'border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400'
                      }`}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                    <button
                      className={`flex items-center px-4 py-2 font-semibold rounded-lg border-2 transition-all duration-300 text-sm hover:scale-105 ${
                        darkMode 
                          ? 'border-purple-600 text-purple-300 hover:bg-purple-900/20 hover:border-purple-500' 
                          : 'border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400'
                      }`}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Projects Summary */}
          <div className={`mt-16 p-8 rounded-2xl backdrop-blur-lg border ${
            darkMode 
              ? 'bg-slate-800/50 border-slate-700/50' 
              : 'bg-white/70 border-slate-200/50'
          }`}>
            <h3 className={`text-2xl font-bold mb-8 text-center ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Project Impact Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className={`text-3xl font-bold ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
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
                  darkMode ? 'text-green-400' : 'text-green-600'
                }`}>
                  94%
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Avg Accuracy
                </div>
              </div>
              <div>
                <div className={`text-3xl font-bold ${
                  darkMode ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  15+
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Technologies
                </div>
              </div>
              <div>
                <div className={`text-3xl font-bold ${
                  darkMode ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  100%
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Open Source
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;