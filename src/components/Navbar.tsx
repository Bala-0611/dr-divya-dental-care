import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctor', href: '#doctor' },
    { name: 'Results', href: '#results' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12',
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-cyan-dental/10 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          {/* Logo Container */}
          <div className="relative group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
               {/* Show logo if exists, else fallback to stylized letter */}
               <img 
                 src="/images/logo.png" 
                 alt="Dr. Divya Logo" 
                 className="w-full h-full object-contain"
                 onError={(e) => {
                   (e.target as HTMLImageElement).style.display = 'none';
                   const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                   if (fallback) fallback.style.display = 'flex';
                 }}
               />
               <div className="logo-fallback hidden absolute inset-0 items-center justify-center font-display font-black text-cyan-dental text-xl sm:text-2xl">D</div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-display font-black text-xl sm:text-2xl tracking-tighter text-cyan-dental leading-none">DR. DIVYA</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-slate-500 font-bold mt-1">Dental Care</span>
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs font-bold uppercase tracking-widest text-[#555] hover:text-cyan-dental transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cyan-dental transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            href="https://www.google.com/maps/place/Dr.+Divya+Dental+Care/@13.0464148,80.2130226,16z/data=!3m1!4b1!4m6!3m5!1s0x3a52670032257adb:0xbdd081b76028bd04!8m2!3d13.0464148!4d80.2130226!16s%2Fg%2F11w_zvmdym?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-cyan-dental text-white px-10 py-4 rounded-full text-sm font-extrabold shadow-lg shadow-cyan-dental/40 hover:bg-cyan-dental/90 transition-all hover:translate-y-[-2px]"
          >
            Locate Us
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white mt-4 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-800 hover:text-cyan-dental"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+919445457024"
                className="flex items-center justify-center gap-2 bg-cyan-dental text-white py-4 rounded-xl font-bold mt-2"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
