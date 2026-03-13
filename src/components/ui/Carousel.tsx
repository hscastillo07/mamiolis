'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CarouselProps {
    children: React.ReactNode[];
    className?: string;
    options?: any;
}

export function Carousel({ children, className, options = { loop: true, align: 'start' } }: CarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

    const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = React.useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = React.useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi, setSelectedIndex]);

    React.useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, setScrollSnaps, onSelect]);

    return (
        <div className={cn('relative group', className)}>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {children.map((child, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={cn(
                            'w-2.5 h-2.5 rounded-full transition-all duration-300',
                            selectedIndex === index 
                                ? 'bg-violet-600 w-8' 
                                : 'bg-violet-200 hover:bg-violet-300'
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <AnimatePresence>
                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className={cn(
                        "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-white/80 backdrop-blur-md shadow-xl border border-white/20 text-violet-600 transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-0 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center",
                        !prevBtnEnabled && "cursor-not-allowed opacity-30"
                    )}
                    onClick={scrollPrev}
                    disabled={!prevBtnEnabled}
                >
                    <ChevronLeft size={24} />
                </motion.button>
            </AnimatePresence>

            <AnimatePresence>
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className={cn(
                        "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-white/80 backdrop-blur-md shadow-xl border border-white/20 text-violet-600 transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-0 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center",
                        !nextBtnEnabled && "cursor-not-allowed opacity-30"
                    )}
                    onClick={scrollNext}
                    disabled={!nextBtnEnabled}
                >
                    <ChevronRight size={24} />
                </motion.button>
            </AnimatePresence>
        </div>
    );
}
