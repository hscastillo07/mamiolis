export function Experiences() {
    const experiences = [
        {
            icon: '☕',
            title: 'Café con Idiomas',
            description: 'Sesiones informales donde practicar conversación mientras disfrutas de un café.',
            color: 'from-amber-500 to-orange-500',
            bgColor: 'bg-amber-50',
            borderColor: 'border-amber-200'
        },
        {
            icon: '💬',
            title: 'Conversaciones Interculturales',
            description: 'Espacios de diálogo donde diferentes culturas y perspectivas se encuentran.',
            color: 'from-purple-500 to-pink-500',
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-200'
        },
        {
            icon: '🎭',
            title: 'Eventos Culturales',
            description: 'Música en vivo, noches de cine, y celebraciones de tradiciones de todo el mundo.',
            color: 'from-rose-500 to-red-500',
            bgColor: 'bg-rose-50',
            borderColor: 'border-rose-200'
        },
        {
            icon: '📚',
            title: 'Club de Lectura',
            description: 'Lee y discute libros en diferentes idiomas con otros amantes de la literatura.',
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200'
        },
        {
            icon: '🍴',
            title: 'Cenas Temáticas',
            description: 'Noches especiales dedicadas a la gastronomía de diferentes países.',
            color: 'from-emerald-500 to-teal-500',
            bgColor: 'bg-emerald-50',
            borderColor: 'border-emerald-200'
        },
        {
            icon: '🎨',
            title: 'Talleres Creativos',
            description: 'Clases de cocina, arte, música y más, todo en ambiente multicultural.',
            color: 'from-indigo-500 to-violet-500',
            bgColor: 'bg-indigo-50',
            borderColor: 'border-indigo-200'
        }
    ];

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-[#F0FFF4] to-[#FFFAF5]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="text-violet-600 text-sm tracking-widest uppercase">Experiencias</span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Vive la cultura en cada encuentro
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Más que clases y comidas, ofrecemos experiencias que conectan personas y culturas
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className={`${experience.bgColor} ${experience.borderColor} border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group`}
                        >
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {experience.icon}
                            </div>
                            <h3
                                className="text-2xl mb-3 text-gray-900"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                {experience.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {experience.description}
                            </p>
                            <div className={`mt-6 h-1 w-16 bg-gradient-to-r ${experience.color} rounded-full group-hover:w-full transition-all duration-500`}></div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Ver calendario de eventos
                    </button>
                </div>
            </div>
        </section>
    );
}
