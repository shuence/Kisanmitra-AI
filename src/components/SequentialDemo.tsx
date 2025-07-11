import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const demoSteps = [
  {
    id: 1,
    title: "Welcome Screen",
    description: "App launches with KisaanMitra branding",
    image: "/public/screenshots/splash_screen.png",
    category: "Onboarding"
  },
  {
    id: 2,
    title: "Language Selection",
    description: "Choose your preferred local language",
    image: "/public/screenshots/language_screen.png",
    category: "Onboarding"
  },
  {
    id: 3,
    title: "Dashboard",
    description: "Access all farming tools from one place",
    image: "/public/screenshots/home_screen.png",
    category: "Navigation"
  },
  {
    id: 4,
    title: "Voice Assistant",
    description: "Ask questions in your language",
    image: "/public/screenshots/voice_ai.png",
    category: "AI Features"
  },
  {
    id: 5,
    title: "Crop Disease Detection",
    description: "Upload crop photo for AI analysis",
    image: "/public/screenshots/crop_dignosis.png",
    category: "AI Features"
  },
  {
    id: 6,
    title: "Market Prices",
    description: "Real-time mandi price information",
    image: "/public/screenshots/market_price.png",
    category: "Information"
  },
  {
    id: 7,
    title: "Weather Insights",
    description: "Weather forecasts with farming advice",
    image: "/public/screenshots/weather.png",
    category: "Information"
  },
  {
    id: 8,
    title: "Government Schemes",
    description: "Discover applicable subsidies",
    image: "/public/screenshots/govt_schemes.png",
    category: "Support"
  },
  {
    id: 9,
    title: "Nearby Shops",
    description: "Find local agricultural stores",
    image: "/public/screenshots/nearbyshop.png",
    category: "Support"
  },
  {
    id: 10,
    title: "Expert Consultation",
    description: "Connect with agricultural experts",
    image: "/public/screenshots/expert_screen.png",
    category: "Support"
  }
];

const SequentialDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  React.useEffect(() => {
    let interval: number;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % demoSteps.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % demoSteps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + demoSteps.length) % demoSteps.length);
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentDemo = demoSteps[currentStep];

  return (
    <section id="demo" className="py-20 px-4 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            🎬 Try Interactive Demo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience KisaanMitra AI's complete user journey - from onboarding to expert consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile Screen Display */}
          <div className="relative">
            <div className="mx-auto w-80 h-[750px] bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-white flex items-center justify-between px-6 text-xs font-medium text-gray-900 z-10">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 border border-gray-900 rounded-sm">
                      <div className="w-full h-full bg-gray-900 rounded-sm"></div>
                    </div>
                    <span>100%</span>
                  </div>
                </div>
                
                {/* Screen Content */}
                <div className="pt-8 h-full">
                  <img 
                    src={currentDemo.image} 
                    alt={currentDemo.title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center mt-8 gap-4">
              <button
                onClick={prevStep}
                className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                aria-label="Previous screen"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={toggleAutoPlay}
                className="p-3 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors"
                aria-label={isAutoPlaying ? "Pause" : "Play"}
              >
                {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              
              <button
                onClick={nextStep}
                className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                aria-label="Next screen"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Demo Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {currentDemo.category}
              </div>
              <h3 className="text-3xl font-bold text-foreground">
                Step {currentStep + 1}: {currentDemo.title}
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {currentDemo.description}
              </p>
            </div>

            {/* Progress Indicators */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Progress</span>
                <span>{currentStep + 1} of {demoSteps.length}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Step Navigation */}
            <div className="grid grid-cols-5 gap-2">
              {demoSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => goToStep(index)}
                  className={`p-2 rounded-lg text-xs font-medium transition-colors ${
                    index === currentStep
                      ? 'bg-primary text-white'
                      : index < currentStep
                      ? 'bg-primary/20 text-primary'
                      : 'bg-muted text-muted-foreground hover:bg-muted-foreground/10'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Feature Highlights */}
            <div className="bg-card rounded-xl p-6 space-y-3">
              <h4 className="font-semibold text-foreground">Key Features in this Demo:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Voice-first interaction in local languages
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  AI-powered crop disease detection
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Real-time market price information
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Expert consultation and local support
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Demo Summary */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Complete User Journey
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl">🚀</div>
                <h4 className="font-semibold text-foreground">Onboarding</h4>
                <p className="text-sm text-muted-foreground">Welcome & Language Setup</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🤖</div>
                <h4 className="font-semibold text-foreground">AI Features</h4>
                <p className="text-sm text-muted-foreground">Voice & Vision AI Tools</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">📊</div>
                <h4 className="font-semibold text-foreground">Information</h4>
                <p className="text-sm text-muted-foreground">Prices & Weather Data</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🤝</div>
                <h4 className="font-semibold text-foreground">Support</h4>
                <p className="text-sm text-muted-foreground">Schemes & Expert Help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SequentialDemo;
