import { useEffect } from "react";

// Adiciona a classe "is-visible" aos elementos com [data-reveal] quando entram na tela
export default function useReveal() {
    useEffect(() => {
        const elements = document.querySelectorAll("[data-reveal]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);
}
