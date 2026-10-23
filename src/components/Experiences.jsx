import { useEffect, useRef } from "react";

export default function Experiences () {
    const listExperiences = [
        {
            name: "Software Development Intern",
            location: "Regional Council of Medicine of the State of Pará (CRM-PA)",
            period: "Feb 2026 - Present",
            abstract:
                "Develop software solutions following development best practices, using Python, Java, PHP and JavaScript. Apply knowledge of AI and LLMs to internal solutions. Build user interfaces with React and Angular, and work with queue systems, containers and CI/CD pipelines using Git/GitHub. Currently studying and applying cloud computing implementations using AWS.",
            skills: ["Python", "Java", "PHP", "JavaScript", "Spring Boot", "FastAPI", "React", "Angular", "Kafka", "Redis", "Docker/Docker-Compose", "MySQL", "PostgreSQL", "Vector Databases", "OpenAI", "LangChain", "Claude Code", "AWS", "Git/GitHub", "CI/CD"]
        },
        {
            name: "Monitor of Data Structure",
            location: "Federal Rural University of the Amazon (UFRA)",
            period: "2025 - Present",
            abstract:
            "Mentored students in the Data Structures course, aiding their understanding of core concepts and practical problem-solving. Supported project-based activities and developed Java examples for structures like lists, stacks, queues, trees and graphs. Focused on reinforcing theory and fostering logical reasoning and practical algorithm application.",
            skills: ["Java", "Git/GitHub"]
        },
        {
            name: "Trainee Developer Fullstack",
            location: "Renova Solar Engenharia",
            period: "2024 - 2025",
            abstract:
                "Developed full-stack web applications, emphasizing performance, scalability and user experience. Created modern, responsive interfaces, automated internal processes, and contributed to the continuous improvement of the company's systems.",
            skills: ["Python", "Django", "Flask", "FastAPI", "Java", "Spring Boot", "React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Git/GitHub", "Docker/Docker-Compose", "RabbitMQ"]
        },
        {
            name: "Trainee Data Analyst",
            location: "Renova Solar Engenharia",
            period: "2023 - 2024",
            abstract:
            "Managed and analyzed data to deliver strategic insights. Developed data collection automations using web scraping. Created user interfaces with Tkinter and built data visualizations in Power BI and Excel, significantly optimizing reporting and results presentations. Used Python libraries for data processing and analysis, directly supporting data-driven decision-making.",
            skills: ["Python", "Selenium", "Pandas", "Numpy", "PowerBI", "Excel"]
        },
    ];

    const listRef = useRef(null);
    const progressRef = useRef(null);

    // A linha da timeline cresce conforme a seção é rolada
    useEffect(() => {
        const update = () => {
            const list = listRef.current;
            if (!list || !progressRef.current) return;
            const { top, height } = list.getBoundingClientRect();
            const progress = Math.min(Math.max((window.innerHeight * 0.75 - top) / height, 0), 1);
            progressRef.current.style.transform = `scaleY(${progress})`;
        };

        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <div ref={listRef} className="relative">
            {/* Trilho e progresso da timeline */}
            <span aria-hidden="true" className="absolute top-2 bottom-0 left-[7px] w-[2px] rounded-full bg-line" />
            <span
                ref={progressRef}
                aria-hidden="true"
                className="absolute top-2 bottom-0 left-[7px] w-[2px] origin-top rounded-full bg-acai"
                style={{ transform: "scaleY(0)" }}
            />

            <ol className="relative">
                {listExperiences.map((experience) => (
                    <li key={experience.name} data-reveal className="relative pb-14 pl-10 last:pb-0 sm:pl-14">
                        {/* Marcador da timeline */}
                        <span
                            aria-hidden="true"
                            className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-[3px] border-acai bg-surface"
                        />

                        <div className="rounded-3xl border border-line bg-surface p-6 transition-shadow hover:shadow-[0_24px_48px_-24px_rgb(91_42_134_/_0.35)] sm:p-8">
                            <p className="text-sm font-medium text-acai">{experience.period}</p>

                            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                                {experience.name}
                            </h3>
                            <p className="mt-1 text-muted">{experience.location}</p>

                            <p className="mt-5 max-w-[68ch] leading-relaxed text-ink/80">
                                {experience.abstract}
                            </p>

                            <ul className="mt-5 flex flex-wrap gap-2">
                                {experience.skills.map((skill) => (
                                    <li key={skill} className="rounded-full border border-line bg-bg px-3 py-1 text-sm text-muted">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}
