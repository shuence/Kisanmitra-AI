import React, { useState, useEffect } from 'react';
import { Menu, X, Sprout, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-primary rounded-lg p-2">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-textPrimary">
                <span className="text-primary">KisanMitra</span> AI
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">Your AI Farming Assistant</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-textPrimary hover:text-primary transition-colors font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('voice-first')}
              className="text-textPrimary hover:text-primary transition-colors font-medium"
            >
              Voice AI
            </button>
            <button 
              onClick={() => scrollToSection('insights')}
              className="text-textPrimary hover:text-primary transition-colors font-medium"
            >
              Market Insights
            </button>
            <button 
              onClick={() => scrollToSection('schemes')}
              className="text-textPrimary hover:text-primary transition-colors font-medium"
            >
              Schemes
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-textPrimary hover:text-primary transition-colors font-medium"
            >
              Stories
            </button>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+918000000000" 
              className="flex items-center gap-2 text-textPrimary hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Support</span>
            </a>
            <button 
              onClick={() => scrollToSection('waitlist')}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Join Waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-textPrimary hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-4 py-2 text-textPrimary hover:text-primary hover:bg-gray-50 transition-colors font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('voice-first')}
                className="block w-full text-left px-4 py-2 text-textPrimary hover:text-primary hover:bg-gray-50 transition-colors font-medium"
              >
                Voice AI
              </button>
              <button 
                onClick={() => scrollToSection('insights')}
                className="block w-full text-left px-4 py-2 text-textPrimary hover:text-primary hover:bg-gray-50 transition-colors font-medium"
              >
                Market Insights
              </button>
              <button 
                onClick={() => scrollToSection('schemes')}
                className="block w-full text-left px-4 py-2 text-textPrimary hover:text-primary hover:bg-gray-50 transition-colors font-medium"
              >
                Schemes
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-4 py-2 text-textPrimary hover:text-primary hover:bg-gray-50 transition-colors font-medium"
              >
                Stories
              </button>
              <div className="px-4 py-2 border-t border-gray-200 mt-2 pt-4">
                <a 
                  href="tel:+918000000000" 
                  className="flex items-center gap-2 text-textPrimary hover:text-primary transition-colors mb-3"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Support</span>
                </a>
                <button 
                  onClick={() => scrollToSection('waitlist')}
                  className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Join Waitlist
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;