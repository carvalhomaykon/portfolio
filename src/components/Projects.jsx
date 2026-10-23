import imgFoodMonitor from "../assets/img-projects/foodmonitor.png";
import imgEcotur from "../assets/img-projects/ecotur.png";
import imgBingoFacil from "../assets/img-projects/bingofacil.png";
import { useState } from "react";
import CodeWindow from "./CodeWindow";

// O primeiro projeto é o destaque; "result" fica vazio até ser preenchido
const projectsData = [
    {
        name: "B!ngoFácil",
        tagline: "an online platform to create, sell and run bingo games",
        tag: "Personal project",
        period: "Sep 2025 - Present",
        problem: "Bingo is widely used by communities, especially Catholic ones, to raise funds, but the in-person format limits the audience and reduces card-sale revenue.",
        solution: "A web platform to create and manage bingo projects, generate cards as PDF, sell cards online and run the draw in real time.",
        result: "",
        technologies: ["Java", "Spring Boot", "Spring Security (JWT)", "Angular", "PostgreSQL", "H2", "JUnit", "Mockito", "Maven"],
        links: [
            { label: "Backend", href: "https://github.com/carvalhomaykon/bingo-facil" },
            { label: "Frontend", href: "https://github.com/carvalhomaykon/bingo-facil-frontend" },
        ],
        url: "github.com/carvalhomaykon/bingo-facil",
        architecture: {
            nodes: [
                { title: "Angular", subtitle: "Web interface", kind: "client" },
                { title: "Spring Boot", subtitle: "REST API · Security", kind: "server" },
                { title: "PostgreSQL", subtitle: "H2 for tests", kind: "data" },
            ],
            edges: ["REST + JWT", "JPA"],
            note: "Tests with JUnit + Mockito · Build with Maven",
        },
        image: imgBingoFacil,
    },
    {
        name: "FoodMonitor",
        tagline: "tracking expiration dates to cut food waste",
        tag: "Academic project",
        period: "Aug 2025 - Oct 2025",
        role: "Full-stack developer in a team of six",
        problem: "Restaurants, supermarkets and other food businesses discard products every day as they reach their expiration date, causing financial losses and environmental impact.",
        solution: "A system to register products with category, expiration date and quantity, alert users about items close to expiring, and search products by name, category and expiration date.",
        result: "",
        technologies: ["Python", "Django", "Tailwind CSS", "JavaScript", "MySQL", "Docker/Docker-Compose", "Jenkins", "pytest"],
        links: [{ label: "GitHub", href: "https://github.com/carvalhomaykon/Monitoramento-Alimentos" }],
        url: "github.com/carvalhomaykon/Monitoramento-Alimentos",
        architecture: {
            nodes: [
                { title: "Browser", subtitle: "HTML · Tailwind CSS", kind: "client" },
                { title: "Django", subtitle: "Python web app", kind: "server" },
                { title: "MySQL", subtitle: "Database", kind: "data" },
            ],
            edges: ["HTTP", "Django ORM"],
            note: "Runs with Docker Compose · CI with Jenkins · Tests with pytest",
        },
        image: imgFoodMonitor,
    },
    {
        name: "Ecotur",
        tagline: "sustainable tourism guide for Belém, Pará",
        tag: "Academic project",
        period: "Oct 2024 - Dec 2024",
        problem: "Tourism in Belém often overlooks sustainable practices, and visitors lack a single place to plan eco-friendly visits to the city's attractions.",
        solution: "A web platform that brings together Belém's tourist attractions, local tour guides, tour packages and visitor reviews, encouraging ecological practices.",
        result: "",
        technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "SQLite"],
        links: [{ label: "GitHub", href: "https://github.com/carvalhomaykon/ecotur" }],
        url: "github.com/carvalhomaykon/ecotur",
        architecture: {
            nodes: [
                { title: "Browser", subtitle: "HTML · CSS · JS", kind: "client" },
                { title: "Django", subtitle: "Python web app", kind: "server" },
                { title: "SQLite", subtitle: "Database", kind: "data" },
            ],
            edges: ["HTTP", "Django ORM"],
        },
        image: imgEcotur,
    },
    {
        name: "SolarPrediction",
        tagline: "forecasting photovoltaic generation with machine learning",
        tag: "Academic project",
        period: "Apr 2026 - Present",
        inDevelopment: true,
        problem: "Estimating how much energy a solar plant will generate is hard, which makes it difficult to evaluate a plant's potential and plan around weather variations.",
        solution: "A platform that predicts photovoltaic generation from historical data and location, compares machine learning models (Random Forest, Gradient Boosting, SVM, ELM, ANN), shows daily, monthly or yearly forecasts, runs what-if simulations on weather variables and reports model error metrics (RMSE, MAE, R²).",
        result: "",
        technologies: ["Python", "FastAPI", "scikit-learn", "Pandas", "NumPy", "React", "Recharts"],
        links: [{ label: "GitHub", href: "https://github.com/carvalhomaykon/solar-forecast-ai-interface" }],
        url: "github.com/carvalhomaykon/solar-forecast-ai-interface",
        architecture: {
            nodes: [
                { title: "React", subtitle: "Charts with Recharts", kind: "client" },
                { title: "FastAPI", subtitle: "Python API", kind: "server" },
                { title: "ML models", subtitle: "scikit-learn", kind: "data" },
            ],
            edges: ["REST", "Pandas · NumPy"],
            note: "Random Forest · Gradient Boosting · SVM · ELM · ANN",
        },
        placeholder: "solar",
    },
    {
        name: "Resume Builder",
        workingTitle: true,
        tagline: "create and store resumes online",
        tag: "Personal project",
        period: "Planned",
        inDevelopment: true,
        problem: "Keeping resumes as .docx files means hunting for the right file and editing documents by hand every time a new resume is needed.",
        solution: "A web app where resumes are created and stored in a database, so anyone can open the site and generate a resume without handling .docx files.",
        result: "",
        technologies: ["Java", "Spring Boot", "Angular", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
        links: [],
        url: "resume-builder · coming soon",
        architecture: {
            nodes: [
                { title: "Angular", subtitle: "Tailwind CSS", kind: "client" },
                { title: "Spring Boot", subtitle: "REST API", kind: "server" },
                { title: "Database", subtitle: "Stored resumes", kind: "data" },
            ],
            edges: ["REST", ""],
        },
        placeholder: "resume",
    },
];

