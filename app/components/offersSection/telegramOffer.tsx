import React from "react";

interface TelegramOfferProps {
    children: React.ReactNode;
    title: string;
    description: string;
    indexOffer: number;
    price: string | number;
}

export default function TelegramOffer({children, title, description, indexOffer, price}: TelegramOfferProps ) {
    const reverse = indexOffer % 2 === 0

    const metadata = (
        <div className="flex-1 p-4 flex flex-col">
            <p className="tracking-widest mb-2">Вариант {indexOffer}</p>
            <h1 className="font-bold text-3xl mb-2">{title}</h1>
            <p className="text-gray-300/50 mb-4">{description}</p>
            <span className="text-orange-500 text-2xl">
                          ОТ {price} ₽
                      </span>
        </div>
    )

    return (
        <div className="flex items-center justify-center h-screen/2 p-20 border-t">
            {reverse && metadata}
            {children}
            {!reverse && metadata}
        </div>
    )
}