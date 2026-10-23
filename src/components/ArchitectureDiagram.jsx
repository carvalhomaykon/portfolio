import { useId } from "react";

// Cor da borda de cada camada do fluxo
const kindColors = {
    client: "var(--color-acai)",
    server: "var(--color-ink)",
    data: "var(--color-tucupi)",
};

const WIDTH = 640;
const HEIGHT = 400;
const NODE_WIDTH = 150;
const NODE_HEIGHT = 92;
const MARGIN = 24;
const CENTER_Y = 180;

// Diagrama do fluxo do projeto; variant "sketch" imita um desenho à mão (estilo Excalidraw)
export default function ArchitectureDiagram({ nodes, edges, note, variant = "clean" }) {
    const filterId = useId().replace(/:/g, "");
    const sketch = variant === "sketch";
    const gap = (WIDTH - MARGIN * 2 - NODE_WIDTH * nodes.length) / (nodes.length - 1);
    const nodeX = (index) => MARGIN + index * (NODE_WIDTH + gap);

    const labelFont = sketch ? "Caveat, cursive" : "var(--font-display)";
    const textFont = sketch ? "Caveat, cursive" : "var(--font-sans)";

    return (
        <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            className="h-full w-full"
            role="img"
            aria-label={`Architecture: ${nodes.map((node) => node.title).join(" to ")}`}
        >
            <defs>
                {/* Fundo pontilhado, como uma tela de desenho */}
                <pattern id={`dots-${filterId}`} width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="var(--color-line)" />
                </pattern>
                <marker id={`arrow-${filterId}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0 0 L10 5 L0 10 z" fill="var(--color-muted)" />
                </marker>
                {sketch && (
                    <filter id={`rough-${filterId}`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" />
                        <feDisplacementMap in="SourceGraphic" scale="3.5" />
                    </filter>
                )}
            </defs>

            <rect width={WIDTH} height={HEIGHT} fill={`url(#dots-${filterId})`} />

            {/* Setas entre as camadas */}
            {edges.map((edge, index) => {
                const x1 = nodeX(index) + NODE_WIDTH + 6;
                const x2 = nodeX(index + 1) - 6;
                return (
                    <g key={index}>
                        <line
                            x1={x1}
                            y1={CENTER_Y}
                            x2={x2}
                            y2={CENTER_Y}
                            stroke="var(--color-muted)"
                            strokeWidth="2"
                            strokeDasharray={sketch ? undefined : "6 5"}
                            markerEnd={`url(#arrow-${filterId})`}
                            filter={sketch ? `url(#rough-${filterId})` : undefined}
                            className={sketch ? undefined : "flow-line"}
                        />
                        <text
                            x={(x1 + x2) / 2}
                            y={CENTER_Y - 14}
                            textAnchor="middle"
                            fontFamily={textFont}
                            fontSize={sketch ? 17 : 12}
                            fill="var(--color-muted)"
                        >
                            {edge}
                        </text>
                    </g>
                );
            })}

            {/* Camadas */}
            {nodes.map((node, index) => {
                const x = nodeX(index);
                const y = CENTER_Y - NODE_HEIGHT / 2;
                const color = kindColors[node.kind];
                return (
                    <g key={node.title}>
                        <rect
                            x={x}
                            y={y}
                            width={NODE_WIDTH}
                            height={NODE_HEIGHT}
                            rx={sketch ? 6 : 16}
                            fill="var(--color-surface)"
                            stroke={color}
                            strokeWidth={sketch ? 2.2 : 1.6}
                            filter={sketch ? `url(#rough-${filterId})` : undefined}
                        />
                        {sketch && (
                            <rect
                                x={x + 2}
                                y={y - 1.5}
                                width={NODE_WIDTH - 3}
                                height={NODE_HEIGHT + 2}
                                rx="6"
                                fill="none"
                                stroke={color}
                                strokeWidth="1"
                                opacity="0.6"
                                filter={`url(#rough-${filterId})`}
                            />
                        )}
                        {!sketch && <rect x={x} y={y} width="5" height={NODE_HEIGHT} rx="2.5" fill={color} />}
                        <text
                            x={x + NODE_WIDTH / 2}
                            y={CENTER_Y - 4}
                            textAnchor="middle"
                            fontFamily={labelFont}
                            fontWeight={sketch ? 700 : 700}
                            fontSize={sketch ? 24 : 16}
                            fill="var(--color-ink)"
                        >
                            {node.title}
                        </text>
                        <text
                            x={x + NODE_WIDTH / 2}
                            y={CENTER_Y + 20}
                            textAnchor="middle"
                            fontFamily={textFont}
                            fontSize={sketch ? 17 : 12}
                            fill="var(--color-muted)"
                        >
                            {node.subtitle}
                        </text>
                    </g>
                );
            })}

            {/* Observação (testes, containers, CI) */}
            {note && (
                <text
                    x={WIDTH / 2}
                    y={HEIGHT - 52}
                    textAnchor="middle"
                    fontFamily={textFont}
                    fontSize={sketch ? 19 : 13}
                    fill="var(--color-muted)"
                >
                    {note}
                </text>
            )}
        </svg>
    );
}