// Cada filtro mostra os projetos que usam ao menos uma das tecnologias listadas
const filters = [
    { label: "All", technologies: [] },
    { label: "Java", technologies: ["Java"] },
    { label: "Python", technologies: ["Python"] },
    { label: "Spring Boot", technologies: ["Spring Boot"] },
    { label: "Django", technologies: ["Django"] },
    { label: "Angular", technologies: ["Angular"] },
    { label: "React", technologies: ["React"] },
    { label: "Machine Learning", technologies: ["scikit-learn"] },
];

function GithubIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61A3.18 3.18 0 0 0 3 17.84c-1.09-.75.08-.73.08-.73a2.52 2.52 0 0 1 1.84 1.24 2.54 2.54 0 0 0 3.47 1 2.53 2.53 0 0 1 .76-1.59c-2.66-.3-5.46-1.34-5.46-5.96a4.67 4.67 0 0 1 1.25-3.25 4.33 4.33 0 0 1 .12-3.21s1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0C16 4.46 17 4.78 17 4.78a4.33 4.33 0 0 1 .12 3.21 4.67 4.67 0 0 1 1.25 3.25c0 4.64-2.81 5.65-5.48 5.95a2.84 2.84 0 0 1 .8 2.2v3.26c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
        </svg>
    );
}

