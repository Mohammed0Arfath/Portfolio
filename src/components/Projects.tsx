import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Eye, Users, Cpu, Camera, MessageSquare, Play, FileText, Award, Zap, Target } from 'lucide-react';

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
      problem: 'Traditional journaling lacks emotional insights and personalized feedback, making it difficult for users to track mental health patterns and receive meaningful guidance.',
      solution: 'Built an AI-powered diary app with voice recording, sentiment analysis, and personalized AI companion using Together.ai for LLM processing, ElevenLabs for voice synthesis, and Supabase for real-time data management.',
      impact: 'Achieved 95% user satisfaction with PWA offline support, real-time emotion tracking, and personalized AI responses that help users understand their emotional patterns.',
      technologies: ['Together.ai', 'ElevenLabs', 'Supabase', 'PWA', 'React', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://superlative-treacle-ce6a5f.netlify.app/',
      githubUrl: 'https://github.com/Mohammed0Arfath/Memorify-App',
      docsUrl: 'https://drive.google.com/file/d/1xn0_ahtkpnWDc17zI-t__jneOCEhtQqI/view?usp=sharing',
      icon: Sparkles,
      featured: true,
      badge: 'Built with Bolt.new',
      color: 'from-purple-500 to-pink-500',
      thumbnail: '/Memorify_rs.jpg',
      fallbackGradient: 'from-purple-600 to-pink-600',
      metrics: ['95% User Satisfaction', 'Real-time Processing', 'PWA Support', '24/7 AI Companion'],
      techStack: ['React', 'TypeScript', 'Supabase', 'AI/ML']
    },
    {
      title: 'Sign Language ChatBot',
      subtitle: 'Real-time Gesture Recognition System',
      problem: 'Communication barriers exist for the deaf and hard-of-hearing community, limiting their ability to interact with digital systems and access real-time assistance.',
      solution: 'Developed a real-time AI chatbot using OpenCV for gesture capture, custom CNN for sign recognition trained on ASL datasets, and Gemini API for intelligent conversational responses.',
      impact: 'Achieved 94% accuracy across 50-sign vocabulary with 20 FPS real-time processing, enabling seamless communication for deaf users.',
      technologies: ['OpenCV', 'CNN', 'Gemini API', 'Python', 'Computer Vision', 'TensorFlow', 'MediaPipe'],
      liveUrl: '#',
      githubUrl: 'https://colab.research.google.com/drive/1yp6shGA5GAqfUykisbJF9D8rsg-XsQZk?usp=sharing',
      docsUrl: 'https://drive.google.com/file/d/1kZL5qtAMu8zNBPN7g6OCOMTXEbmbrDor/view?usp=sharing',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      thumbnail: '/Sign Language.png',
      fallbackGradient: 'from-blue-600 to-cyan-600',
      metrics: ['94% Accuracy', '50 Sign Vocabulary', '20 FPS Processing', 'Real-time Translation'],
      techStack: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision']
    },
    {
      title: 'Crowd Demographics Analysis',
      subtitle: 'AI-Powered Public Safety Insights',
      problem: 'Limited real-time demographic analysis capabilities for public safety, crowd management, and security applications in high-traffic areas.',
      solution: 'Implemented deep learning system using UTKFace dataset and Vision Transformers for accurate age/gender classification in crowd scenarios with real-time processing capabilities.',
      impact: 'Achieved 89% accuracy on diverse demographics with real-time crowd analysis, enabling better resource allocation and safety management.',
      technologies: ['UTKFace Dataset', 'Vision Transformers', 'Python', 'Computer Vision', 'Deep Learning', 'PyTorch'],
      liveUrl: '#',
      githubUrl: 'https://colab.research.google.com/drive/1gems3ffsOroOuZ5mFdxzKi4eYwF5bDY4?usp=sharing',
      docsUrl: 'https://drive.google.com/file/d/1konMNtpN6-lG8YbTaNjmsO34Ta4LqHY1/view?usp=sharing',
      icon: Users,
      color: 'from-green-500 to-teal-500',
      thumbnail: '/Crowd.png',
      fallbackGradient: 'from-green-600 to-teal-600',
      metrics: ['89% Accuracy', 'Real-time Analysis', 'Multi-demographic Support', 'Scalable Architecture'],
      techStack: ['Python', 'PyTorch', 'Computer Vision', 'Deep Learning']
    },
    {
      title: 'FruitVision ML System',
      subtitle: 'Advanced Quality Classification',
      problem: 'Manual fruit quality assessment in agriculture and retail is time-consuming, inconsistent, and prone to human error, leading to economic losses.',
      solution: 'Built computer vision system using EfficientNet architecture, Local Binary Patterns (LBP), and Gray-Level Co-occurrence Matrix (GLCM) for automated fruit quality classification.',
      impact: 'Achieved 92% classification accuracy with 10x faster processing than manual inspection, reducing quality control costs significantly.',
      technologies: ['EfficientNet', 'LBP', 'GLCM', 'Machine Learning', 'Image Processing', 'Scikit-learn'],
      liveUrl: '#',
      githubUrl: 'https://colab.research.google.com/drive/1ofMCPDc8hs8FOoIL1UDX8wXzswsWCB32?usp=sharing',
      docsUrl: 'https://drive.google.com/file/d/1DvsfsQ2OnpL5P7094SfVYwjaMrKVFdrK/view?usp=sharing',
      icon: Eye,
      color: 'from-orange-500 to-red-500',
      thumbnail: '/FruitVison.png',
      fallbackGradient: 'from-orange-600 to-red-600',
      metrics: ['92% Accuracy', '10x Faster Processing', 'Automated QC', 'Cost Reduction'],
      techStack: ['Python', 'Machine Learning', 'Computer Vision', 'Scikit-learn']
    },
    {
      title: 'Real-time Facial Recognition',
      subtitle: 'High-Performance Security System',
      problem: 'Need for accurate, real-time facial recognition for security applications that can handle varying lighting conditions and multiple faces simultaneously.',
      solution: 'Developed facial recognition system with YuNet face detection, advanced thresholding algorithms, and voting prediction mechanisms for robust identification.',
      impact: 'Achieved 96% recognition accuracy with sub-second processing time, robust performance across different lighting conditions and angles.',
      technologies: ['OpenCV', 'YuNet Face Detection', 'Python', 'Computer Vision', 'Real-time Processing', 'NumPy'],
      liveUrl: '#',
      githubUrl: 'https://colab.research.google.com/drive/1yp6shGA5GAqfUykisbJF9D8rsg-XsQZk?usp=sharing',
      docsUrl: 'https://drive.google.com/file/d/1x4QtproMytVBejcZy08rsektDisGqfpq/view?usp=sharing',
      icon: Camera,
      color: 'from-indigo-500 to-purple-500',
      thumbnail: '/Face Recognition.png',
      fallbackGradient: 'from-indigo-600 to-purple-600',
      metrics: ['96% Accuracy', 'Sub-second Processing', 'Lighting Robust', 'Multi-face Detection'],
      techStack: ['Python', 'OpenCV', 'Computer Vision', 'Real-time Processing']
    }
  ];

  const handleImageError = (projectTitle: string) => {
    setImageErrors(prev => ({ ...prev, [projectTitle]: true }));
    setImageLoaded(prev => ({ ...prev, [projectTitle]: false }));
    console.log(`❌ Image failed to load for: ${projectTitle}`);
  };

  const handleImageLoad = (projectTitle: string) => {
    setImageErrors(prev => ({ ...prev, [projectTitle]: false }));
    setImageLoaded(prev => ({ ...prev, [projectTitle]: true }));
    console.log(`✅ Image loaded successfully for: ${projectTitle}`);
  };

  const getTechBadgeColor = (tech: string) => {
    const techColors: Record<string, string> = {
      'React': 'from-blue-400 to-blue-600',
      'TypeScript': 'from-blue-500 to-blue-700',
      'Python': 'from-yellow-400 to-yellow-600',
      'OpenCV': 'from-green-400 to-green-600',
      'TensorFlow': 'from-orange-400 to-orange-600',
      'PyTorch': 'from-red-400 to-red-600',
      'Computer Vision': 'from-purple-400 to-purple-600',
      'AI/ML': 'from-pink-400 to-pink-600',
      'Supabase': 'from-emerald-400 to-emerald-600',
      'Machine Learning': 'from-indigo-400 to-indigo-600',
      'Deep Learning': 'from-violet-400 to-violet-600',
      'Real-time Processing': 'from-cyan-400 to-cyan-600',
      'Scikit-learn': 'from-amber-400 to-amber-600'
    };
    return techColors[tech] || 'from-gray-400 to-gray-600';
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
                className={`group relative overflow-hidden rounded-2xl backdrop-blur-lg border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
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
                {/* Project Thumbnail Container - 2:1 Aspect Ratio */}
                <div className="relative w-full aspect-[2/1] overflow-hidden">
                  {/* Always show fallback gradient background */}
                  <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${project.fallbackGradient} flex items-center justify-center`}>
                    <div className="text-center">
                      <project.icon className="w-16 h-16 text-white/80 mx-auto mb-2" />
                      <div className="text-white/90 font-semibold text-lg">{project.title}</div>
                      <div className="text-white/70 text-sm">{project.subtitle}</div>
                    </div>
                  </div>

                  {/* Try to load actual image on top */}
                  {!imageErrors[project.title] && (
                    <>
                      {/* Loading State */}
                      {!imageLoaded[project.title] && (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-700 z-10">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                        </div>
                      )}

                      {/* Actual Image */}
                      <img 
                        src={project.thumbnail} 
                        alt={`${project.title} - ${project.subtitle}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 z-20 ${
                          imageLoaded[project.title] ? 'opacity-100' : 'opacity-0'
                        }`}
                        loading="lazy"
                        onError={() => handleImageError(project.title)}
                        onLoad={() => handleImageLoad(project.title)}
                      />
                    </>
                  )}
                  
                  {/* Gradient Overlay for text readability */}
                  <div className={`absolute inset-0 bg-gradient-to-t z-30 ${
                    darkMode ? 'from-slate-900/80 to-transparent' : 'from-white/80 to-transparent'
                  }`}></div>
                  
                  {/* Project Icon */}
                  <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r ${project.color} shadow-lg backdrop-blur-lg z-40`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 z-40">
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
                      <h4 className={`font-semibold text-sm mb-2 flex items-center ${
                        darkMode ? 'text-red-300' : 'text-red-700'
                      }`}>
                        <Target className="w-4 h-4 mr-2" />
                        Problem
                      </h4>
                      <p className={`text-sm leading-relaxed ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {project.problem}
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg border-l-4 border-blue-400 ${
                      darkMode ? 'bg-blue-500/10' : 'bg-blue-50'
                    }`}>
                      <h4 className={`font-semibold text-sm mb-2 flex items-center ${
                        darkMode ? 'text-blue-300' : 'text-blue-700'
                      }`}>
                        <Zap className="w-4 h-4 mr-2" />
                        Solution
                      </h4>
                      <p className={`text-sm leading-relaxed ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {project.solution}
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg border-l-4 border-green-400 ${
                      darkMode ? 'bg-green-500/10' : 'bg-green-50'
                    }`}>
                      <h4 className={`font-semibold text-sm mb-2 flex items-center ${
                        darkMode ? 'text-green-300' : 'text-green-700'
                      }`}>
                        <Award className="w-4 h-4 mr-2" />
                        Impact
                      </h4>
                      <p className={`text-sm leading-relaxed ${
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
                    <div className="grid grid-cols-2 gap-2">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className={`px-3 py-2 rounded-lg text-xs font-medium text-center ${
                            darkMode 
                              ? 'bg-green-500/20 text-green-300 border border-green-400/30' 
                              : 'bg-green-100 text-green-700 border border-green-200'
                          }`}
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="mb-6">
                    <h4 className={`font-semibold text-sm mb-3 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTechBadgeColor(tech)} text-white shadow-lg hover:scale-105 transition-transform`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
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
                              ? 'bg-slate-700 text-slate-300 border border-slate-600' 
                              : 'bg-slate-100 text-slate-700 border border-slate-200'
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
                    <a
                      href={project.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 font-semibold rounded-lg border-2 transition-all duration-300 text-sm hover:scale-105 ${
                        darkMode 
                          ? 'border-purple-600 text-purple-300 hover:bg-purple-900/20 hover:border-purple-500' 
                          : 'border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400'
                      }`}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Documentation
                    </a>
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