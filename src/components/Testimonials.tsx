import React from 'react';
import { MessageCircle, Star, User } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Rohan Patil",
      location: "Sangli, Maharashtra",
      quote: "Saved my crop from early pest detection, earning ₹35,000 extra this season!",
      crop: "Sugarcane Farmer",
      rating: 5,
      details: "The AI detected white fly infestation in my sugarcane crop 2 weeks before I could see any symptoms. Early treatment with recommended pesticides saved my entire 5-acre harvest."
    },
    {
      name: "Sita Devi",
      location: "Nashik, Maharashtra",
      quote: "Now I understand which subsidy I can apply for - got ₹50,000 PM-KISAN support!",
      crop: "Tomato Farmer",
      rating: 5,
      details: "KisanMitra explained government schemes in simple language and helped me apply for multiple subsidies. The voice feature in Marathi made everything so easy to understand."
    },
    {
      name: "Krishnamurthy",
      location: "Mysore, Karnataka",
      quote: "Voice commands in Kannada made technology accessible for the first time.",
      crop: "Rice Farmer",
      rating: 5,
      details: "Speaking in my native Kannada and getting instant responses about market prices has transformed how I manage my 3-acre rice fields. No more trips to the mandi for price checks!"
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <MessageCircle className="w-10 h-10 lg:w-12 lg:h-12 text-primary" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary">
              What Farmers Are Saying
            </h2>
          </div>
          <p className="text-xl lg:text-2xl text-gray-600">
            Real stories from farmers across India
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg lg:text-xl text-textPrimary mb-4 font-semibold italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {testimonial.details}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-textPrimary text-lg">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.crop}, {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-textPrimary mb-6">
            Join Thousands of Happy Farmers
          </h3>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            Share your success story and inspire other farmers in your community
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 mx-auto hover:shadow-lg transform hover:scale-105">
            <User className="w-5 h-5" />
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;