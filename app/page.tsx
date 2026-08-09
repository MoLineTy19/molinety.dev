import { TopNav } from "@/app/components/nav/top-nav";
import { Hero } from "@/app/components/hero/hero";
import { About } from "@/app/components/about/about";
import {Projects} from "@/app/components/projects/projects";
import {Skills} from "@/app/components/skills/skills";
import {Contact} from "@/app/components/contact/contact";
import {Footer} from "@/app/components/footer/footer";

export default function Home() {
    return (
        <>
            <TopNav />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
