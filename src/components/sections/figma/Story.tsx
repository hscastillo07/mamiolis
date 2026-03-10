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
                        Donde el lenguaje y la cocina se encuentran
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-rose-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            <strong className="text-amber-700">ECOS</strong> y <strong className="text-rose-700">Mami Oli's</strong> nacieron
                            de una idea simple pero poderosa: <span className="italic">los mejores aprendizajes ocurren
                                alrededor de una mesa</span>.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            En nuestro espacio, estudiantes internacionales aprenden español mientras locales
                            practican inglés, todos reunidos en una terraza donde la comida con raíces y memoria
                            se convierte en el puente perfecto para el intercambio cultural.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Cada conversación, cada plato compartido, cada palabra nueva aprendida es parte
                            de una experiencia transformadora que va mucho más allá del aula tradicional.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-amber-100">
                            <div className="text-5xl mb-4">🌍</div>
                            <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                ECOS
                            </h3>
                            <p className="text-gray-600 text-sm">Escuela Internacional de Idiomas</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-rose-100 mt-8">
                            <div className="text-5xl mb-4">🍽️</div>
                            <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                Mami Oli's
                            </h3>
                            <p className="text-gray-600 text-sm">Terraza Cultural & Restaurante</p>
                        </div>

                        <div className="bg-gradient-to-br from-amber-500 to-rose-500 p-8 rounded-2xl shadow-lg text-white col-span-2 -mt-4">
                            <div className="text-4xl mb-3">✨</div>
                            <p className="text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                                "Aprender, compartir y sentarse a la mesa transforma a las personas"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
