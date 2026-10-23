import { useEffect, useState } from "react";

// Código exibido na tela, dividido em trechos para o realce de sintaxe
const codeTokens = [
    { text: "const ", className: "text-acai" },
    { text: "maykon", className: "text-ink" },
    { text: " = {\n", className: "text-muted" },
    { text: "  role", className: "text-sky-700" },
    { text: ": ", className: "text-muted" },
    { text: '"Full-Stack Developer"', className: "text-emerald-700" },
    { text: ",\n", className: "text-muted" },
    { text: "  studying", className: "text-sky-700" },
    { text: ": ", className: "text-muted" },
    { text: '"Information Systems @ UFRA"', className: "text-emerald-700" },
    { text: ",\n", className: "text-muted" },
    { text: "  stack", className: "text-sky-700" },
    { text: ": [", className: "text-muted" },
    { text: '"Python"', className: "text-emerald-700" },
    { text: ", ", className: "text-muted" },
    { text: '"Java"', className: "text-emerald-700" },
    { text: ", ", className: "text-muted" },
    { text: '"React"', className: "text-emerald-700" },
    { text: ", ", className: "text-muted" },
    { text: '"Spring Boot"', className: "text-emerald-700" },
    { text: "],\n};", className: "text-muted" },
];

const totalLength = codeTokens.reduce((sum, token) => sum + token.text.length, 0);

const floatingTags = [
    { label: "React", position: "-left-4 top-10 sm:-left-10", delay: "0s" },
    { label: "Spring Boot", position: "-right-2 -top-3 sm:-right-8 sm:top-1/3", delay: "1.5s" },
    { label: "Python", position: "left-6 -bottom-2 sm:left-10", delay: "3s" },
];

function useTypedLength() {
    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const [length, setLength] = useState(prefersReducedMotion ? totalLength : 0);

    useEffect(() => {
        if (prefersReducedMotion) return;

        let intervalId;
        const start = setTimeout(() => {
            intervalId = setInterval(() => {
                setLength((current) => Math.min(current + 1, totalLength));
            }, 38);
        }, 900);

        return () => {
            clearTimeout(start);
            clearInterval(intervalId);
        };
    }, [prefersReducedMotion]);

    return length;
}

export default function CodeMonitor() {
    const typedLength = useTypedLength();

    let remaining = typedLength;
    const visibleTokens = codeTokens.map((token) => {
        const text = token.text.slice(0, Math.max(0, remaining));
        remaining -= token.text.length;
        return { ...token, text };
    });

    return (
        <div className="relative mx-auto w-full max-w-lg" role="img" aria-label="Computer screen typing a short code snippet about Maykon">
            {/* Monitor */}
            <div className="rounded-2xl border border-line bg-ink p-2.5 shadow-[0_30px_60px_-30px_rgb(91_42_134_/_0.55)]">
                <div className="overflow-hidden rounded-lg bg-surface">
                    {/* Barra da janela */}
                    <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                        <span className="ml-3 font-mono text-xs text-muted">maykon.js</span>
                    </div>

                    {/* Código */}
                    <pre aria-hidden="true" className="min-h-[11.5rem] overflow-hidden whitespace-pre-wrap px-4 py-4 font-mono text-[12px] leading-6 sm:text-[13px]">
                        <code>
                            {visibleTokens.map((token, index) => (
                                <span key={index} className={token.className}>
                                    {token.text}
                                </span>
                            ))}
                            <span className="caret ml-px inline-block h-[1.1em] w-[2px] translate-y-[3px] bg-acai" />
                        </code>
                    </pre>
                </div>
            </div>

            {/* Suporte */}
            <div className="mx-auto h-8 w-16 bg-gradient-to-b from-ink to-[#2b2536]" />
            <div className="mx-auto h-2.5 w-40 rounded-full bg-ink" />

            {/* Tags flutuantes */}
            {floatingTags.map((tag) => (
                <span
                    key={tag.label}
                    aria-hidden="true"
                    className={`float absolute ${tag.position} rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-acai shadow-md`}
                    style={{ animationDelay: tag.delay }}
                >
                    {tag.label}
                </span>
            ))}
        </div>
    );
}
