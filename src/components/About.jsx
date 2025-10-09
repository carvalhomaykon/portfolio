import minhaFoto from "../assets/img-pv.jpeg";
import { FileDown } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center text-center max-h-screen px-6 bg-gray-50"
    >
      {/* IMAGEM */}
      <div className="max-w-50 max-h-50 rounded-full overflow-hidden shadow-xl border-4 border-blue-600 mb-3">
        <img
          src={minhaFoto}
          alt="Maykon Carvalho"
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXTO E BOTÕES */}
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Maykon Carvalho
        </h2>
        <p className="text-4xl text-gray-700 mb-5">
          <span className="text-blue-600 font-semibold">
            Full-Stack Developer
          </span>
        </p>

        {/* RESUMO */}
        <p className="text-lg text-gray-600 leading-relaxed mb-3">
          I'm a technology enthusiast and software developer. I am currently studying Information Systems at the Universidade Federal Rural da Amazônia (UFRA).
        </p>

        {/* BOTÕES */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-3">
          <a
            href="#"
            download
            className="bg-blue-600 text-white px-8 py-3 rounded-full shadow hover:bg-blue-700 transition flex gap-2 items-center"
          >
            <FileDown size={20}/> Download CV
          </a>

          <a
            href="#projects"
            className="bg-gray-800 text-white px-8 py-3 rounded-full shadow hover:bg-gray-900 transition"
          >
            Projects
          </a>
        </div>

        {/* REDES SOCIAIS */}
        <div className="flex justify-center gap-8 mt-8">
          {/* GitHub */}
          <a
            href="https://github.com/carvalhomaykon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61A3.18 3.18 0 0 0 3 17.84c-1.09-.75.08-.73.08-.73a2.52 2.52 0 0 1 1.84 1.24 2.54 2.54 0 0 0 3.47 1 2.53 2.53 0 0 1 .76-1.59c-2.66-.3-5.46-1.34-5.46-5.96a4.67 4.67 0 0 1 1.25-3.25 4.33 4.33 0 0 1 .12-3.21s1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0C16 4.46 17 4.78 17 4.78a4.33 4.33 0 0 1 .12 3.21 4.67 4.67 0 0 1 1.25 3.25c0 4.64-2.81 5.65-5.48 5.95a2.84 2.84 0 0 1 .8 2.2v3.26c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/maykon-carvalho-329853208"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.8-2.2 3.7-2.2 3.95 0 4.7 2.6 4.7 6v9.9h-4V15.5c0-2.1-.04-4.8-2.9-4.8-2.9 0-3.4 2.3-3.4 4.6V24h-4V8z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/maykon.car027/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm10 1a1 1 0 0 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2a3 3 0 1 1-.001 6.001A3 3 0 0 1 12 9z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}