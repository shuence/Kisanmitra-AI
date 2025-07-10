import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import VoiceFirst from './components/VoiceFirst';
import LiveInsights from './components/LiveInsights';
import SchemeNavigator from './components/SchemeNavigator';
import Technology from './components/Technology';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <VoiceFirst />
      <LiveInsights />
      <SchemeNavigator />
      <Technology />
      <Testimonials />
      <Team />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default App;