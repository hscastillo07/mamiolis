import { ImageWithFallback } from './ImageWithFallback';
import placeholder from "../../../assets/mamiolis.jpeg";

export function Community() {
    const communityImage = "https://images.unsplash.com/photo-1766288019850-1cf72681be08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGNvbW11bml0eSUyMGV2ZW50fGVufDF8fHx8MTc3MjczNjA3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Content */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-block mb-4">
                                <span className="text-indigo-600 text-sm tracking-widest uppercase">Comunidad</span>
                            </div>
                            <h2
                                className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                Conectamos personas, culturas y experiencias
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8"></div>

                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                En ECOS & Mami Oli's, cada día es una oportunidad para conocer
                                a alguien nuevo, aprender algo diferente y expandir tus horizontes.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Somos más que un restaurante o una escuela. Somos una <strong>familia multicultural</strong> donde
                                todos son bienvenidos, donde las diferencias se celebran y donde
                                las conexiones humanas son lo más importante.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
                                <p className="text-4xl mb-2">500+</p>
                                <p className="text-sm opacity-90">Miembros de la comunidad</p>
                            </div>
                            <div className="bg-gradient-to-br from-rose-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
                                <p className="text-4xl mb-2">30+</p>
                                <p className="text-sm opacity-90">Países representados</p>
                            </div>
                            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-6 rounded-xl shadow-lg">
                                <p className="text-4xl mb-2">100+</p>
                                <p className="text-sm opacity-90">Eventos al año</p>
                            </div>
                            <div className="bg-gradient-to-br from-amber-500 to-yellow-600 text-white p-6 rounded-xl shadow-lg">
                                <p className="text-4xl mb-2">∞</p>
                                <p className="text-sm opacity-90">Historias compartidas</p>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <ImageWithFallback
                                src={communityImage}
                                fallbackSrc={placeholder}
                                alt="Community gathering"
                                className="w-full h-[600px] object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-8 py-4 rounded-full shadow-xl border-4 border-gray-50">
                            <p className="text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                                <span className="text-rose-500">♥</span> Unidos por la cultura
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl">
                    <h3
                        className="text-3xl md:text-4xl lg:text-5xl mb-6"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        ¿Listo para formar parte de nuestra comunidad?
                    </h3>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Ya sea que quieras aprender un nuevo idioma, disfrutar de buena comida
                        o simplemente conocer gente increíble, te estamos esperando.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-indigo-600 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Conocer ECOS
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105">
                            Visitar Mami Oli's
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
