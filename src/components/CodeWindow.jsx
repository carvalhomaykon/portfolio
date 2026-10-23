import { useId, useState } from "react";
import { Image, Workflow } from "lucide-react";
import ArchitectureDiagram from "./ArchitectureDiagram";
import ProjectPlaceholder from "./ProjectPlaceholder";

const tabs = [
    { id: "preview", label: "Preview", icon: Image },
    { id: "architecture", label: "Architecture", icon: Workflow },
];

// Variante do diagrama: "clean" ou "sketch" (estilo Excalidraw)
const DIAGRAM_VARIANT = "clean";

// Janela com duas vistas do projeto: o print e o fluxo da arquitetura
export default function CodeWindow({ project }) {
    const [activeTab, setActiveTab] = useState("preview");
    const [architectureSeen, setArchitectureSeen] = useState(false);
    const baseId = useId();

    const selectTab = (tabId) => {
        setActiveTab(tabId);
        if (tabId === "architecture") setArchitectureSeen(true);
    };

    return (
        <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_20px_40px_-24px_rgb(23_20_31_/_0.35)]">
            {/* Barra da janela com seletor de vistas */}
            <div className="flex items-center justify-between gap-3 border-b border-line bg-bg px-3.5 py-2">
                <div className="flex shrink-0 gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>

                <div
                    role="tablist"
                    aria-label={`${project.name} views`}
                    className="flex gap-1 rounded-full border border-line bg-line/50 p-1"
                >
                    {tabs.map((tab) => {
                        const selected = activeTab === tab.id;
                        const Icon = tab.icon;
                        const showHint = tab.id === "architecture" && !architectureSeen;
                        return (
                            <button
                                key={tab.id}
                                type="button"
                                role="tab"
                                id={`${baseId}-${tab.id}-tab`}
                                aria-selected={selected}
                                aria-controls={`${baseId}-${tab.id}-panel`}
                                onClick={() => selectTab(tab.id)}
                                className={`relative inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition sm:text-sm ${
                                    selected
                                        ? "bg-surface text-ink shadow-sm"
                                        : "text-muted hover:text-acai"
                                }`}
                            >
                                <Icon size={15} aria-hidden="true" />
                                {tab.label}

                                {/* Ponto pulsante até a arquitetura ser aberta */}
                                {showHint && (
                                    <span aria-hidden="true" className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                                        <span className="ping absolute inline-flex h-full w-full rounded-full bg-tucupi opacity-75" />
                                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-tucupi" />
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Conteúdo da vista ativa */}
            <div
                role="tabpanel"
                id={`${baseId}-${activeTab}-panel`}
                aria-labelledby={`${baseId}-${activeTab}-tab`}
                className="tab-in aspect-[16/10] overflow-hidden bg-surface"
                key={activeTab}
            >
                {activeTab === "preview" &&
                    (project.image ? (
                        <img
                            src={project.image}
                            alt={`${project.name} project screenshot`}
                            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <ProjectPlaceholder variant={project.placeholder} />
                    ))}

                {activeTab === "architecture" && (
                    <ArchitectureDiagram {...project.architecture} variant={DIAGRAM_VARIANT} />
                )}
            </div>
        </div>
    );
}
