
import React from 'react';
import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: 'https://twitter.com',
      color: 'hover:text-blue-300'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:hello@portfolio.com',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Ready to collaborate on something amazing? Let's discuss your next project 
            and bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all text-sm sm:text-base"
                  placeholder="Project collaboration"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg sm:rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-blue-500/20 text-blue-400">
                    <Mail size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs sm:text-sm">Email</p>
                    <p className="text-white font-medium text-sm sm:text-base">hello@portfolio.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-green-500/20 text-green-400">
                    <Phone size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs sm:text-sm">Phone</p>
                    <p className="text-white font-medium text-sm sm:text-base">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-purple-500/20 text-purple-400">
                    <MapPin size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs sm:text-sm">Location</p>
                    <p className="text-white font-medium text-sm sm:text-base">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Follow Me</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/20 text-gray-300 ${link.color} transition-all duration-300 hover:bg-white/10 hover:scale-105`}
                  >
                    <link.icon size={18} className="sm:w-5 sm:h-5" />
                    <span className="font-medium text-sm sm:text-base">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg border border-green-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-4 animate-pulse shadow-lg shadow-green-400/50"></div>
              <p className="text-white font-semibold mb-2 text-sm sm:text-base">Available for New Projects</p>
              <p className="text-gray-300 text-xs sm:text-sm">Currently accepting freelance and full-time opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;