import React from 'react';
import { Mic, Play, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center pt-20">
      <div className="absolute inset-0 bg-hero-pattern"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-textPrimary leading-tight">
                  <span className="text-primary">{t('heroTitleStyled')}</span> AI
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 font-medium italic">
                  {t('heroTagline')}
                </p>
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-medium leading-relaxed">
                {t('heroSubtitle')}
              </p>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                {t('heroDescription')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
              <button 
                onClick={scrollToDemo}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-semibold text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Play className="w-5 h-5 lg:w-6 lg:h-6" />
                {t('tryDemo')}
              </button>
              <button 
                onClick={scrollToWaitlist}
                className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-semibold text-lg lg:text-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5 lg:w-6 lg:h-6" />
                {t('joinWaitlist')}
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>100+ {t('farmersInterested')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>{t('googleCloudPowered')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-links rounded-full"></div>
                <span>{t('builtForIndianFarmers')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>{t('hackathonWinner')}</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-6 lg:p-8 transform rotate-2 hover:rotate-1 transition-transform duration-500 max-w-md mx-auto">
              <div className="bg-gradient-to-br from-primary to-accent rounded-xl lg:rounded-2xl p-4 lg:p-6 mb-6">
                <Mic className="w-8 h-8 lg:w-12 lg:h-12 text-white mx-auto animate-pulse" />
              </div>
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg lg:rounded-xl p-3 lg:p-4">
                  <p className="text-sm lg:text-base text-gray-600 font-medium">
                    "मेरे टमाटर की पत्तियाँ पीली हो गई हैं, क्या करूँ?"
                  </p>
                </div>
                <div className="bg-primary/10 rounded-lg lg:rounded-xl p-3 lg:p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-xs text-primary font-semibold">KisanMitra AI</span>
                  </div>
                  <p className="text-sm lg:text-base text-textPrimary leading-relaxed">
                    Tomato blight detected. Apply copper fungicide immediately. Check soil drainage...
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-4 lg:top-6 right-4 lg:right-6 bg-accent/20 rounded-2xl lg:rounded-3xl w-full h-full"></div>
            <div className="absolute -z-20 top-8 lg:top-12 right-8 lg:right-12 bg-primary/10 rounded-2xl lg:rounded-3xl w-full h-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;