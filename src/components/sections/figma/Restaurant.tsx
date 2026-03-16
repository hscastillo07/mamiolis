import { ImageWithFallback } from './ImageWithFallback';
import placeholder from "../../../assets/mamiolis.jpeg";
import { FEATURES } from '@/config/features';

export function Restaurant() {
    return (
        <section id="gastronomia" className="py-24 px-6 bg-gradient-to-b from-[#FFF8F0] to-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-block mb-4">
                                <span className="text-rose-600 text-sm tracking-widest uppercase">Restaurante</span>
                            </div>
                            <h2
                                className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                Mami Oli's
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full mb-8"></div>

                            <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                                La mesa donde las historias comienzan
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Mami Oli's es más que un restaurante. Es una cocina donde los sabores del caribe colombiano se encuentran con la <strong>memoria, la tradición y el placer de compartir. </strong>
                                Cada plato nace de recetas que guardan historia.
                                Cada ingrediente local trae consigo el sabor de nuestra tierra.
                                Y cada mesa se convierte en un lugar donde las personas se reúnen, conversan y crean nuevos recuerdos.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                En nuestra terraza, la cocina se transforma en el corazón del encuentro.
                                Aquí estudiantes de distintos países, amigos, viajeros y familias descubren que la comida tiene el poder de abrir conversaciones y acercar culturas.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-rose-50 p-6 rounded-xl border border-rose-100">
                                <div className="text-3xl mb-3">🌱</div>
                                <h4 className="mb-2">Ingredientes locales</h4>
                                <p className="text-sm text-gray-600">Frescura y sabor en cada bocado</p>
                            </div>
                            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                                <div className="text-3xl mb-3">👨‍🍳</div>
                                <h4 className="mb-2">Recetas tradicionales</h4>
                                <p className="text-sm text-gray-600">Con un toque contemporáneo</p>
                            </div>
                        </div>

                        {FEATURES.showMenuButton && (
                            <button className="px-8 py-4 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Ver menú
                            </button>
                        )}
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="rounded-2xl overflow-hidden shadow-xl h-64">
                                <ImageWithFallback
                                    src="/images/mamiolis-servicio.webp"
                                    fallbackSrc={placeholder}
                                    alt="Mami Oli's Restaurant"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-xl h-72">
                                <ImageWithFallback
                                    src="/images/mamiolis-mesas.webp"
                                    fallbackSrc={placeholder}
                                    alt="Delicious food"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        <div className="mt-12">
                            <div className="rounded-2xl overflow-hidden shadow-xl h-96">
                                <ImageWithFallback
                                    src="/images/mamiolis-mesas-2.webp"
                                    fallbackSrc={placeholder}
                                    alt="Outdoor dining"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
