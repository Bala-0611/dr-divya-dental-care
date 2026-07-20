import { motion } from 'motion/react';
import { Instagram, Mail, Phone } from 'lucide-react';

export const Doctor = () => {
  return (
    <section id="doctor" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12 md:mb-16 text-center text-balance">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-dental/5 text-cyan-dental font-semibold text-xs uppercase tracking-widest mb-6"
            >
                Meet the Expert
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6"
            >
                Expert Care by <span className="text-cyan-dental">Dr. Divya Prabha</span>
            </motion.h2>
            <p className="text-slate-500 max-w-2xl font-light px-4 sm:px-0">
                Leading with compassion and precision, Dr. Divya specializing in restorative dentistry and microscopic endodontics.
            </p>
        </div>

        <div className="max-w-6xl mx-auto rounded-[3rem] bg-slate-900 overflow-hidden relative group">
          <div className="grid md:grid-cols-2 items-stretch">
            <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto">
               <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop" 
                alt="Dr. Divya Prabha" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 shadow-2xl"
               />
            </div>

            <div className="p-8 md:p-16 flex flex-col justify-center">
              <h3 className="text-3xl font-display font-bold text-white mb-2">Dr. Divya Prabha S.B.</h3>
              <p className="text-cyan-dental font-semibold mb-8 text-lg">B.D.S., F.D.S. (Endo)</p>
              
              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                   <div className="w-1 h-auto bg-cyan-dental rounded-full opacity-50" />
                   <div className="flex-1">
                      <h4 className="text-white font-bold mb-1">Dental Surgeon</h4>
                      <p className="text-slate-400 text-sm">Specializing in advanced surgical procedures and full mouth rehabilitation.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-1 h-auto bg-cyan-dental rounded-full opacity-50" />
                   <div className="flex-1">
                      <h4 className="text-white font-bold mb-1">Root Canal Specialist</h4>
                      <p className="text-slate-400 text-sm">Expert in microscopic endodontic treatments ensuring 99% success rates.</p>
                   </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {[
                    { icon: Instagram, href: 'https://www.instagram.com/drdivyadentalcare/' },
                    { icon: Mail, href: 'mailto:contact@drdivya.com' },
                    { icon: Phone, href: 'tel:+919876543210' },
                ].map((social, i) => (
                    <a key={i} href={social.href} className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-cyan-dental hover:border-cyan-dental hover:shadow-lg hover:shadow-cyan-dental/20 transition-all duration-300">
                        <social.icon size={24} strokeWidth={1.5} />
                    </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="absolute top-10 right-10 hidden lg:block opacity-10">
             <svg viewBox="0 0 200 200" width="200" height="200" fill="none" stroke="white" strokeWidth="1">
                <circle cx="100" cy="100" r="80" strokeDasharray="5 5" />
                <circle cx="100" cy="100" r="40" strokeDasharray="2 2" />
             </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
