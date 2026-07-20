import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TrustMetrics } from './components/TrustMetrics';
import { Doctor } from './components/Doctor';
import { Services } from './components/Services';
import { TransformationSlider } from './components/TransformationSlider';
import { Contact, Footer } from './components/Contact';
import { EmergencyCall } from './components/EmergencyCall';

function App() {
  return (
    <div className="min-h-screen relative main-bg">
      {/* Structural Background Glows */}
      <div className="fixed top-0 right-0 w-[1000px] h-[1000px] bg-cyan-dental/[0.03] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-cyan-dental/[0.02] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none z-0" />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TrustMetrics />
        <About />
        <Services />
        <Doctor />
        <TransformationSlider />
        <Contact />
      </main>
      <Footer />
      <EmergencyCall />
    </div>
  );
}

export default App;
