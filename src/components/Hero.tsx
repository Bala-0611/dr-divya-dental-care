import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 main-bg">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-cyan-dental/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-50px] w-[500px] h-[500px] bg-cyan-dental/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10 pt-12 lg:pt-0">
        <motion.div style={{ opacity }} className="relative z-20 flex flex-col justify-center lg:items-start items-center text-center lg:text-left lg:pl-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#555] mb-6 border-l-4 border-cyan-dental pl-6 py-1 mx-auto lg:mx-0"
          >
            Microscope Enhanced Dental Practice
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[900] leading-[0.95] md:leading-[0.9] tracking-[-0.05em] mb-6 md:mb-8 text-[#111]"
          >
            Crafting <br className="hidden sm:block" />
            <span className="text-cyan-dental">Confident</span> <br className="hidden sm:block" />
            Smiles
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-slate-500 max-w-sm mb-10 leading-relaxed mx-auto lg:mx-0"
          >
            Experience the next generation of precision dentistry. Our diagnostic tools and microscopic clarity ensure a perfect smile with zero guesswork.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a 
              href="https://wa.me/919445457024?text=Hi Dr. Divya, I would like to book an appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-10 py-4 rounded-full bg-cyan-dental text-white font-extrabold text-sm shadow-xl shadow-cyan-dental/30 hover:translate-y-[-2px] transition-all group flex items-center justify-center gap-2"
            >
              Book an Appointment
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="tel:+919445457024"
              className="px-6 sm:px-10 py-4 rounded-full border-2 border-cyan-dental text-cyan-dental font-extrabold text-sm hover:bg-cyan-dental/5 transition-all hover:translate-y-[-2px] text-center"
            >
              Call for Free Consultation
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative flex items-center justify-center min-h-[350px] md:min-h-[450px] lg:min-h-[550px] z-10"
        >
          {/* Futuristic Organic Video Container - Increased Size */}
          <div className="relative w-full max-w-[650px] aspect-[4/3] rounded-tl-[100px] md:rounded-tl-[140px] rounded-br-[100px] md:rounded-br-[140px] rounded-tr-[24px] md:rounded-tr-[32px] rounded-bl-[24px] md:rounded-bl-[32px] border border-white/20 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden group">
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2.5s] pointer-events-none"
            >
              <source src="/videos/dental 2.mp4" type="video/mp4" />
            </video>
            
            {/* Elegant Overlays */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-cyan-dental/10" />
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};
