//import image_64cbde9cf37568216cd021855bbd9cf78db770ba from 'figma:asset/64cbde9cf37568216cd021855bbd9cf78db770ba.png'
//import image_806b8a262b0fb6c301a55f6f14851b8fa5fa7ac8 from 'figma:asset/806b8a262b0fb6c301a55f6f14851b8fa5fa7ac8.png'
import { ImageWithFallback } from './ImageWithFallback';
import placeholder from "../../../assets/mamiolis.jpeg";
export function Restaurant() {
    const foodImage = "https://images.unsplash.com/photo-1636600631971-f8e7dabb8c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbiUyMGFtZXJpY2FuJTIwZm9vZCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MjczNjA3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-[#FFF8F0] to-white">
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
                                "Sabor que evoluciona contigo"
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Mami Oli's es más que un restaurante. Es un espacio donde la <strong>cocina con raíces</strong>
                                se encuentra con la memoria y la cultura. Cada plato cuenta una historia,
                                cada sabor evoca un recuerdo.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Nuestra terraza se transforma en un lugar de encuentro donde la comida
                                casera y auténtica se convierte en el centro de conversaciones, risas
                                y nuevas amistades.
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

                        <button className="px-8 py-4 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Ver menú
                        </button>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="rounded-2xl overflow-hidden shadow-xl h-64">
                                <ImageWithFallback
                                    src={foodImage}
                                    fallbackSrc={placeholder}
                                    alt="Mami Oli's Restaurant"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-xl h-72">
                                <ImageWithFallback
                                    src={foodImage}
                                    fallbackSrc={placeholder}
                                    alt="Delicious food"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        <div className="mt-12">
                            <div className="rounded-2xl overflow-hidden shadow-xl h-96">
                                <ImageWithFallback
                                    src={foodImage}
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
