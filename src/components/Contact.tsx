import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin, MessageCircle, Calendar, Download } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mohammedarfath02003@gmail.com',
      href: 'mailto:mohammedarfath02003@gmail.com',
      color: 'from-red-500 to-pink-500',
      description: 'Best way to reach me'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8072781649',
      href: 'tel:+918072781649',
      color: 'from-green-500 to-teal-500',
      description: 'Available 9 AM - 6 PM IST'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'mohammed-arfath-r',
      href: 'https://linkedin.com/in/mohammed-arfath-r',
      color: 'from-blue-500 to-cyan-500',
      description: 'Professional network'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Mohammed0Arfath',
      href: 'https://github.com/Mohammed0Arfath',
      color: 'from-gray-600 to-gray-800',
      description: 'Open source projects'
    }
  ];

  const quickActions = [
    {
      title: 'Schedule a Call',
      description: 'Book a 30-minute discussion about opportunities',
      icon: Calendar,
      action: () => {
        const subject = encodeURIComponent('Schedule Call - Portfolio Discussion');
        const body = encodeURIComponent(
          `Hi Mohammed,\n\nI'd like to schedule a call to discuss potential opportunities.\n\nPreferred time slots:\n- \n- \n\nBest regards`
        );
        window.location.href = `mailto:mohammedarfath02003@gmail.com?subject=${subject}&body=${body}`;
      },
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Download Resume',
      description: 'Get my latest resume with detailed experience',
      icon: Download,
      action: () => {
        window.open('https://drive.google.com/file/d/1uwRX6ITcPCIePoae-q9khDSgwukkaTeD/view?usp=sharing', '_blank');
      },
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Try Memorify App',
      description: 'Experience my featured AI project live',
      icon: MessageCircle,
      action: () => {
        window.open('https://superlative-treacle-ce6a5f.netlify.app/', '_blank');
      },
      color: 'from-green-600 to-teal-600'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
      const body = encodeURIComponent(
        `Hi Mohammed,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'Not specified'}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
      );
      const mailtoLink = `mailto:mohammedarfath02003@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Simulate success after a short delay
      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
        setIsSubmitting(false);
        
        // Reset status after 3 seconds
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }, 1000);
      
    } catch (error) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`py-20 ${
      darkMode ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Let's Connect
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Ready to discuss opportunities, collaborations, or just connect about AI and technology
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className={`p-8 rounded-2xl backdrop-blur-lg border mb-8 ${
                darkMode 
                  ? 'bg-slate-800/50 border-slate-700/50' 
                  : 'bg-white/70 border-slate-200/50'
              }`}>
                <div className="flex items-center mb-6">
                  <MapPin className={`w-6 h-6 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  <h3 className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    Contact Information
                  </h3>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`group flex items-start p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                        darkMode 
                          ? 'bg-slate-700/50 hover:bg-slate-700' 
                          : 'bg-slate-50 hover:bg-white'
                      }`}
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.color} mr-4 flex-shrink-0`}>
                        <contact.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className={`text-sm font-medium ${
                          darkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          {contact.label}
                        </div>
                        <div className={`font-semibold group-hover:text-blue-500 transition-colors truncate ${
                          darkMode ? 'text-slate-200' : 'text-slate-700'
                        }`}>
                          {contact.value}
                        </div>
                        <div className={`text-xs mt-1 ${
                          darkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          {contact.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                {quickActions.map((action) => (
                  <button
                    key={action.title}
                    onClick={action.action}
                    className={`w-full p-4 rounded-xl backdrop-blur-lg border transition-all duration-300 hover:scale-105 text-left ${
                      darkMode 
                        ? 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70' 
                        : 'bg-white/70 border-slate-200/50 hover:bg-white/90'
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${action.color} mr-3`}>
                        <action.icon className="w-4 h-4 text-white" />
                      </div>
                      <h4 className={`font-semibold ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {action.title}
                      </h4>
                    </div>
                    <p className={`text-sm ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {action.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className={`p-8 rounded-2xl backdrop-blur-lg border ${
                darkMode 
                  ? 'bg-slate-800/50 border-slate-700/50' 
                  : 'bg-white/70 border-slate-200/50'
              }`}>
                <h3 className={`text-2xl font-semibold mb-6 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          darkMode 
                            ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' 
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                        }`}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          darkMode 
                            ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' 
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                        }`}
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          darkMode 
                            ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' 
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                        }`}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          darkMode 
                            ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' 
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                        }`}
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                        darkMode 
                          ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                      }`}
                      placeholder="Tell me about your project, opportunity, or just say hello! I'm particularly interested in AI/ML roles, internships, and collaborative projects."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-4 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : submitStatus === 'success'
                        ? 'bg-green-600 hover:bg-green-700'
                        : submitStatus === 'error'
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message Sent!
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        <X className="w-5 h-5 mr-2" />
                        Try Again
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className={`p-4 rounded-lg ${
                      darkMode ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700'
                    }`}>
                      Thank you for your message! I'll get back to you within 24 hours.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Response Time Promise */}
          <div className={`mt-16 p-8 rounded-2xl backdrop-blur-lg border text-center ${
            darkMode 
              ? 'bg-slate-800/50 border-slate-700/50' 
              : 'bg-white/70 border-slate-200/50'
          }`}>
            <h3 className={`text-xl font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Response Commitment
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className={`text-2xl font-bold ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  &lt; 24 hrs
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Email Response Time
                </div>
              </div>
              <div>
                <div className={`text-2xl font-bold ${
                  darkMode ? 'text-green-400' : 'text-green-600'
                }`}>
                  9 AM - 6 PM
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Available Hours (IST)
                </div>
              </div>
              <div>
                <div className={`text-2xl font-bold ${
                  darkMode ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  Open
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  To Opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;