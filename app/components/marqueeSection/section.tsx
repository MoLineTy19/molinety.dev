import {ScrollVelocityContainer, ScrollVelocityRow} from "@/components/ui/scroll-based-velocity";

export default function MarqueeSection() {
    const words = [
        "DOCKER",
        "TYPESCRIPT",
        "NEXT.JS",
        "POSTGRESQL",
        "PYTHON",
        "BOTS",
        "EXPRESS.JS",
        "REDIS",
        "JAVASCRIPT",
        "TAILWIND",
        "REACT",
        "SCRIPT",
        "FASTAPI",
        "NODE.JS",
        "AIOGRAM",
        "GIT",
        "SQLITE",
        "PlAYWRIGHT",
        "HTML5",
        "TELETHON",
        "CI/CD",
        "CSS3",
        "SCHACN/UI",
        "GITHUB",
        "PARSING",
        "NGINX",
        "REST API"
    ];


    return (
        <section className="flex flex-col border-t border-b border-gray-500/30 -mx-20 py-4">
            <ScrollVelocityContainer className="font-medium md:text-5xl">
                <ScrollVelocityRow baseVelocity={2} direction={1} scrollReactivity={false}>
                    {words.join(" ")}
                </ScrollVelocityRow>
                <ScrollVelocityRow baseVelocity={2} direction={-1} scrollReactivity={false}>
                    {words.join(" ")}
                </ScrollVelocityRow>
            </ScrollVelocityContainer>
        </section>
    )
}