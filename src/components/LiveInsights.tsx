import React from 'react';
import { BarChart3, CloudRain, Bell, TrendingUp } from 'lucide-react';

const LiveInsights: React.FC = () => {
  return (
    <section id="insights" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <BarChart3 className="w-10 h-10 lg:w-12 lg:h-12 text-primary" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary">
              Market Trends, Weather Alerts, and Personalized Tips
            </h2>
          </div>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Never miss an opportunity. KisanMitra tracks mandi trends, predicts tomorrow's prices, 
            and gives crop-specific advice based on upcoming weather.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300">
            <div className="bg-primary rounded-xl lg:rounded-2xl w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold text-textPrimary mb-6">Price Predictions</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 font-medium">Tomato (Today)</span>
                <span className="font-bold text-textPrimary text-lg">₹25/kg</span>
              </div>
              <div className="flex justify-between items-center py-2 bg-white/50 rounded-lg px-3">
                <span className="text-gray-600 font-medium">Tomato (Tomorrow)</span>
                <span className="font-bold text-primary text-lg">₹28/kg ↗</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 font-medium">Onion (Today)</span>
                <span className="font-bold text-textPrimary text-lg">₹15/kg</span>
              </div>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-sm text-gray-700 font-medium">💡 Hold tomatoes for better prices tomorrow</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300">
            <div className="bg-accent rounded-xl lg:rounded-2xl w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center mb-6">
              <CloudRain className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold text-textPrimary mb-6">Weather Insights</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 font-medium">Today</span>
                <span className="font-bold text-textPrimary">28°C, Sunny</span>
              </div>
              <div className="flex justify-between items-center py-2 bg-white/50 rounded-lg px-3">
                <span className="text-gray-600 font-medium">Tomorrow</span>
                <span className="font-bold text-accent">Light Rain</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 font-medium">Weekend</span>
                <span className="font-bold text-textPrimary">Heavy Rain</span>
              </div>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-sm text-gray-700 font-medium">🌱 Perfect time for sowing after weekend rain</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-links/10 to-links/5 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300">
            <div className="bg-links rounded-xl lg:rounded-2xl w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center mb-6">
              <Bell className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold text-textPrimary mb-6">Smart Alerts</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 border-l-4 border-accent shadow-sm">
                <p className="text-sm font-semibold text-textPrimary mb-1">🐛 Pest Alert</p>
                <p className="text-xs text-gray-600">High aphid activity reported in your area</p>
              </div>
              <div className="bg-white rounded-xl p-4 border-l-4 border-primary shadow-sm">
                <p className="text-sm font-semibold text-textPrimary mb-1">📈 Market Opportunity</p>
                <p className="text-xs text-gray-600">Demand spike for wheat in nearby mandis</p>
              </div>
              <div className="bg-white rounded-xl p-4 border-l-4 border-links shadow-sm">
                <p className="text-sm font-semibold text-textPrimary mb-1">🌧️ Weather Warning</p>
                <p className="text-xs text-gray-600">Heavy rain expected next week</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-links hover:bg-links/90 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 mx-auto hover:shadow-lg transform hover:scale-105">
            <Bell className="w-5 h-5" />
            Get Smart Notifications
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveInsights;