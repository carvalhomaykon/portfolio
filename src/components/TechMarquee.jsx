import { skillCategories } from "../data/skills";

// Todas as skills, sem repetição, em uma faixa que rola continuamente
const technologies = [...new Set(skillCategories.flatMap((category) => category.items))];

export default function TechMarquee() {
    return (
        <div
            className="marquee overflow-hidden border-y border-line bg-surface/70 py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            aria-label="Technologies"
        >
            <ul className="marquee-track flex w-max gap-3">
                {/* A lista é duplicada para a rolagem não ter emenda */}
                {[...technologies, ...technologies].map((technology, index) => (
                    <li
                        key={`${technology}-${index}`}
                        aria-hidden={index >= technologies.length}
                        className="flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-muted"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-tucupi" />
                        {technology}
                    </li>
                ))}
            </ul>
        </div>
    );
}
