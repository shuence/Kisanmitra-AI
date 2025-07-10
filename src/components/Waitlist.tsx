import React, { useState } from 'react';
import { Rocket, Mail, Phone, MapPin, Wheat, CheckCircle } from 'lucide-react';

const Waitlist: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    language: '',
    district: '',
    cropType: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        language: '',
        district: '',
        cropType: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="waitlist" className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Rocket className="w-10 h-10 lg:w-12 lg:h-12 text-primary" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary">
                Early Access for Farmers & Supporters
              </h2>
            </div>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Be among the first to experience the future of farming with AI assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-10 shadow-xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-textPrimary mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-lg"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-textPrimary mb-3">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-lg"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="language" className="block text-sm font-semibold text-textPrimary mb-3">
                      Preferred Language *
                    </label>
                    <select
                      id="language"
                      name="language"
                      required
                      value={formData.language}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-lg"
                    >
                      <option value="">Select your language</option>
                      <option value="hindi">Hindi (हिंदी)</option>
                      <option value="kannada">Kannada (ಕನ್ನಡ)</option>
                      <option value="marathi">Marathi (मराठी)</option>
                      <option value="telugu">Telugu (తెలుగు)</option>
                      <option value="tamil">Tamil (தமிழ்)</option>
                      <option value="gujarati">Gujarati (ગુજરાતી)</option>
                      <option value="punjabi">Punjabi (ਪੰਜਾਬੀ)</option>
                      <option value="english">English</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="district" className="block text-sm font-semibold text-textPrimary mb-3">
                      District *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="district"
                        name="district"
                        required
                        value={formData.district}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-lg"
                        placeholder="Enter your district"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="cropType" className="block text-sm font-semibold text-textPrimary mb-3">
                      Primary Crop Type *
                    </label>
                    <div className="relative">
                      <Wheat className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="cropType"
                        name="cropType"
                        required
                        value={formData.cropType}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-lg"
                        placeholder="e.g., Rice, Wheat, Cotton, Sugarcane"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-4 lg:py-5 px-6 rounded-xl font-semibold text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    <Mail className="w-5 h-5" />
                    Join Waitlist
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-textPrimary mb-4">Thank You!</h3>
                  <p className="text-gray-600 text-lg">
                    You've been added to our waitlist. We'll contact you soon with early access details.
                  </p>
                </div>
              )}
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg">
                <h3 className="text-xl lg:text-2xl font-bold text-textPrimary mb-6">What You'll Get</h3>
                <ul className="space-y-4">
                  {[
                    "Early access to KisanMitra AI",
                    "Free premium features for 6 months",
                    "Personalized onboarding support",
                    "Direct feedback channel to our team"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl lg:rounded-3xl p-6 lg:p-8">
                <h4 className="text-2xl lg:text-3xl font-bold text-textPrimary mb-4">Join 100+ Farmers</h4>
                <p className="text-gray-600 mb-6 text-lg">Already showing interest in our concept</p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-gray-600">Karnataka</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">30+</div>
                    <div className="text-sm text-gray-600">Maharashtra</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">20+</div>
                    <div className="text-sm text-gray-600">Others</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;