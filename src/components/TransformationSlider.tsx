import { useState, useRef, MouseEvent, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeftRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const transformations = [
    {
        id: 1,
        title: "Beauty Of Orthodontics",
        category: "EMAX VENEERS",
        description: "Orthodontics is the branch of dentistry that focuses on diagnosing, preventing, and correcting misaligned teeth and jaws (malocclusion). Treatment improves the alignment of teeth, bite function, oral health, and often facial aesthetics.",
        before: "/images/before 1.jpg.jpeg",
        after: "/images/after 1.jpg.jpeg",
        labelBefore: "Pre-Clinical",
        labelAfter: "Micro-Restore"
    },
];

export const TransformationSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (event: MouseEvent | TouchEvent | any) => {
        if (!containerRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        const x = 'touches' in event ? event.touches[0].clientX : event.clientX;
        const position = ((x - rect.left) / rect.width) * 100;
        
        setSliderPosition(Math.max(0, Math.min(100, position)));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % transformations.length);
        setSliderPosition(50);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
        setSliderPosition(50);
    };

    const currentSlide = transformations[currentIndex];

    return (
        <section id="results" className="py-32 bg-[#F8FDFF] overflow-hidden relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-dental/20 to-transparent" />
            
            <div className="container mx-auto px-6 relative">
                <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-dental/5 text-cyan-dental font-black text-[10px] uppercase tracking-[0.2em] mb-8"
                    >
                        Success Stories
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-[900] text-slate-900 mb-8 tracking-tighter leading-[0.95]">
                        Visual <span className="text-cyan-dental">Perfection.</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-400 max-w-xl font-medium leading-tight px-4 sm:px-0">
                        Witness the tangible impact of microscope-enhanced precision dentistry.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
                        {/* Interactive Slider */}
                        <div className="relative">
                            <AnimatePresence mode="wait">
                                <motion.div 
                                    key={currentIndex}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.6, ease: "circOut" }}
                                    className="relative aspect-square md:aspect-video rounded-[3rem] overflow-hidden shadow-2xl cursor-ew-resize group select-none ring-1 ring-slate-200"
                                    ref={containerRef}
                                    onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
                                    onTouchMove={handleMove}
                                    onMouseDown={handleMove}
                                >
                                    {/* After Image */}
                                    <img 
                                        src={currentSlide.after} 
                                        alt="After treatment"
                                        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-1000 group-hover:scale-105"
                                        referrerPolicy="no-referrer"
                                    />
                                    
                                    {/* Before Image (Cropped) */}
                                    <div 
                                        className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-white/80 z-10"
                                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                                    >
                                        <img 
                                            src={currentSlide.before} 
                                            alt="Before treatment"
                                            className="absolute inset-0 w-full h-full object-cover pointer-events-none filter grayscale-[0.2]"
                                            referrerPolicy="no-referrer"
                                        />
                                        <div className="absolute inset-0 bg-slate-900/5 pointer-events-none" />
                                    </div>

                                    {/* Slider Handle */}
                                    <div 
                                        className="absolute top-0 bottom-0 w-1 bg-white z-30 pointer-events-none shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                                        style={{ left: `${sliderPosition}%` }}
                                    >
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl group-active:scale-110 transition-transform ring-4 ring-cyan-dental/10">
                                            <ArrowLeftRight size={24} className="text-cyan-dental" />
                                        </div>
                                    </div>

                                    {/* Position Labels */}
                                    <div className="absolute bottom-8 left-8 z-40 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                                        {currentSlide.labelBefore}
                                    </div>
                                    <div className="absolute bottom-8 right-8 z-40 px-4 py-2 rounded-xl bg-cyan-dental/30 backdrop-blur-xl border border-cyan-dental/30 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                                        {currentSlide.labelAfter}
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Floating Nav Controls */}
                            <div className="absolute top-1/2 -inset-x-4 md:-inset-x-8 -translate-y-1/2 flex justify-between z-40 pointer-events-none">
                                <button 
                                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                                    className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-slate-800 hover:text-cyan-dental hover:scale-110 transition-all pointer-events-auto border border-slate-100"
                                >
                                    <ChevronLeft size={24} className="md:w-8 md:h-8" />
                                </button>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                                    className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-slate-800 hover:text-cyan-dental hover:scale-110 transition-all pointer-events-auto border border-slate-100"
                                >
                                    <ChevronRight size={24} className="md:w-8 md:h-8" />
                                </button>
                            </div>
                        </div>

                        {/* Slide Info */}
                        <div className="flex flex-col h-full justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="flex items-center gap-3 text-cyan-dental mb-4">
                                        <Sparkles size={20} className="fill-current" />
                                        <span className="font-black text-[11px] uppercase tracking-[0.2em]">{currentSlide.category}</span>
                                    </div>
                                    <h3 className="text-4xl font-[900] text-slate-900 mb-6 leading-tight tracking-tight uppercase">
                                        {currentSlide.title}
                                    </h3>
                                    <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                                        {currentSlide.description}
                                    </p>
                                    
                                    <div className="flex gap-2">
                                        {transformations.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => { setCurrentIndex(i); setSliderPosition(50); }}
                                                className={cn(
                                                    "h-1.5 transition-all duration-500 rounded-full",
                                                    currentIndex === i ? "w-12 bg-cyan-dental" : "w-4 bg-slate-200 hover:bg-slate-300"
                                                )}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-dental/10 to-transparent" />
        </section>
    );
};

