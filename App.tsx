'use client';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import KeyEngagements from './components/KeyEngagements';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { INDUSTRIES, INDUSTRY_LIST } from './data';

function App() {
  const [currentIndustryId, setCurrentIndustryId] = useState('manufacturing');
  
  // Fallback to manufacturing if key is missing, though type safety helps prevent this
  const data = INDUSTRIES[currentIndustryId as keyof typeof INDUSTRIES] || INDUSTRIES.manufacturing;

  return (
    <div className="bg-navy-900 min-h-screen text-white selection:bg-teal-500/30 selection:text-teal-200">
      <Navbar 
        currentIndustry={currentIndustryId} 
        onIndustryChange={setCurrentIndustryId}
        industries={INDUSTRY_LIST}
      />
      <main>
        <Hero 
          headline={data.headline} 
          subheadline={data.subheadline}
          industryName={data.name}
        />
        <Overview data={data} />
        <KeyEngagements stats={data.stats} />
        <Services services={data.services} />
        <CaseStudies cases={data.caseStudies} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;