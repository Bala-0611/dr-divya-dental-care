import { motion } from 'motion/react';
import { Microscope, Award, Users, Clock, Syringe } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="/images/clinic image.jpeg"
                alt="Modern Dental Clinic"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-8 -left-8 glass p-6 rounded-3xl shadow-xl z-20 border-l-8 border-l-cyan-dental max-w-[200px]"
            >
              <h4 className="text-3xl font-bold text-cyan-dental mb-1">10+</h4>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years of Excellence</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-cyan-dental" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600">The Pinnacle of Care</span>
              </div>
            </motion.div>

            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-4xl sm:text-5xl md:text-6xl font-[900] leading-[1] mb-8 text-[#111] tracking-tighter"
            >
              Redefining the <br />
              <span className="text-cyan-dental">Dental Standard</span> <br />
              with <span className="text-slate-300">Precision.</span>
            </motion.h2>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg text-slate-500 mb-12 leading-relaxed max-w-lg"
            >
              At Dr. Divya Dental Care, we believe that precision is the foundation of long-lasting oral health. Our microscope-enhanced practice allows us to see what others miss.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              {/* Background Geometric Accent */}
              <div className="absolute inset-0 -m-4 bg-[radial-gradient(circle_at_center,rgba(18,199,214,0.03)_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none opacity-50" />

              {[
                {
                  icon: Microscope,
                  title: 'PRECISE',
                  desc: 'Microscope enhanced visualization.',
                  accent: 'from-cyan-500/20 to-transparent'
                },
                {
                  icon: Users,
                  title: 'INDIVIDUAL',
                  desc: 'Tailored treatments for unique goals.',
                  accent: 'from-blue-500/20 to-transparent'
                },
                {
                  icon: Award,
                  title: 'EXPERT',
                  desc: 'Recognized for clinical excellence.',
                  accent: 'from-teal-500/20 to-transparent'
                },
                {
                  icon: Clock,
                  title: 'EFFICIENT',
                  desc: 'Advanced techniques, faster visits.',
                  accent: 'from-indigo-500/20 to-transparent'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  className="group relative p-6 rounded-3xl bg-white border border-slate-100 hover:border-cyan-dental/30 hover:shadow-2xl hover:shadow-cyan-dental/5 transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

                  <div className="relative z-10">
                    <div className="w-14 h-14 mb-6 rounded-2xl bg-slate-50 flex items-center justify-center text-cyan-dental transition-all duration-500 group-hover:scale-110 group-hover:bg-cyan-dental group-hover:text-white shadow-sm ring-1 ring-slate-100 group-hover:ring-cyan-dental/20">
                      <item.icon size={24} strokeWidth={1.5} />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-black text-[#111] tracking-[0.1em] text-sm uppercase">
                          {item.title}
                        </h4>
                        <div className="h-[2px] w-0 bg-cyan-dental group-hover:w-8 transition-all duration-500" />
                      </div>
                      <p className="text-sm font-medium text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-slate-100 group-hover:border-cyan-dental transition-colors duration-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
