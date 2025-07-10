import React from 'react';
import { Mic, Volume2, MessageCircle } from 'lucide-react';

const VoiceFirst: React.FC = () => {
  return (
    <section id="voice-first" className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <Mic className="w-10 h-10 lg:w-12 lg:h-12 text-primary" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary">
                Speak. Listen. Act.
              </h2>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              No more complicated apps. Talk to KisanMitra in Kannada, Hindi, Marathi, or any local language. 
              Get spoken responses that are clear, simple, and actionable.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Mic className="w-10 h-10 lg:w-12 lg:h-12 text-primary mx-auto mb-4" />
                <p className="font-semibold text-textPrimary text-lg mb-2">Speak</p>
                <p className="text-gray-600">In your language</p>
              </div>
              <div className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Volume2 className="w-10 h-10 lg:w-12 lg:h-12 text-accent mx-auto mb-4" />
                <p className="font-semibold text-textPrimary text-lg mb-2">Listen</p>
                <p className="text-gray-600">Clear responses</p>
              </div>
              <div className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <MessageCircle className="w-10 h-10 lg:w-12 lg:h-12 text-links mx-auto mb-4" />
                <p className="font-semibold text-textPrimary text-lg mb-2">Act</p>
                <p className="text-gray-600">Instant solutions</p>
              </div>
            </div>

            {/* Language Support */}
            <div className="bg-white/80 rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-textPrimary mb-4">Supported Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['हिंदी', 'ಕನ್ನಡ', 'मराठी', 'తెలుగు', 'தமிழ்', 'ગુજરાતી', 'ਪੰਜਾਬੀ', 'English'].map((lang, index) => (
                  <span key={index} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-6 lg:p-8 max-w-md mx-auto">
              <div className="bg-gray-100 rounded-xl lg:rounded-2xl p-4 lg:p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600 font-medium">Listening...</span>
                </div>
                <p className="text-textPrimary font-medium text-lg">
                  "मेरे टमाटर की पत्तियाँ पीली हो गई हैं, क्या करूँ?"
                </p>
              </div>
              
              <div className="bg-primary/10 rounded-xl lg:rounded-2xl p-4 lg:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Volume2 className="w-5 h-5 text-primary" />
                  <span className="text-sm text-primary font-semibold">KisanMitra AI</span>
                </div>
                <p className="text-textPrimary leading-relaxed">
                  आपके टमाटर में लेट ब्लाइट रोग है। तुरंत कॉपर फंगीसाइड का छिड़काव करें। मिट्टी की जल निकासी भी चेक करें...
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent/20 rounded-full w-20 h-20 lg:w-24 lg:h-24 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 bg-primary/20 rounded-full w-16 h-16 lg:w-20 lg:h-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceFirst;