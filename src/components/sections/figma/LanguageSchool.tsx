import { ImageWithFallback } from './ImageWithFallback';
import placeholder from "../../../assets/mamiolis.jpeg";

export function LanguageSchool() {
    const learningImage = "https://images.unsplash.com/photo-1758270704787-615782711641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBsZWFybmluZyUyMGxhbmd1YWdlJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MjczNjA3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-white to-[#F0FFF4]">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Images */}
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <ImageWithFallback
                                    src={learningImage}
                                    fallbackSrc={placeholder}
                                    alt="Language learning at ECOS"
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>

                            {/* Floating Cards */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-emerald-100 max-w-xs">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-2xl">🗣️</span>
                                    <div>
                                        <p className="font-semibold text-gray-900">+500 estudiantes</p>
                                        <p className="text-sm text-gray-600">De 30+ países</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-6 -left-6 bg-emerald-600 text-white p-4 rounded-2xl shadow-xl text-center min-w-[140px]">
                                <p className="text-sm mb-2">Idiomas disponibles:</p>
                                <div className="flex justify-center gap-6 text-2xl">
                                    <span>🇪🇸</span>
                                    <span>🇬🇧</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div>
                            <div className="inline-block mb-4">
                                <span className="text-emerald-600 text-sm tracking-widest uppercase">Escuela de Idiomas</span>
                            </div>
                            <h2
                                className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                ECOS
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-8"></div>

                            <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                                Language. Culture. Community.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                ECOS es una <strong>escuela internacional de idiomas</strong> que va más allá
                                de las aulas tradicionales. Aquí, los estudiantes internacionales aprenden español
                                mientras los locales practican inglés y otros idiomas.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Nuestro método se basa en la <strong>inmersión cultural.</strong> Aquí el aprendizaje no ocurre solo en el salón de clases.
                                Ocurre en las conversaciones, en las calles de la ciudad, y muchas veces alrededor de una mesa compartida.

                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                En nosotros encontrarás una escuela de idiomas que refleja poderosamente que aprender un idioma es
                                también aprender a encontrarse con otras culturas.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Por eso ECOS es más que una escuela.
                                Es una comunidad internacional donde personas de distintos países se encuentran, aprenden juntas y crean amistades que cruzan fronteras.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                                <div className="text-2xl">🎓</div>
                                <div>
                                    <h4 className="mb-1">Clases Personalizadas</h4>
                                    <p className="text-sm text-gray-600">Grupos reducidos y atención individual</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-xl border border-teal-100">
                                <div className="text-2xl">🌎</div>
                                <div>
                                    <h4 className="mb-1">Inmersión Cultural</h4>
                                    <p className="text-sm text-gray-600">Aprende mientras vives la cultura local</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-cyan-50 rounded-xl border border-cyan-100">
                                <div className="text-2xl">🤝</div>
                                <div>
                                    <h4 className="mb-1">Intercambio de Idiomas</h4>
                                    <p className="text-sm text-gray-600">Practica con hablantes nativos</p>
                                </div>
                            </div>
                        </div>

                        <button className="px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Más información
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
