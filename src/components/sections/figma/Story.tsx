export function Story() {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-[#FFFAF5] to-[#FFF8F0]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="text-amber-600 text-sm tracking-widest uppercase">Nuestra Historia</span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Donde los idiomas, la cocina y las personas se encuentran
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-rose-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            <strong className="text-amber-700">Terraza Fusión</strong> nace
                            de un descubrimiento sencillo pero profundo:
                            <span className="italic">los encuentros que transforman  a las personas
                                casi siempre ocurren alrededor de una mesa
                            </span>.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            En este espacio, estudiantes de diferentes partes del mundo llegan a Cartagena para aprender español mientras locales practican inglés,
                            comparten historias y descubren nuevas culturas. Todo sucede en una terraza donde la cocina de <strong className="text-amber-700">Mami Oli's</strong>, llena de tradición y memoria,
                            se convierte en el puente natural para que las conversaciones comiencen.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Lo que ocurre en Terraza Fusión va más allá del aprendizaje de un idioma o de una experiencia gastronómica.
                            Es el encuentro real entre personas que descubren que el mundo puede sentirse más cercano cuando se comparte una mesa.
                        </p>
                        <div className="mt-20 text-center space-y-6">
                            <div className="w-16 h-1 bg-gradient-to-r from-rose-500 via-emerald-500 to-amber-500 mx-auto rounded-full mb-8 opacity-50"></div>
                            <p className="text-xl md:text-2xl lg:text-3xl text-gray-800" style={{ fontFamily: 'var(--font-heading)' }}>
                                <strong className="text-rose-700">En Terraza Fusión cada conversación importa.</strong>
                            </p>
                            <p className="text-xl md:text-2xl lg:text-3xl text-gray-800" style={{ fontFamily: 'var(--font-heading)' }}>
                                <strong className="text-emerald-700">Cada plato compartido abre una puerta.</strong>
                            </p>
                            <p className="text-xl md:text-2xl lg:text-3xl text-gray-800" style={{ fontFamily: 'var(--font-heading)' }}>
                                <strong className="text-amber-700">Cada palabra nueva acerca a las personas.</strong>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col h-full bg-white p-8 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 border border-amber-100/50">
                            <div className="text-5xl mb-6">🌍</div>
                            <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                ECOS
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Escuela Internacional de Idiomas</p>
                        </div>

                        <div className="flex flex-col h-full bg-white p-8 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 border border-rose-100/50">
                            <div className="text-5xl mb-6">🍽️</div>
                            <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                Mami Oli's
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Terraza Cultural & Restaurante</p>
                        </div>

                        <div className="bg-gradient-to-br from-amber-500 to-rose-500 p-8 rounded-2xl shadow-lg text-white col-span-2">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-px flex-1 bg-white/20"></div>
                                <div className="text-3xl">✨</div>
                                <div className="h-px flex-1 bg-white/20"></div>
                            </div>
                            <p className="text-xl text-center italic leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                                "Aprender, compartir y sentarse a la mesa transforma a las personas"
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
