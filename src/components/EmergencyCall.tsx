import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export const EmergencyCall = () => {
    return (
        <motion.a
            href="tel:+919445457024"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-cyan-dental text-white rounded-full flex items-center justify-center shadow-2xl shadow-cyan-dental/40 cursor-pointer group"
        >
            <div className="absolute inset-0 bg-cyan-dental rounded-full animate-ping opacity-25" />
            <Phone size={24} className="relative z-10 group-hover:rotate-12 transition-transform" />
            
            {/* Tooltip */}
            <div className="absolute right-20 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 shadow-xl">
                Emergency Hotline
            </div>
        </motion.a>
    );
};
