type SectionHeaderProps = {
    num: string;
    title: string;
}

export function SectionHeader({num, title}: SectionHeaderProps) {
    return (
        <div className="flex items-baseline gap-4">
            <span className="font-mono text-sm tracking-wider text-accent">
                {num}
            </span>
            <h2 className={"font-heading text-3xl font-bold tracking-tight sm:text-4xl"}>
                {title}
            </h2>
        </div>
    )
}