type Metric = { value: string; label: string };

const metrics: Metric[] = [
    { value: "4 года", label: "в коммерческой разработке" },
    { value: "3", label: "языка: Python, Go, TS" },
    { value: "100+", label: "парсеров и скриптов" },
];

export function Metrics() {
    return (
        <div className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-border-light pt-8">
            {metrics.map((m) => (
                <div key={m.label}>
                    <div className="font-heading text-4xl font-bold leading-none text-accent">
                        {m.value}
                    </div>
                    <div className="mt-1.5 text-sm text-muted">{m.label}</div>
                </div>
            ))}
        </div>
    );
}
