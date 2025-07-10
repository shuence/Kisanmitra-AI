import React from 'react';
import { FileText, CheckCircle, IndianRupee, ArrowRight } from 'lucide-react';

const SchemeNavigator: React.FC = () => {
  const schemes = [
    {
      name: "PM-KISAN",
      amount: "₹6,000/year",
      status: "Eligible",
      description: "Direct income support to farmers",
      statusColor: "primary"
    },
    {
      name: "Crop Insurance",
      amount: "Up to ₹2L",
      status: "Apply Now",
      description: "Protect your crops from natural disasters",
      statusColor: "accent"
    },
    {
      name: "Soil Health Card",
      amount: "Free",
      status: "Available",
      description: "Get detailed soil analysis for better yield",
      statusColor: "links"
    }
  ];

  return (
    <section id="schemes" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <FileText className="w-10 h-10 lg:w-12 lg:h-12 text-primary" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary">
              Make Government Schemes Simple
            </h2>
          </div>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Find the right subsidies, eligibility, and application links in your language. No jargon. No confusion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {schemes.map((scheme, index) => (
            <div key={index} className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-textPrimary mb-2">{scheme.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{scheme.description}</p>
                </div>
                <div className="bg-primary/10 rounded-xl p-3 ml-4">
                  <IndianRupee className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl lg:text-3xl font-bold text-primary">{scheme.amount}</span>
                <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  scheme.statusColor === 'primary' 
                    ? 'bg-primary/10 text-primary' 
                    : scheme.statusColor === 'accent'
                    ? 'bg-accent/10 text-accent'
                    : 'bg-links/10 text-links'
                }`}>
                  {scheme.status}
                </div>
              </div>
              
              <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 lg:py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-lg transform hover:scale-105">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-12 shadow-xl max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-textPrimary">
                Simplified Application Process
              </h3>
              <div className="space-y-6">
                {[
                  "Check eligibility in seconds",
                  "Get step-by-step guidance",
                  "Direct links to application portals",
                  "Track application status"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-primary rounded-full p-2 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl lg:rounded-3xl p-8 lg:p-10">
              <div className="text-center">
                <FileText className="w-16 h-16 lg:w-20 lg:h-20 text-primary mx-auto mb-6" />
                <h4 className="text-xl lg:text-2xl font-semibold text-textPrimary mb-4">
                  Available in Your Language
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  All schemes explained in Hindi, Kannada, Marathi, and more local languages
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {['हिंदी', 'ಕನ್ನಡ', 'मराठी', 'తెలుగు'].map((lang, index) => (
                    <span key={index} className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-textPrimary shadow-md">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchemeNavigator;