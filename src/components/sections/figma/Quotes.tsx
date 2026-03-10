export function Quotes() {
    const quotes = [
        {
            text: "Aquí los idiomas se sientan a la mesa",
            gradient: "from-amber-400 via-rose-400 to-purple-400"
        },
        {
            text: "Este espacio habla más de un idioma",
            gradient: "from-emerald-400 via-teal-400 to-cyan-400"
        },
        {
            text: "Donde el lenguaje y la cocina se encuentran",
            gradient: "from-pink-400 via-orange-400 to-yellow-400"
        }
    ];

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-[#FFFAF5] to-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 text-9xl opacity-5">✦</div>
            <div className="absolute bottom-10 right-10 text-9xl opacity-5">✦</div>

            <div className="max-w-5xl mx-auto">
                <div className="space-y-12">
                    {quotes.map((quote, index) => (
                        <div
                            key={index}
                            className="relative group"
                        >
                            <div className="text-center py-12 px-6 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className={`bg-gradient-to-r ${quote.gradient} w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl shadow-lg`}>
                                        "
                                    </div>
                                </div>
                                <p
                                    className={`text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r ${quote.gradient} bg-clip-text text-transparent leading-relaxed`}
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    {quote.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
