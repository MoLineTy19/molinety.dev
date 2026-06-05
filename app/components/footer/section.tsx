import Link from "next/link";
import {ShimmerButton} from "@/components/ui/shimmer-button";
import {ScrollButton} from "@/app/components/scrollButton";
import AnimatedSection from "@/app/components/animatedSection";

export default function Footer() {
    return (
        <section>
            <AnimatedSection>
                <div className="mt-20">
                    <h1 className="text-[100px] font-black mb-6">Давай без лишних слов?</h1>
                    <Link href="https://kwork.ru/user/molinety">
                        <ShimmerButton borderRadius="0" background={"rgba(255, 105, 0)"} className="text-4xl font-bold">{"Написать мне ->"}</ShimmerButton>
                    </Link>
                    <div className="mt-20 border-t p-5 flex justify-between">
                        <ScrollButton targetId={"home"}>
                            <span className="text-orange-500 font-bold text-xl">molinety</span>
                            <span className="font-bold text-xl">.dev</span>
                        </ScrollButton>
                        <span>
                                © 2026. Веб‑разработка, боты, AI — быстро, надёжно, под ключ.
                            </span>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    )
}