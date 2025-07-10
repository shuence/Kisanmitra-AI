import React from 'react';
import { 
  Stethoscope, 
  TrendingUp, 
  Building2, 
  Mic, 
  MapPin, 
  Calendar,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: Stethoscope,
      title: t('cropDetectionTitle'),
      description: t('cropDetectionDesc')
    },
    {
      icon: TrendingUp,
      title: t('marketPricesTitle'),
      description: t('marketPricesDesc')
    },
    {
      icon: Building2,
      title: t('govSchemesTitle'),
      description: t('govSchemesDesc')
    },
    {
      icon: Mic,
      title: t('voiceUITitle'),
      description: t('voiceUIDesc')
    },
    {
      icon: MapPin,
      title: t('expertNetworkTitle'),
      description: t('expertNetworkDesc')
    },
    {
      icon: Calendar,
      title: t('weatherInsightsTitle'),
      description: t('weatherInsightsDesc')
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-6">
            {t('featuresTitle')}
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('featuresSubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-feature-gradient rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="bg-primary/10 group-hover:bg-primary/20 rounded-xl w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center mb-6 transition-colors duration-300">
                <feature.icon className="w-7 h-7 lg:w-8 lg:h-8 text-primary" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-textPrimary mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 mx-auto hover:shadow-lg transform hover:scale-105">
            {t('seeFullFeatureList')}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;