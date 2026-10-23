// Logo "Nokyam" (Maykon ao contrário): o "o" é uma seta de retorno
export default function Logo({ className = "" }) {
    return (
        <span
            role="img"
            aria-label="Nokyam"
            className={`group inline-flex items-center font-display font-extrabold leading-none tracking-[-0.04em] text-ink ${className}`}
        >
            <span aria-hidden="true">n</span>
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="4.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-[0.03em] h-[0.64em] w-[0.64em] translate-y-[0.04em] transition-transform duration-700 group-hover:-rotate-[360deg]"
            >
                <path d="M20 12a8 8 0 1 1-2.6-5.9" stroke="var(--color-acai)" />
                <path d="M18.4 2.6v4.2h-4.2" stroke="var(--color-tucupi)" />
            </svg>
            <span aria-hidden="true">kyam</span>
        </span>
    );
}
