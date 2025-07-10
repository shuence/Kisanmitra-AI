import React from 'react';
import { Zap, Cloud, Shield, Cpu } from 'lucide-react';

const Technology: React.FC = () => {
  const technologies = [
    { name: "Gemini AI", logo: "🤖", description: "Advanced conversational AI for natural language understanding" },
    { name: "Vertex AI Vision", logo: "👁️", description: "Image recognition for crop disease detection" },
    { name: "Speech APIs", logo: "🎙️", description: "Voice-first interaction in local languages" },
    { name: "Firebase", logo: "🔥", description: "Real-time database and serverless functions" },
    { name: "Forecasting AI", logo: "📊", description: "Market price prediction and trend analysis" },
    { name: "Flutter", logo: "📱", description: "Cross-platform mobile development" },
    { name: "Agmarknet", logo: "🏪", description: "Official government mandi price data" },
    { name: "Cloud Functions", logo: "⚡", description: "Serverless backend processing" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-textPrimary to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Zap className="w-10 h-10 lg:w-12 lg:h-12 text-accent" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Built on Cutting-Edge Technology
            </h2>
          </div>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Using Google's advanced AI, KisanMitra delivers intelligence, speed, and reliability—even in remote regions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {technologies.map((tech, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 rounded-2xl p-4 lg:p-6 mb-4 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-3xl lg:text-4xl mb-3">{tech.logo}</div>
                <h3 className="font-semibold text-base lg:text-lg mb-2">{tech.name}</h3>
                <p className="text-xs lg:text-sm text-gray-300 leading-tight">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center space-y-6">
            <div className="bg-primary/20 rounded-full w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center mx-auto">
              <Cpu className="w-10 h-10 lg:w-12 lg:h-12 text-primary" />
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold">Advanced AI Processing</h3>
            <p className="text-gray-300 leading-relaxed">
              Powered by Google's Gemini AI for accurate crop diagnosis and intelligent recommendations
            </p>
          </div>
          
          <div className="text-center space-y-6">
            <div className="bg-links/20 rounded-full w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center mx-auto">
              <Cloud className="w-10 h-10 lg:w-12 lg:h-12 text-links" />
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold">Cloud-Scale Reliability</h3>
            <p className="text-gray-300 leading-relaxed">
              Built on Google Cloud infrastructure for 99.9% uptime and global accessibility
            </p>
          </div>
          
          <div className="text-center space-y-6">
            <div className="bg-accent/20 rounded-full w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center mx-auto">
              <Shield className="w-10 h-10 lg:w-12 lg:h-12 text-accent" />
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold">Secure & Private</h3>
            <p className="text-gray-300 leading-relaxed">
              Enterprise-grade security with data encryption and privacy protection for farmers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;