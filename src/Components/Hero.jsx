import TradingViewWidget from "./TradingViewWidget"

export default function Hero() {
    return (
        <div className="relative  bg-gray-50 overflow-hidden">
            <div className="h-96 w-full sm:h-72 md:h-96 lg:w-full lg:h-96">
                <TradingViewWidget />
            </div>
        </div>
    )
}

