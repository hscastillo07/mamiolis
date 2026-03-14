import { FEATURES } from '@/config/features';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { contactInfo } from '@/content/contact';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-32 md:pb-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3
                            className="text-3xl mb-4"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            ECOS & Mami Oli's
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Una terraza cultural donde sabores, idiomas y culturas se encuentran
                            para crear experiencias auténticas de intercambio.
                        </p>
                        {FEATURES.showFooterSocialLinks && (
                            <div className="flex gap-4">
                                <a href="#" aria-label="Facebook" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href={contactInfo.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" aria-label="X (Twitter)" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        )}
                    </div>

                    {/* ECOS Links */}
                    <div>
                        <h4 className="mb-4">ECOS</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Quiénes somos</a></li>
                            {FEATURES.showFooterEcosDetails && (
                                <>
                                    <li><a href="#" className="hover:text-white transition-colors">Cursos de español</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Cursos de inglés</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Inscripciones</a></li>
                                </>
                            )}
                        </ul>
                    </div>

                    {/* Mami Oli's Links */}
                    <div>
                        <h4 className="mb-4">Mami Oli's</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Nuestra historia</a></li>
                            {FEATURES.showFooterRestaurantDetails && (
                                <>
                                    <li><a href="#" className="hover:text-white transition-colors">Menú</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Reservaciones</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Eventos</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Catering</a></li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-800 pt-8 mb-8">
                    <div className="grid md:grid-cols-3 gap-6 text-gray-400">
                        <div>
                            <h5 className="text-white mb-2">📍 Ubicación</h5>
                            <p className="text-sm">CLL 26 #15-124&nbsp;&nbsp;MANGA,BOLIVAR<br /></p>
                        </div>
                        <div>
                            <h5 className="text-white mb-2">📞 Contacto</h5>
                            <p className="text-sm">WhatsApp: 300 5819898<br />info@ecos-mamiolis.com</p>
                        </div>
                        <div>
                            <h5 className="text-white mb-2">🕐 Horarios</h5>
                            <p className="text-sm">Lun - Sáb: 8:00 AM - 10:00 PM<br />Dom: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <p>© 2026 ECOS & Mami Oli's. Todos los derechos reservados.</p>
                    {FEATURES.showFooterLegalLinks && (
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
                            <a href="#" className="hover:text-white transition-colors">Términos de uso</a>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
}
