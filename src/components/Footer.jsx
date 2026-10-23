import { Phone, Mail, Linkedin, Github, InstagramIcon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-line bg-surface" id="footer">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:px-8 md:flex-row md:items-end md:justify-between">
                
                {/* Esquerda: Contatos */}
                <div className="flex flex-col gap-3 text-ink">
                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/5591991060218"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 font-display text-xl font-semibold transition-colors hover:text-acai sm:text-3xl"
                    >
                        <Phone size={20} className="shrink-0 text-acai" aria-hidden="true" />
                        <span>+55 (91) 991060218</span>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:carvalhomaykon566@gmail.com"
                        className="inline-flex items-center gap-3 font-display text-xl font-semibold [overflow-wrap:anywhere] transition-colors hover:text-acai select-text sm:text-3xl"
                        >
                        <Mail size={20} className="shrink-0 text-acai" aria-hidden="true" />
                        <span>carvalhomaykon566@gmail.com</span>
                    </a>
                </div>

                {/* Direita: Redes sociais */}
                <div className="flex items-center gap-2">
                    <a
                        href="https://www.linkedin.com/in/maykon-carvalho-329853208"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition hover:-translate-y-0.5 hover:border-acai hover:text-acai"
                    >
                        <Linkedin size={20} aria-hidden="true" />
                    </a>
                    <a
                        href="https://www.instagram.com/maykon.car027/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition hover:-translate-y-0.5 hover:border-acai hover:text-acai"
                    >
                        <InstagramIcon size={20} aria-hidden="true" />
                    </a>
                    <a
                        href="https://github.com/carvalhomaykon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition hover:-translate-y-0.5 hover:border-acai hover:text-acai"
                    >
                        <Github size={20} aria-hidden="true" />
                    </a>
                </div>
            </div>

            {/* Rodapé inferior */}
            <div className="w-full border-t border-line py-5">
                <div className="mx-auto max-w-6xl px-4 text-sm text-muted sm:px-8">
                    © 2025 <a href="https://www.linkedin.com/in/maykon-carvalho-329853208" className="text-ink hover:underline" target="_blank" rel="noopener noreferrer">CarvalhoMaykon</a>. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
