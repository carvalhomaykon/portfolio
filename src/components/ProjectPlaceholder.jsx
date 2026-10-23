// Esboço da interface para projetos que ainda não têm print
function SolarSketch() {
    return (
        <div className="flex h-full gap-3 bg-bg p-4">
            {/* Menu lateral */}
            <div className="hidden w-1/5 flex-col gap-2 rounded-lg bg-surface p-3 sm:flex">
                <span className="h-2 w-3/4 rounded-full bg-acai/70" />
                <span className="mt-2 h-1.5 w-full rounded-full bg-line" />
                <span className="h-1.5 w-5/6 rounded-full bg-line" />
                <span className="h-1.5 w-2/3 rounded-full bg-line" />
            </div>

            <div className="flex flex-1 flex-col gap-3">
                {/* Indicadores */}
                <div className="grid grid-cols-3 gap-3">
                    {["kWh", "kWp", "PR"].map((label) => (
                        <div key={label} className="rounded-lg bg-surface p-2.5">
                            <span className="block text-[10px] text-muted">{label}</span>
                            <span className="mt-1.5 block h-2 w-2/3 rounded-full bg-ink/15" />
                        </div>
                    ))}
                </div>

                {/* Gráfico de geração prevista */}
                <div className="flex-1 rounded-lg bg-surface p-3">
                    <svg viewBox="0 0 300 110" preserveAspectRatio="none" className="h-full w-full">
                        <path
                            d="M0 90 C 30 85, 45 40, 75 45 S 120 95, 150 70 S 200 15, 230 30 S 275 70, 300 50 L 300 110 L 0 110 Z"
                            fill="var(--color-tucupi)"
                            opacity="0.18"
                        />
                        <path
                            d="M0 90 C 30 85, 45 40, 75 45 S 120 95, 150 70 S 200 15, 230 30 S 275 70, 300 50"
                            fill="none"
                            stroke="var(--color-tucupi)"
                            strokeWidth="3"
                            vectorEffect="non-scaling-stroke"
                        />
                        <path
                            d="M0 95 C 35 92, 50 55, 80 58 S 125 98, 155 80 S 205 35, 235 45 S 280 80, 300 65"
                            fill="none"
                            stroke="var(--color-acai)"
                            strokeWidth="2"
                            strokeDasharray="5 5"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

function ResumeSketch() {
    return (
        <div className="flex h-full gap-4 bg-bg p-4">
            {/* Formulário */}
            <div className="hidden w-2/5 flex-col gap-2.5 rounded-lg bg-surface p-3 sm:flex">
                {[0, 1, 2, 3].map((field) => (
                    <div key={field}>
                        <span className="block h-1.5 w-1/3 rounded-full bg-muted/40" />
                        <span className="mt-1.5 block h-5 rounded-md border border-line" />
                    </div>
                ))}
                <span className="mt-auto h-6 w-1/2 rounded-full bg-acai" />
            </div>

            {/* Currículo gerado */}
            <div className="mx-auto flex aspect-[3/4] h-full flex-col gap-2 rounded-md bg-surface p-4 shadow-sm">
                <span className="h-3 w-1/2 rounded-full bg-ink/80" />
                <span className="h-1.5 w-1/3 rounded-full bg-acai/70" />
                <span className="mt-2 h-px w-full bg-line" />
                {[0, 1].map((block) => (
                    <div key={block} className="mt-1 flex flex-col gap-1.5">
                        <span className="h-2 w-1/4 rounded-full bg-tucupi" />
                        <span className="h-1.5 w-full rounded-full bg-line" />
                        <span className="h-1.5 w-5/6 rounded-full bg-line" />
                        <span className="h-1.5 w-2/3 rounded-full bg-line" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function ProjectPlaceholder({ variant }) {
    return (
        <div className="relative h-full" role="img" aria-label="Interface sketch: project in development">
            {variant === "solar" ? <SolarSketch /> : <ResumeSketch />}
        </div>
    );
}
