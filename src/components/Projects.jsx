import React from "react";
import imgFoodMonitor from "../assets/img-projects/foodmonitor.png";
import imgEcotur from "../assets/img-projects/ecotur.png";
import imgBingoFacil from "../assets/img-projects/bingofacil.png";

class Projects extends React.Component {
  render() {
    return (
        <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition p-5 max-w-3xl mx-auto my-6 dark:bg-gray-800 dark:border-gray-700">
            
            {/* DESCRIÇÃO E LINKS */}
            <div className="flex flex-col justify-between p-4 w-full md:w-2/3 text-center md:text-left">
                <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {this.props.titulo}
                </h5>

                <p className="text-gray-700 dark:text-gray-300 mb-6 text-justify">
                    {this.props.descricao}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                
                    {/* Botão GitHub */}
                    <a
                    href={this.props.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61A3.18 3.18 0 0 0 3 17.84c-1.09-.75.08-.73.08-.73a2.52 2.52 0 0 1 1.84 1.24 2.54 2.54 0 0 0 3.47 1 2.53 2.53 0 0 1 .76-1.59c-2.66-.3-5.46-1.34-5.46-5.96a4.67 4.67 0 0 1 1.25-3.25 4.33 4.33 0 0 1 .12-3.21s1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0C16 4.46 17 4.78 17 4.78a4.33 4.33 0 0 1 .12 3.21 4.67 4.67 0 0 1 1.25 3.25c0 4.64-2.81 5.65-5.48 5.95a2.84 2.84 0 0 1 .8 2.2v3.26c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
                        </svg>
                        GitHub
                    </a>

                {/* Botão YouTube ou Website 
                    <a
                    href={this.props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-full shadow hover:bg-gray-900 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M10 15V9l5 3-5 3zm12-3c0-2.5-.2-4-.5-5.2-.3-1.1-1.1-2-2.2-2.2C18 4.1 12 4 12 4s-6 .1-7.3.6c-1.1.3-1.9 1.1-2.2 2.2C2.1 8 2 9.5 2 12s.1 4 .5 5.2c.3 1.1 1.1 2 2.2 2.2C6 19.9 12 20 12 20s6-.1 7.3-.6c1.1-.3 1.9-1.1 2.2-2.2.3-1.2.5-2.7.5-5.2z" />
                        </svg>
                        {this.props.link.includes("youtube.com") ? "YouTube" : "Website"}
                    </a>
                */}
                </div>
            </div>

            {/* IMAGEM */}
            <img
                src={this.props.imagem}
                alt={`Imagem do projeto ${this.props.titulo}`}
                className="object-cover w-full md:w-90 h-70 md:h-auto rounded-lg md:rounded-none md:rounded-r-lg"
            />
        </div>
    );
  }
}

const projectsData = [
    {
        titulo: "B!ngoFácil",
        descricao: "It's a bingo management system developed with the goal of modernizing and expanding the reach of this traditional game.",
        imagem: imgBingoFacil,
        github: "https://github.com/carvalhomaykon/bingo-facil",
        link: ""
    },
    {
        titulo: "FoodMonitor",
        descricao: "A food waste monitoring system can assist in efficient inventory management, identifying products close to expiration and suggesting strategies to minimize losses.",
        imagem: imgFoodMonitor,
        github: "https://github.com/carvalhomaykon/Monitoramento-Alimentos",
        link: ""
    },
    {
        titulo: "Ecotur",
        descricao: "A system that transforms tourism into a more sustainable way to visit the tourist attractions of Belém, Pará. Encouraging ecological practices.",
        imagem: imgEcotur,
        github: "https://github.com/carvalhomaykon/ecotur",
        link: ""
    }
];

export default function ProjectStack() {
    return (
        <div>
            {projectsData.map((card) => {
                return <Projects key={card.titulo} {...card} /> 
            })}
        </div>
    );
}

