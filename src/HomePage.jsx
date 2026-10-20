import Hero from './components/Hero.jsx';
import TrustStrip from './components/TrustStrip.jsx';
import Register from './components/Register.jsx';
import Platform from './components/Platform.jsx';
import Features from './components/Features.jsx';
import Stats from './components/Stats.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import DashboardPreview from './components/DashboardPreview.jsx';
import Benefits from './components/Benefits.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import FinalCTA from './components/FinalCTA.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Register />
      <Platform />
      <Features />
      <Stats />
      <HowItWorks />
      <DashboardPreview />
      <Benefits />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
