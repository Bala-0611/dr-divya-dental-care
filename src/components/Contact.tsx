import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Quote } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-dental/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-stretch">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-dental/10 text-cyan-dental font-semibold text-xs uppercase tracking-widest mb-6"
                        >
                            Get In Touch
                        </motion.div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 mb-8">
                            Start Your <span className="text-cyan-dental">Micro-Journey</span> Today
                        </h2>
                        <p className="text-slate-500 mb-12 text-lg font-light leading-relaxed">
                            Have questions or ready to book your first appointment? Our futuristic clinic in Vadapalani is ready to welcome you.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: MapPin, title: 'Visit Us', value: '4/B2, Gopal Street, LSM Nest, Vadapalani, Chennai 600026', href: 'https://maps.google.com/?q=4/B2,+Gopal+Street,+LSM+Nest,+Vadapalani,+Chennai+600026' },
                                { icon: Phone, title: 'Call Center', value: '+91 9445457024', href: 'tel:+919445457024' },
                                { icon: Mail, title: 'Email Support', value: 'drdivyaprabha30@gmail.com', href: 'mailto:drdivyaprabha30@gmail.com' },
                                { icon: Clock, title: 'Session Hours', value: 'Mon - Sat: 10AM - 1PM, 5PM - 8:30PM', href: null }
                            ].map((item, i) => (
                                item.href ? (
                                    <motion.a 
                                        key={i}
                                        href={item.href}
                                        target={item.href.startsWith('http') ? "_blank" : undefined}
                                        rel="noreferrer"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-6 items-start group cursor-pointer"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-cyan-dental group-hover:bg-cyan-dental group-hover:text-white transition-all shadow-lg shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-cyan-dental transition-colors">{item.title}</h4>
                                            <p className="text-lg text-slate-900 font-medium group-hover:text-cyan-dental transition-colors">{item.value}</p>
                                        </div>
                                    </motion.a>
                                ) : (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-6 items-start"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-cyan-dental shadow-lg shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.title}</h4>
                                            <p className="text-lg text-slate-900 font-medium">{item.value}</p>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 relative">
                        {[
                            {
                                text: "Dr. Divya has the ability to give you the least painful treatment. Well-equipped medical devices with extremely competent and meticulous patient care. Best stop for your teeth and gum problems.",
                                author: "Nancy Pounraj",
                                highlight: "Expert Patient Care",
                                color: "from-cyan-500/20 to-cyan-dental/5",
                                accent: "bg-cyan-dental"
                            },
                            {
                                text: "I got my tooth filling at Dr. Divya Dental Care and the process was quick and painless. The clinic atmosphere made me feel comfortable and I highly recommend the clinic.",
                                author: "Mohamed Faruk",
                                highlight: "Painless Treatment",
                                color: "from-indigo-500/20 to-indigo-600/5",
                                accent: "bg-indigo-500"
                            },
                            {
                                text: "Good care and ambience.. must be on my top priority when it comes to visiting dentist.. Had an amazing experience with Dr. Divya.",
                                author: "Harsha Varthini",
                                highlight: "Premium Ambience",
                                color: "from-emerald-500/20 to-emerald-600/5",
                                accent: "bg-emerald-500"
                            }
                        ].map((test, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1), duration: 0.6 }}
                                whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? 0.5 : -0.5 }}
                                className={`relative p-8 rounded-[2.5rem] border border-slate-100 overflow-hidden bg-gradient-to-br ${test.color} shadow-xl group cursor-default`}
                            >
                                <div className={`absolute top-0 left-0 w-1.5 h-full ${test.accent}`} />
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                                    <Quote size={56} className="text-slate-900" />
                                </div>
                                
                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className={`px-4 py-1 rounded-full ${test.accent} text-white font-black text-[9px] uppercase tracking-[0.2em]`}>
                                            {test.highlight}
                                        </div>
                                    </div>
                                    <p className="text-2xl font-[900] text-slate-800 italic leading-tight tracking-tight mb-8">
                                        "{test.text}"
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-px ${test.accent} opacity-50`} />
                                            <span className="text-sm font-black text-slate-900 uppercase tracking-widest">{test.author}</span>
                                        </div>
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, starI) => (
                                                <div key={starI} className={`w-1.5 h-1.5 rounded-full ${test.accent}`} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="footer-v2 bg-white pt-24 pb-12 overflow-hidden relative border-t border-slate-100">
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-dental/5 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-16 mb-24">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-3">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                                <img 
                                    src="/images/logo.png" 
                                    alt="Dr. Divya Logo" 
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                        const fallback = e.currentTarget.parentElement?.querySelector('.footer-logo-fallback') as HTMLElement;
                                        if (fallback) fallback.style.display = 'flex';
                                    }}
                                />
                                <span className="footer-logo-fallback hidden text-3xl">🦷</span>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="font-display font-[900] text-2xl sm:text-3xl tracking-tighter text-slate-900 leading-none">
                                    DR. DIVYA
                                </h4>
                                <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-cyan-dental font-black mt-1">
                                    Dental Care
                                </span>
                            </div>
                        </div>
                        <p className="text-slate-500 text-base leading-relaxed font-medium max-w-sm">
                            Your journey to a healthier, brighter smile starts here. We are committed to providing the highest quality of microscopic dental care.
                        </p>
                    </div>

                    {/* Get In Touch Section */}
                    <div>
                        <h4 className="text-slate-900 font-[900] text-xl mb-10 tracking-tight uppercase italic underline decoration-cyan-dental decoration-4 underline-offset-8">
                            Get In <span className="text-cyan-dental">Touch</span>
                        </h4>
                        <ul className="space-y-6">
                            <li>
                                <a href="mailto:drdivyaprabha30@gmail.com" className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-cyan-dental group-hover:bg-cyan-dental group-hover:text-white transition-all">
                                        <Mail size={18} />
                                    </div>
                                    <span className="text-slate-600 font-medium group-hover:text-cyan-dental transition-colors">drdivyaprabha30@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/drdivyadentalcare/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-cyan-dental group-hover:bg-cyan-dental group-hover:text-white transition-all">
                                        <Instagram size={18} />
                                    </div>
                                    <span className="text-slate-600 font-medium group-hover:text-cyan-dental transition-colors">Follow us on Instagram</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Clinical Excellence Section (Replaces Newsletter) */}
                    <div>
                        <h4 className="text-slate-900 font-[900] text-xl mb-10 tracking-tight uppercase italic underline decoration-cyan-dental decoration-4 underline-offset-8">
                            Clinical <span className="text-cyan-dental">Excellence</span>
                        </h4>
                        <p className="text-slate-500 font-medium leading-relaxed mb-8">
                            State-of-the-art microscopic precision integrated with patient-first comfort. Experience the transition to digital dentistry.
                        </p>
                        <div className="flex gap-2">
                            {['RCT', 'IMPLANTS', 'VENEERS', 'ALIGNERS'].map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-slate-100 flex flex-col items-center justify-center gap-2 text-center">
                    <p className="text-slate-400 text-sm font-medium tracking-tight">
                        © 2026 Dr. Divya Dental Clinic. All Rights Reserved.
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-slate-400 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em]">Designed and Developed by</span>
                        <a 
                            href="https://brixeltech.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-slate-900 font-black text-xs uppercase tracking-widest hover:text-cyan-dental transition-colors"
                        >
                            Brixel Tech
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    );
};
