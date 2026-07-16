import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Problem from './components/Problem/Problem';
import Solution from './components/Solution/Solution';
import Products from './components/Products/Products';
import Sectors from './components/Sectors/Sectors';
import HowItWorks from './components/HowItWorks/HowItWorks';
import QuoteForm from './components/QuoteForm/QuoteForm';
import UseCases from './components/UseCases/UseCases';
import ImpactCalculator from './components/ImpactCalculator/ImpactCalculator';
import FAQ from './components/FAQ/FAQ';
import CTABanner from './components/CTABanner/CTABanner';
import Footer from './components/Footer/Footer';
import LeadsDashboard from './components/LeadsDashboard/LeadsDashboard';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [leadsCount, setLeadsCount] = useState(0);
  const [leadsOpen, setLeadsOpen] = useState(false);
  const appRef = useScrollReveal();

  const updateLeadsCount = useCallback(() => {
    try {
      const leads = JSON.parse(localStorage.getItem('revo_leads') || '[]');
      setLeadsCount(leads.length);
    } catch {
      setLeadsCount(0);
    }
  }, []);

  useEffect(() => {
    updateLeadsCount();
  }, [updateLeadsCount]);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  }, []);

  return (
    <div ref={appRef}>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Products />
        <Sectors />
        <HowItWorks />
        <QuoteForm onSaveLead={updateLeadsCount} />
        <UseCases />
        <ImpactCalculator />
        <FAQ />
        <CTABanner />
      </main>
      <Footer leadsCount={leadsCount} onOpenLeads={() => setLeadsOpen(true)} />
      <LeadsDashboard isOpen={leadsOpen} onClose={() => { setLeadsOpen(false); updateLeadsCount(); }} />
    </div>
  );
}
