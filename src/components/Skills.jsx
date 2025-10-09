export default function Skills() {
    // Definição das suas habilidades separadas por categoria
    const skillCategories = [
        {
            title: "Programming Language",
            color: "bg-indigo-600", // Cor Primária: Roxo/Índigo
            items: ["Python", "Java", "JavaScript", "TypeScript", "C", "SQL"]
        },
        {
            title: "Frameworks & Libraries",
            color: "bg-teal-500", // Cor Secundária: Verde-Azulado
            items: ["Django", "Spring Boot", "Django Rest Framework", "Flask", "FastAPI", "React", "Angular"]
        },
        {
            title: "Frontend & Styling",
            color: "bg-yellow-500", // Cor Terciária: Amarelo
            items: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
        },
        {
            title: "DevOps & Infrastructure",
            color: "bg-red-500", // Cor Quaternária: Vermelho
            items: ["Git", "GitHub", "GitHub Actions", "Docker/Docker-Compose", "RabbitMQ", "Kubernetes", "Nginx", "Linux"]
        },
        {
            title: "Database",
            color: "bg-gray-700", // Cor Neutra: Cinza Escuro
            items: ["MySQL", "PostgreSQL", "MongoDB", "H2"]
        },
        {
            title: "Methodology & Process",
            color: "bg-green-600", // Cor para Processos: Verde
            items: ["Scrum", "XP", "BDD (Behavior-Driven Development)"]
        }
    ];

    return (
        <div className="max-w-4xl mx-auto">

            <div className="space-y-10">
                {/* Mapeamento de todas as categorias de skills */}
                {skillCategories.map((category) => (
                    <div key={category.title} className="dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        
                        {/* Título da Categoria com Borda de Destaque */}
                        <h3 className={`text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 pb-2 text-left`} style={{ borderColor: category.color.replace('bg-', '#') }}>
                            {category.title}
                        </h3>

                        {/* Lista de Habilidades */}
                        <div className="flex flex-wrap gap-3">
                            {category.items.map((skill) => (
                                <span
                                    key={skill}
                                    className={`px-4 py-1 text-sm font-semibold text-white ${category.color} rounded-full shadow-md transition transform hover:scale-105`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}