function ProjectDetails({ project, featured }) {
    const rows = [
        { label: "Problem", text: project.problem, color: "text-[#a0610c]" },
        { label: "Solution", text: project.solution, color: "text-acai" },
        { label: "Result", text: project.result, color: "text-emerald-700" },
    ].filter((row) => row.text);

    return (
        <div className="flex flex-col">
            {/* Tag, período e status */}
            <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="rounded-full bg-acai/10 px-3 py-1 font-medium text-acai">{project.tag}</span>
                {project.inDevelopment && (
                    <span className="rounded-full bg-tucupi/20 px-3 py-1 font-medium text-[#7a4a06]">In development</span>
                )}
                <span className="text-muted">{project.period}</span>
            </div>

            <h3 className={`mt-4 font-display font-bold tracking-tight text-ink ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
                {project.name}
                {project.workingTitle && <span className="font-normal text-muted"> (working title)</span>}
                <span className="font-semibold text-muted">: {project.tagline}</span>
            </h3>

            {project.role && <p className="mt-2 text-sm text-muted">{project.role}</p>}

            {/* Problema, solução e resultado */}
            <dl className="mt-5 grid gap-3">
                {rows.map((row) => (
                    <div key={row.label} className="grid gap-1 sm:grid-cols-[6rem_1fr] sm:gap-4">
                        <dt className={`font-display text-sm font-semibold ${row.color}`}>{row.label}</dt>
                        <dd className="leading-relaxed text-ink/80">{row.text}</dd>
                    </div>
                ))}
            </dl>

            {/* Tecnologias */}
            <ul className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                    <li key={technology} className="rounded-full border border-line bg-bg px-3 py-1 text-sm text-muted">
                        {technology}
                    </li>
                ))}
            </ul>

            {/* Links */}
            <div className="mt-6 flex flex-wrap gap-3">
                {project.links.length > 0 ? (
                    project.links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-acai"
                        >
                            <GithubIcon />
                            {link.label}
                        </a>
                    ))
                ) : (
                    <span className="text-sm text-muted">Repository coming soon</span>
                )}
            </div>
        </div>
    );
}

export default function ProjectStack() {
    const [activeFilter, setActiveFilter] = useState(filters[0]);

    const visibleProjects = projectsData.filter(
        (project) =>
            activeFilter.technologies.length === 0 ||
            activeFilter.technologies.some((technology) => project.technologies.includes(technology))
    );
    const [featured, ...others] = visibleProjects;

    return (
        <div className="flex flex-col gap-6">
            {/* Filtro por tecnologia */}
            <div data-reveal className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by technology">
                {filters.map((filter) => {
                    const pressed = filter.label === activeFilter.label;
                    return (
                        <button
                            key={filter.label}
                            type="button"
                            aria-pressed={pressed}
                            onClick={() => setActiveFilter(filter)}
                            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                                pressed
                                    ? "border-acai bg-acai text-white"
                                    : "border-line bg-surface text-muted hover:border-acai hover:text-acai"
                            }`}
                        >
                            {filter.label}
                        </button>
                    );
                })}
            </div>

            <p className="sr-only" aria-live="polite">
                {visibleProjects.length} projects shown
            </p>

            {/* Projeto principal (o primeiro da lista filtrada) */}
            <article
                key={`${activeFilter.label}-${featured.name}`}
                className="tab-in group grid items-center gap-8 rounded-3xl [&>*]:min-w-0 border border-line bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgb(91_42_134_/_0.4)] sm:p-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12"
            >
                <ProjectDetails project={featured} featured />
                <div className="order-first lg:order-none">
                    <CodeWindow project={featured} />
                </div>
            </article>

            {/* Demais projetos */}
            {others.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2">
                    {others.map((project, index) => (
                        <article
                            key={`${activeFilter.label}-${project.name}`}
                            style={{ animationDelay: `${(index + 1) * 80}ms` }}
                            className="tab-in group flex min-w-0 flex-col gap-6 rounded-3xl border border-line bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgb(91_42_134_/_0.4)] sm:p-6"
                        >
                            <CodeWindow project={project} />
                            <ProjectDetails project={project} />
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}
