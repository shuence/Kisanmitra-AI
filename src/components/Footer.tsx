import React from 'react';
import { Heart, Github, ExternalLink, Twitter, Sprout, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-textPrimary text-white py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary rounded-lg p-2">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold">
                <span className="text-primary">KisanMitra</span> AI
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-lg">
              Empowering farmers with AI-powered assistance for better crops, better prices, and better lives.
            </p>
            <div className="flex items-center gap-2 text-gray-300 mb-6">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for Google Cloud Agentic AI Day 2025</span>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-primary" />
                <span>team@kisanmitra-ai.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 80000 12345</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg lg:text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-300 hover:text-primary transition-colors text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('voice-first')}
                  className="text-gray-300 hover:text-primary transition-colors text-left"
                >
                  Voice AI
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('insights')}
                  className="text-gray-300 hover:text-primary transition-colors text-left"
                >
                  Market Insights
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('schemes')}
                  className="text-gray-300 hover:text-primary transition-colors text-left"
                >
                  Government Schemes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-primary transition-colors text-left"
                >
                  Success Stories
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg lg:text-xl font-semibold mb-6">Connect & Support</h4>
            <div className="space-y-4">
              <a 
                href="https://github.com/kisanmitra-ai/kisanmitra-app" 
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                GitHub Repository
              </a>
              <a 
                href="https://devpost.com/software/kisanmitra-ai" 
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Hackathon Submission
              </a>
              <a 
                href="https://twitter.com/KisanMitraAI" 
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Follow on X
              </a>
            </div>
            
            <div className="mt-8">
              <h5 className="text-sm font-semibold text-gray-400 mb-3">LEGAL</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#privacy" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="text-gray-300 hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="text-center lg:text-left">
              <p className="text-gray-300 text-lg">
                © 2025 KisanMitra AI. All rights reserved.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-gray-300 text-lg">
                Powered by <span className="text-accent font-semibold">Google Cloud AI</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;