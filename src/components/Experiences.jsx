export default function Experiences () {
    const listExperiences = [
        {
            name: "Trainee Developer Fullstack",
            location: "Renova Solar Engenharia",
            period: "2024 - 2025",
            abstract:
                "Developed full-stack web applications, emphasizing performance, scalability and user experience. Created modern, responsive interfaces, automated internal processes, and contributed to the continuous improvement of the company's systems.",
            skills: ["Python", "Django", "Flask", "FastAPI", "Java", "Spring Boot", "React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Git/GitHub", "Docker/Docker-Compose", "RabbitMQ"]
        },
        {
            name: "Monitor of Data Structure",
            location: "Universidade Federal Rural da Amazônia (UFRA)",
            period: "2025 - Present",
            abstract:
            "Mentored students in the Data Structures course, aiding their understanding of core concepts and practical problem-solving. Supported project-based activities and developed Java examples for structures like lists, stacks, queues, trees and graphs. Focused on reinforcing theory and fostering logical reasoning and practical algorithm application.",
            skills: ["Java", "Git/GitHub"]
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

    return (
        <div className="max-w-4xl mx-auto">
            <div className="space-y-10">
                {listExperiences.map((experience) => (
                    <div key={experience.name} className="dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <p className="text-left"> {experience.period} </p>
                        <div className="flex justify-between">
                            <p className={`text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 pb-2 text-left`}>
                                {experience.name}
                            </p>
                            <p>{experience.location}</p>
                        </div>

                        <p>
                            <p className="text-justify mb-4">{experience.abstract}</p>
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {experience.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className={`px-4 py-1 text-sm font-semibold text-white rounded-full shadow-md transition transform hover:scale-105 bg-blue-600`}
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
