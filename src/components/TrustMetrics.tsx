import { motion } from 'motion/react';
import { Star, Smile, Box, Clock, Target } from 'lucide-react';

const metrics = [
  { icon: Star, label: '5 Star Care', value: '4.9/5' },
  { icon: Smile, label: 'Happy Smiles', value: '5000+' },
  { icon: Box, label: 'Advanced Tech', value: 'Next-Gen' },
  { icon: Clock, label: 'Experience', value: '10+ Years' },
  { icon: Target, label: 'Precision', value: '0.01mm' },
  // Duplicate for infinite scroll feel if needed, but ticker is better
];

export const TrustMetrics = () => {
  return (
    <section className="py-12 bg-white/40 backdrop-blur-sm relative overflow-hidden border-y border-cyan-dental/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {metrics.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col group p-4 rounded-3xl hover:bg-white/60 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                 <item.icon size={18} className="text-cyan-dental" />
                 <span className="text-2xl lg:text-3xl font-display font-black text-[#111] tracking-tighter">{item.value}</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 group-hover:text-cyan-dental transition-colors">{item.label}</span>
              <div className="w-12 h-1 bg-cyan-dental/20 mt-4 rounded-full overflow-hidden">
                <div className="w-full h-full bg-cyan-dental origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
