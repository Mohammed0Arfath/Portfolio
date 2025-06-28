import React from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mohammedarfath02003@gmail.com',
      href: 'mailto:mohammedarfath02003@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8072781649',
      href: 'tel:+918072781649',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'mohammed-arfath-r',
      href: 'https://linkedin.com/in/mohammed-arfath-r',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Mohammed0Arfath',
      href: 'https://github.com/Mohammed0Arfath',
      color: 'from-gray-600 to-gray-800'
    }
  ];

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Hi Mohammed,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    const mailtoLink = `mailto:mohammedarfath02003@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent('Portfolio Contact - Opportunity Discussion');
    const body = encodeURIComponent(
      `Hi Mohammed,\n\nI came across your portfolio and would like to discuss potential opportunities.\n\nBest regards`
    );
    const mailtoLink = `mailto:mohammedarfath02003@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className={`py-12 sm:py-20 ${
      darkMode ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Get In Touch
            </h2>
            <p className={`text-base sm:text-lg ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Let's discuss opportunities, collaborations, or just connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12">
            {/* Contact Information */}
            <div className="w-full">
              <div className={`p-4 sm:p-8 rounded-2xl backdrop-blur-lg border mb-6 sm:mb-8 ${
                darkMode 
                  ? 'bg-slate-800/50 border-slate-700/50' 
                  : 'bg-white/70 border-slate-200/50'
              }`}>
                <div className="flex items-center mb-4 sm:mb-6">
                  <MapPin className={`w-5 h-5 sm:w-6 sm:h-6 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  <h3 className={`text-lg sm:text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    Contact Information
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {contactInfo.map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`group flex items-center p-3 sm:p-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                        darkMode 
                          ? 'bg-slate-700/50 hover:bg-slate-700' 
                          : 'bg-slate-50 hover:bg-white'
                      }`}
                    >
                      <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${contact.color} mr-3 sm:mr-4 flex-shrink-0`}>
                        <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className={`text-xs sm:text-sm font-medium ${
                          darkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          {contact.label}
                        </div>
                        <div className={`font-semibold group-hover:text-blue-500 transition-colors text-sm sm:text-base truncate ${
                          darkMode ? 'text-slate-200' : 'text-slate-700'
                        }`}>
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3 sm:space-y-4">
                <button 
                  onClick={handleSendEmail}
                  className="w-full flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Send Email
                </button>
                
                <a
                  href="https://superlative-treacle-ce6a5f.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 font-semibold rounded-lg border-2 transition-all duration-300 hover:scale-105 text-sm sm:text-base ${
                    darkMode 
                      ? 'border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500' 
                      : 'border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400'
                  }`}
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Try Memorify App
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`p-4 sm:p-8 rounded-2xl backdrop-blur-lg border w-full ${
              darkMode 
                ? 'bg-slate-800/50 border-slate-700/50' 
                : 'bg-white/70 border-slate-200/50'
            }`}>
              <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                        darkMode 
                          ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                      }`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                        darkMode 
                          ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                      darkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                    }`}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base ${
                      darkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                    }`}
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;