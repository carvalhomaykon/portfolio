import { skillCategories } from "../data/skills";

export default function Skills() {
    return (
        <div className="grid gap-5 sm:grid-cols-2">
            {/* Mapeamento de todas as categorias de skills */}
            {skillCategories.map((category, index) => (
                <div
                    key={category.title}
                    data-reveal
                    style={{ transitionDelay: `${(index % 2) * 100}ms` }}
                    className="rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-[0_12px_32px_-16px_rgb(91_42_134_/_0.35)]"
                >

                    {/* Título da Categoria */}
                    <h3 className="font-display text-lg font-semibold text-ink">
                        {category.title}
                    </h3>

                    {/* Lista de Habilidades */}
                    <ul className="mt-4 flex flex-wrap gap-2">
                        {category.items.map((skill) => (
                            <li
                                key={skill}
                                className="rounded-full border border-line bg-bg px-3 py-1 text-sm text-muted transition-colors hover:border-acai hover:text-acai"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
