import placeholder from "../../../assets/mamiolis.jpeg";
import { ImageWithFallback } from './ImageWithFallback';
import { FEATURES } from '@/config/features';

export function Hero() {
    return (
        <div id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <ImageWithFallback
                    src="/images/mamiolis-cartel-2.webp"
                    alt="ECOS Terraza Cultural"
                    className="w-full h-full object-cover"
                    fallbackSrc={placeholder}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                <div className="mb-8 inline-block">
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                        <span className="text-amber-300">✦</span>
                        <span className="text-sm tracking-wider">ECOS & MAMI OLI'S</span>
                        <span className="text-amber-300">✦</span>
                    </div>
                </div>

                <h1
                    className="mb-8 text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Un espacio donde se encuentran{' '}
                    <span className="text-amber-300 italic">sabores</span>,{' '}
                    <span className="text-emerald-300 italic">idiomas</span> y{' '}
                    <span className="text-rose-300 italic">culturas</span>
                </h1>

                <p className="mb-12 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                    Terraza Fusión es el lugar donde la gastronomía de Mami Oli´s y el espíritu intercultural de ECOS
                    se encuentran para crear experiencias auténticas de conexión entre personas de todo el mundo.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {FEATURES.showHeroStoryButton && (
                        <button className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                            <span style={{ fontFamily: 'var(--font-body)' }}>Conoce la historia</span>
                        </button>
                    )}
                    {FEATURES.showHeroVisitButton && (
                        <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                            <span style={{ fontFamily: 'var(--font-body)' }}>Visita la terraza</span>
                        </button>
                    )}
                </div>
            </div>

        </div>
    );
}
