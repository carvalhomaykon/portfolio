import { FileDown } from 'lucide-react';
import curriculo from "../assets/Curriculo Maykon Carvalho - Fullstack.pdf"
import CodeMonitor from "./CodeMonitor";

export default function About() {
  const socials = [
    { label: "GitHub", href: "https://github.com/carvalhomaykon", path: "M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61A3.18 3.18 0 0 0 3 17.84c-1.09-.75.08-.73.08-.73a2.52 2.52 0 0 1 1.84 1.24 2.54 2.54 0 0 0 3.47 1 2.53 2.53 0 0 1 .76-1.59c-2.66-.3-5.46-1.34-5.46-5.96a4.67 4.67 0 0 1 1.25-3.25 4.33 4.33 0 0 1 .12-3.21s1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0C16 4.46 17 4.78 17 4.78a4.33 4.33 0 0 1 .12 3.21 4.67 4.67 0 0 1 1.25 3.25c0 4.64-2.81 5.65-5.48 5.95a2.84 2.84 0 0 1 .8 2.2v3.26c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/maykon-carvalho-329853208", path: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.8-2.2 3.7-2.2 3.95 0 4.7 2.6 4.7 6v9.9h-4V15.5c0-2.1-.04-4.8-2.9-4.8-2.9 0-3.4 2.3-3.4 4.6V24h-4V8z" },
    { label: "Instagram", href: "https://www.instagram.com/maykon.car027/", path: "M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm10 1a1 1 0 0 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2a3 3 0 1 1-.001 6.001A3 3 0 0 1 12 9z" },
  ];

  // Atraso de entrada de cada bloco do hero, em sequência
  const step = (index) => ({ animationDelay: `${index * 110}ms` });

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Manchas de cor animadas no fundo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora absolute -top-24 -left-24 h-96 w-96 rounded-full bg-acai/15 blur-3xl" />
        <div className="aurora absolute top-40 right-0 h-80 w-80 rounded-full bg-tucupi/20 blur-3xl" style={{ animationDelay: "-8s" }} />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pt-32 pb-20 sm:px-8 md:grid-cols-[1.1fr_1fr] md:pt-40 md:pb-28">
        {/* TEXTO E BOTÕES */}
        <div>
          <h1 className="hero-in font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-7xl" style={step(0)}>
            Maykon Carvalho
          </h1>

          <p className="hero-in mt-5 font-display text-2xl font-semibold text-acai sm:text-3xl" style={step(1)}>
            <span className="underline-draw">Full-Stack Developer</span>
          </p>

          {/* RESUMO */}
          <p className="hero-in mt-6 max-w-[34rem] text-lg leading-relaxed text-muted" style={step(2)}>
            I'm a technology enthusiast and software developer. I am currently studying Information Systems at the Federal Rural University of the Amazon (UFRA).
          </p>

          {/* BOTÕES */}
          <div className="hero-in mt-8 flex flex-col gap-3 sm:flex-row" style={step(3)}>
            <a
              href={curriculo}
              download="Resume Maykon Carvalho - Fullstack.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-acai px-7 py-3 font-medium text-white shadow-[0_10px_24px_-10px_rgb(91_42_134_/_0.7)] transition hover:-translate-y-0.5 hover:bg-ink"
            >
              <FileDown size={20} aria-hidden="true" /> Download CV
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-line bg-surface px-7 py-3 font-medium text-ink transition hover:-translate-y-0.5 hover:border-acai hover:text-acai"
            >
              Projects
            </a>
          </div>

          {/* REDES SOCIAIS */}
          <div className="hero-in mt-10 flex gap-3" style={step(4)}>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-muted transition hover:-translate-y-0.5 hover:border-acai hover:text-acai"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* COMPUTADOR ANIMADO */}
        <div className="hero-in" style={step(3)}>
          <CodeMonitor />
        </div>
      </div>
    </section>
  );
}
