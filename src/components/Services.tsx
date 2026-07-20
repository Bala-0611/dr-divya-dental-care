import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const services = [
  { 
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    title: 'Scaling', 
    desc: 'Advanced ultrasonic scaling and medical-grade plaque removal to protect long-term gum health and restore freshness.' 
  },
  { 
    image: '/images/Filling.jpg',
    title: 'Filling', 
    desc: 'Premium, tooth-colored composite restorations designed to blend seamlessly while repairing structural decay.' 
  },
  { 
    image: '/images/dental x ray.jpg',
    title: 'Dental X-Ray', 
    desc: 'Ultra-low radiation digital radiographic imaging for highly precise, instantaneous internal diagnosis.' 
  },
  { 
    image: '/images/root canal.jpg',
    title: 'Root Canal Treatment', 
    desc: 'Microscope-enhanced endodontic therapy for painless, high-precision preservation of natural teeth.' 
  },
  { 
    image: '/images/extraction.jpg',
    title: 'Extraction', 
    desc: 'Gentle, atraumatic surgical removal of severely compromised teeth with a priority on rapid healing.' 
  },
  { 
    image: '/images/fixed dental.jpg',
    title: 'Fixed Dental Prosthesis', 
    desc: 'High-strength ceramic bridges and permanent crowns designed to restore flawless bite function and aesthetics.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800',
    title: 'Implant', 
    desc: 'Biocompatible titanium implants replicating natural tooth roots for permanent, rock-solid support.' 
  },
  { 
    image: '/images/teeth impaction.jpg',
    title: 'Impaction', 
    desc: 'Specialized and gentle surgical extraction of impacted third molars (wisdom teeth) to prevent crowding.' 
  },
  { 
    image: '/images/invisible.jpg',
    title: 'Braces and Invisible Aligners', 
    desc: 'Custom orthodontic solutions combining advanced metal braces and clear aligners for perfect alignment.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800',
    title: 'Aesthetic Dentistry', 
    desc: 'Artisan-crafted ceramic veneers and cosmetic enhancements designed to create your most confident, symmetrical smile.' 
  },
  { 
    image: '/images/teeth whitening.jpg',
    title: 'Teeth Whitening', 
    desc: 'Quantum laser whitening technology providing multiple shades of brightness in a single, relaxing visit.' 
  },
];

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-dental/5 text-cyan-dental font-black text-[10px] uppercase tracking-[0.2em] mb-6"
            >
              Clinical Specializations
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl font-[900] text-slate-900 leading-[0.95] tracking-tighter"
            >
              Precision <br />
              <span className="text-cyan-dental">Healthcare.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 font-medium max-w-sm leading-tight"
          >
            Where high-resolution microscopy meets artisan dental craftsmanship.
          </motion.p>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <AnimatePresence mode="popLayout">
              {visibleServices.map((service, i) => (
                  <motion.div
                      layout
                      key={service.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: i * 0.05, duration: 0.6 }}
                      onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                      className="group relative aspect-square rounded-[2.5rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                      {/* Image Background */}
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className={cn(
                          "absolute inset-0 w-full h-full object-cover transition-all duration-700",
                          activeIndex === i ? "scale-110 blur-sm brightness-50" : "group-hover:scale-105"
                        )}
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Overlays */}
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500",
                        activeIndex === i ? "opacity-90" : "opacity-60 group-hover:opacity-80"
                      )} />
                      
                      <div className={cn(
                        "absolute inset-0 bg-cyan-dental/20 opacity-0 transition-opacity duration-500",
                        activeIndex === i ? "opacity-40" : "group-hover:opacity-100"
                      )} />

                      {/* Default Content: Title Only */}
                      <AnimatePresence mode="wait">
                        {activeIndex !== i ? (
                          <motion.div 
                            key="title"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute inset-x-0 bottom-0 p-10"
                          >
                            <h3 className="text-3xl font-black text-white leading-none tracking-tighter uppercase whitespace-pre-line">
                              {service.title.includes(' ') ? (
                                <>
                                  {service.title.split(' ').slice(0, -1).join(' ')} <br />
                                  <span className="text-cyan-dental">{service.title.split(' ').pop()}</span>
                                </>
                              ) : (
                                <span className="text-cyan-dental">{service.title}</span>
                              )}
                            </h3>
                          </motion.div>
                        ) : (
                          <motion.div 
                            key="detail"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="absolute inset-0 p-10 flex flex-col justify-center items-center text-center z-20"
                          >
                            <button 
                              onClick={(e) => { e.stopPropagation(); setActiveIndex(null); }}
                              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            >
                              <X size={20} />
                            </button>
                            
                            <h3 className="text-2xl font-black text-cyan-dental mb-4 uppercase tracking-tighter">
                              {service.title}
                            </h3>
                            <div className="w-12 h-1 bg-cyan-dental mb-6 rounded-full" />
                            <p className="text-white text-lg font-medium leading-relaxed">
                              {service.desc}
                            </p>
                            
                            <div className="mt-8 flex items-center gap-2 text-cyan-dental text-xs font-black uppercase tracking-[0.2em]">
                              <span>Click to Close</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Interaction Frame */}
                      <div className={cn(
                        "absolute inset-4 border rounded-[2rem] transition-all duration-700 pointer-events-none",
                        activeIndex === i ? "border-cyan-dental/50" : "border-white/0 group-hover:border-white/10"
                      )} />
                  </motion.div>
              ))}
            </AnimatePresence>
        </motion.div>

        {!showAll && (
          <div className="mt-20 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(true)}
              className="px-12 py-5 bg-[#111] text-white rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-cyan-dental transition-colors shadow-2xl"
            >
              Explore All Services
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

