'use client'
import React, { useRef } from "react";
import { ChevronRight, ChevronLeft, Info, Newspaper, TrendingUp } from "lucide-react";

export default function Sentiment() {
    const cardContainerRef = useRef<HTMLDivElement>(null)

    // Specify 'direction' as 'left' or 'right'
    const scrollCards = (direction: "left" | "right") => {
        if (cardContainerRef.current) {
            const scrollAmount = direction === "left" ? -300 : 300; // Adjust the scroll amount as needed
            cardContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const events = [
        {
            icon: <Newspaper className="w-8 h-8 text-white" />,
            bgColor: "bg-blue-500",
            cardBg: "bg-blue-50",
            text: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
            description:
                "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-white" />,
            bgColor: "bg-green-500",
            cardBg: "bg-green-50",
            text: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
            description:
                "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipiscing metus quis del",
        },
        {
            icon: <Newspaper className="w-8 h-8 text-white" />,
            bgColor: "bg-blue-500",
            cardBg: "bg-blue-50",
            text: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
            description:
                "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
        },
    ];

    const estimates = {
        buy: 76,
        hold: 8,
        sell: 16,
    };

    return (
        <div className="max-w-7xl mx-auto p-4 bg-white mt-4 rounded-xl space-y-6">
            <div className="space-y-2">
                <h1 className="text-2xl  font-semibold">Sentiment</h1>
                <div className="flex items-center gap-2 ">
                    <h2 className="text-xl text-gray-500 font-semibold">Key Events</h2>
                    <Info className="w-5 h-5 text-gray-500" />
                </div>

                <div className="relative ">
                    <div
                        ref={cardContainerRef}
                        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
                    >
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 w-full md:w-[456px] p-4 rounded-lg shadow ${event.cardBg}`}
                            >
                                <div className="flex gap-4">
                                    <div className={`rounded-full p-2 w-12 h-12 flex items-center justify-center ${event.bgColor}`}>
                                        {event.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-medium">{event.text}</p>
                                        <p className="text-sm text-gray-600">{event.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-2">
                        <button
                            onClick={() => scrollCards("left")}
                            className="p-2 rounded-full bg-white shadow-lg"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                        </button>
                        <button
                            onClick={() => scrollCards("right")}
                            className="p-2 rounded-full bg-white shadow-lg"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">Analyst Estimates</h2>
                    <Info className="w-4 h-4 text-gray-400" />
                </div>

                <div className="flex items-center gap-8">
                    <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center">
                        <span className="text-4xl font-bold text-green-500">
                            76<span className="text-2xl">%</span>
                        </span>
                    </div>

                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="w-10 text-sm">Buy</span>
                            <div className="relative flex-1 items-center rounded h-2 overflow-visible">
                                <div
                                    className="absolute rounded-xl top-0 left-0 h-full bg-green-500"
                                    style={{ width: `${estimates.buy}%` }}
                                ></div>
                                <span
                                    className="absolute top-1/2 transform -translate-y-1/2 text-sm text-green-500 whitespace-nowrap"
                                    style={{
                                        left: `calc(${estimates.buy}% + 5px)`,
                                        transform: `translateY(-50%) translateX(${estimates.buy > 90 ? '-50%' : '0'})`,
                                    }}
                                >
                                    {estimates.buy}%
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-10 text-sm">Hold</span>
                            <div className="relative flex-1 rounded h-2 overflow-visible">
                                <div
                                    className="absolute rounded-xl top-0 left-0 h-full bg-gray-400"
                                    style={{ width: `${estimates.hold}%` }}
                                ></div>
                                <span
                                    className="absolute top-1/2 transform -translate-y-1/2 text-sm text-gray-500 whitespace-nowrap"
                                    style={{
                                        left: `calc(${estimates.hold}% + 5px)`,
                                        transform: `translateY(-50%) translateX(${estimates.hold > 90 ? '-50%' : '0'})`,
                                    }}
                                >
                                    {estimates.hold}%
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-10 text-sm">Sell</span>
                            <div className="relative flex-1 rounded h-2 overflow-visible">
                                <div
                                    className="absolute rounded-xl top-0 left-0 h-full bg-red-500"
                                    style={{ width: `${estimates.sell}%` }}
                                ></div>
                                <span
                                    className="absolute top-1/2 transform -translate-y-1/2 text-sm text-red-500 whitespace-nowrap"
                                    style={{
                                        left: `calc(${estimates.sell}% + 5px)`,
                                        transform: `translateY(-50%) translateX(${estimates.sell > 90 ? '-50%' : '0'})`,
                                    }}
                                >
                                    {estimates.sell}%
                                </span>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}
