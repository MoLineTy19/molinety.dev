import {ScrollButton} from "@/app/components/scrollButton";
import Link from "next/link";

export default function TopNav() {
    return (
        <nav className="sticky top-0 z-50 border-b left-0 border-gray-300/15 flex justify-between w-full bg-black/5 backdrop-blur-md px-20 py-5 tracking-widest h-[6%] items-center">
            <ScrollButton targetId={"home"}>
                <span className="text-orange-500 font-bold text-xl">molinety</span>
                <span className="font-bold text-xl">.dev</span>
            </ScrollButton>
            <div className="flex gap-15 font-stretch-expanded font-medium text-gray-400 text-xs">
                <ScrollButton targetId={"projects"}>ПРОЕКТЫ</ScrollButton>
                <ScrollButton targetId={"offers"}>ТАРИФЫ</ScrollButton>
                <ScrollButton targetId={"telegramOffers"}>TELEGRAM</ScrollButton>
                <ScrollButton targetId={"aiAgents"}>AI-АГЕНТЫ</ScrollButton>
                <ScrollButton targetId={"skills"}>PYTHON</ScrollButton>
            </div>
            <Link href={"https://kwork.ru/user/molinety"} className="bg-orange-500 p-2 text-lg font-bold">
                KWORK
            </Link>
        </nav>
    )
}