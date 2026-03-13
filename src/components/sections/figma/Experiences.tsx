import { Carousel } from '../../ui/Carousel';
import { FEATURES } from '@/config/features';

export function Experiences() {
    const experiences = [
        {
            icon: '☕',
            title: 'Café con Idiomas',
            description: 'Encuentros informales donde estudiantes internacionales y locales practican idiomas mientras comparten un café y buenas conversaciones.',
            color: 'from-amber-500 to-orange-500',
            bgColor: 'bg-amber-50',
            borderColor: 'border-amber-200'
        },
        {
            icon: '💬',
            title: 'Pequeños momentos para compartir',
            description: 'Mientras se espera la comida, se disfrutan juegos de mesa que invitan a conversar, reír y romper el hielo con quienes comparten la mesa.',
            color: 'from-red-500 to-orange-500',
            bgColor: 'bg-red-50',
            borderColor: 'border-red-200'
        },
        {
            icon: '🌎',
            title: 'Conversaciones que cruzan fronteras',
            description: 'Un espacio espontáneo donde estudiantes internacionales y locales practican idiomas y descubren nuevas culturas a través de la conversación.',
            color: 'from-indigo-500 to-violet-500',
            bgColor: 'bg-indigo-50',
            borderColor: 'border-indigo-200'
        },
        {
            icon: '🎶',
            title: 'Ambiente que une personas',
            description: 'Algunas noches la terraza se llena de música suave que acompaña las conversaciones, las risas y el encuentro entre culturas.',
            color: 'from-fuchsia-500 to-purple-500',
            bgColor: 'bg-fuchsia-50',
            borderColor: 'border-fuchsia-200'
        },
        {
            icon: '🍷',
            title: 'Cocteles y charlas',
            description: 'Un lugar para sentarse, brindar y dejar que las conversaciones fluyan entre amigos, viajeros y nuevos encuentros.',
            color: 'from-sky-500 to-indigo-500',
            bgColor: 'bg-sky-50',
            borderColor: 'border-sky-200'
        },
        {
            icon: '🌙',
            title: 'Noches de Terraza',
            description: 'Cuando cae la noche, la terraza se convierte en un espacio íntimo donde el mundo parece más pequeño y las historias más cercanas.',
            color: 'from-rose-500 to-red-500',
            bgColor: 'bg-rose-50',
            borderColor: 'border-rose-200'
        },
        {
            icon: '📚',
            title: 'Club de Lectura',
            description: 'Lecturas y conversaciones en distintos idiomas para quienes disfrutan descubrir historias y perspectivas del mundo.',
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-yellow-50',
            borderColor: 'border-yellow-200'
        },
        {
            icon: '🍴',
            title: 'Cenas Temáticas',
            description: 'Noches dedicadas a la gastronomía de diferentes culturas, donde la comida se convierte en puente entre personas.',
            color: 'from-emerald-500 to-teal-500',
            bgColor: 'bg-emerald-50',
            borderColor: 'border-emerald-200'
        }
    ];

    return (
        <section id="experiencias" className="py-24 px-6 bg-gradient-to-b from-[#F0FFF4] to-[#FFFAF5] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="text-violet-600 text-sm tracking-widest uppercase">Experiencias</span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Vive el encuentro entre culturas
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Más que clases o comidas, Terraza Fusión es un espacio donde las personas se encuentran, conversan y descubren el mundo unas a través de otras.
                        Cada actividad es una invitación a compartir, aprender y disfrutar juntos.
                    </p>
                </div>

                <Carousel options={{ loop: true, align: 'start' }}>
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className={`${experience.bgColor} ${experience.borderColor} border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group h-full flex flex-col`}
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
                            <p className="text-gray-700 leading-relaxed flex-grow">
                                {experience.description}
                            </p>
                            <div className={`mt-6 h-1 w-16 bg-gradient-to-r ${experience.color} rounded-full group-hover:w-full transition-all duration-500`}></div>
                        </div>
                    ))}
                </Carousel>

                {FEATURES.showEventsCalendar && (
                    <div className="mt-16 text-center">
                        <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Ver calendario de eventos
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
