import { AnimatedSection } from "@/app/components/animated-section";
import { SectionHeader } from "@/app/components/about/section-header";
import { ContactLinks } from "./contact-links";

/**
 * Секция «Контакт».
 * Центрированная карточка с призывом и тремя каналами связи.
 */
export function Contact() {
    return (
        <section
            id="contact"
            className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-8 lg:px-12"
        >
            <AnimatedSection>
                <SectionHeader num="04" title="Контакт" />
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="mt-12">
                <div className="relative overflow-hidden rounded-2xl border border-border-light bg-surface px-6 py-16 text-center sm:px-10">
                    <h3 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Готов обсудить проект и бюджет
                    </h3>
                    <p className="mx-auto mt-3 max-w-md text-secondary">
                        Беру заказы от частных лиц и компаний. Напишите, что нужно сделать, и обсудим детали.
                    </p>

                    <div className="mt-9">
                        <ContactLinks />
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
}