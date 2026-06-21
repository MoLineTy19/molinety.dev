import React from "react";

interface TelegramOfferProps {
    children: React.ReactNode;
    title: string;
    description: string;
    indexOffer: number;
    price: string | number;
}

/**
 * Карточка тарифа Telegram-бота. Правки:
 *  - h-screen/2 p-20 → мин-высота + адаптивный padding (раньше на мобиле съедало экран)
 *  - flex-2 → flex-1 (валидный класс)
 *  - text-gray-300/50 → text-gray-300 (контраст)
 *  - h3 — это заголовок карточки (не h1)
 */
export default function TelegramOffer({ children, title, description, indexOffer, price }: TelegramOfferProps) {
    const reverse = indexOffer % 2 === 0

    const metadata = (
        <div className="flex flex-1 flex-col p-4 sm:p-6">
            <p className="mb-2 tracking-widest text-gray-400">Вариант {indexOffer}</p>
            <h3 className="mb-2 text-2xl font-bold sm:text-3xl">{title}</h3>
            <p className="mb-4 text-sm text-gray-300 sm:text-base">{description}</p>
            <span className="text-2xl text-orange-500">
                ОТ {price} ₽
            </span>
        </div>
    )

    return (
        <div className="flex flex-col items-center justify-center gap-6 border-t p-6 py-12 sm:p-12 md:flex-row md:gap-10">
            {reverse && metadata}
            {children}
            {!reverse && metadata}
        </div>
    )
}
