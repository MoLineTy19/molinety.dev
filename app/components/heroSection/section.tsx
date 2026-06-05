import {TypingAnimation} from "@/components/ui/typing-animation";

export default function HeroSection() {
    return (
        <section className="flex h-screen flex-col justify-center items-center" id="home">

            <div className="items-center">
                <h1 className="text-[100px] font-black text-center text-orange-500">
                    {"<Данил/>"}
                </h1>
                <TypingAnimation className="text-[60px] font-bold tracking-widest content-center" words={["Full-stack разработчик", "Python & JS & TS", "4 ГОДА В IT"]} loop />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
                        <div className="w-1 h-2 bg-orange-400 rounded-full mt-2 animate-scrollDot" />
                    </div>
                </div>
            </div>
        </section>
    )
}