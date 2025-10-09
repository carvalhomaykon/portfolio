import { Phone, Mail, Linkedin, Github, InstagramIcon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-[90%] mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-700 rounded-2xl mt-10 mb-4" id="footer">
            <div className="max-w-screen-xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
                
                {/* Esquerda: Contatos */}
                <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-3 sm:space-y-0 text-sm text-gray-700 dark:text-gray-300">
                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/5591991060218"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 flex items-center gap-2 hover:bg-blue-700 transition-colors rounded-full text-white px-8 py-3 shadow"
                    >
                        <Phone size={18} />
                        <span>+55 (91) 991060218</span>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:carvalhomaykon566@gmail.com"
                        className="bg-blue-600 flex items-center gap-2 hover:bg-blue-700 transition-colors rounded-full text-white px-8 py-3 shadow select-text"
                        >
                        <Mail size={18} />
                        <span>carvalhomaykon566@gmail.com</span>
                    </a>
                </div>

                {/* Direita: Redes sociais */}
                <div className="flex items-center space-x-4 mt-6 md:mt-0">
                    <a
                        href="https://www.linkedin.com/in/maykon-carvalho-329853208"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-700 transition"
                    >
                        <Linkedin size={18} className="text-blue-700 dark:text-blue-400" />
                    </a>
                    <a
                        href="https://www.instagram.com/maykon.car027/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-pink-100 dark:hover:bg-gray-700 transition"
                    >
                        <InstagramIcon size={18} className="text-pink-600 dark:text-pink-400" />
                    </a>
                    <a
                        href="https://github.com/carvalhomaykon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                        <Github size={18} className="text-gray-800 dark:text-gray-200" />
                    </a>
                </div>
            </div>

            {/* Rodapé inferior */}
            <div className="w-full border-t border-gray-200 dark:border-gray-700 mt-4 py-4">
                <div className="max-w-screen-xl mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
                    © 2025 <a href="https://www.linkedin.com/in/maykon-carvalho-329853208" className="hover:underline font-bold" target="_blank">CarvalhoMaykon</a>. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
