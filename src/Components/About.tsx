import { ArrowRight } from 'lucide-react';
const bitcoinStats = {
    currentPrice: 16951.82,
    volume24h: 19.14,
    priceChange24h: 0.36,
    sevenDayHigh: 18366.66,
    sevenDayLow: 16394.75,
    circulatingSupply: 19.24,
    maxSupply: 21,
};

export default function About() {
    return (
        <div className="max-w-7xl bg-white mt-4 rounded-xl mx-auto p-4 space-y-8">
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">About Bitcoin</h2>

                <article className="space-y-4">
                    <h3 className="text-xl font-semibold">What is Bitcoin?</h3>
                    <p className="text-gray-600">
                        Bitcoin's price today is US${bitcoinStats.currentPrice.toLocaleString()},
                        with a 24-hour trading volume of ${bitcoinStats.volume24h} B. BTC is
                        {bitcoinStats.priceChange24h > 0 ? ' +' : ' '}
                        {bitcoinStats.priceChange24h}% in the last 24 hours. It is currently
                        -7.70% from its 7-day all-time high of ${bitcoinStats.sevenDayHigh.toLocaleString()},
                        and 3.40% from its 7-day all-time low of ${bitcoinStats.sevenDayLow.toLocaleString()}.
                        BTC has a circulating supply of {bitcoinStats.circulatingSupply} M BTC
                        and a max supply of {bitcoinStats.maxSupply} M BTC.
                    </p>
                    <hr />
                </article>

                <article className="space-y-4">
                    <h3 className="text-lg font-semibold">Lorem ipsum dolor sit amet</h3>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra.
                        Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi
                        diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
                        Ultricies urna volutpat.
                    </p>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum veniam et atque veritatis sint eligendi minus. Voluptates magni dolorem laudantium ducimus perspiciatis, pariatur labore illum atque fugit tenetur voluptatibus accusamus quas repudiandae beatae architecto exercitationem facilis vero nesciunt saepe ullam reprehenderit quo corrupti! Cumque error voluptatem nam nobis commodi tenetur sint ipsam, nihil corporis magnam aliquam architecto perspiciatis quidem dicta maiores blanditiis consectetur adipisci?
                    </p>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra.
                        Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi
                        diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
                        Ultricies urna volutpat.
                    </p>
                    <hr />
                </article>
            </section>

            <section className="space-y-6">
                <h3 className="text-xl font-semibold">Already Holding Bitcoin?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative rounded-lg shadow overflow-hidden">

                        <div className="relative flex gap-6 bg-gradient-to-r from-teal-500/90 to-teal-600/90 p-6">
                            <img src="./First.png" alt="" />
                            <div className="">
                                <h4 className="text-2xl font-semibold text-white mb-6">Calculate your <br /> Profits</h4>
                                <button className="flex items-center text-white font-semibold bg-white/20 hover:bg-white/30 px-4 py-2 rounded-md transition">
                                    Check Now
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-lg shadow overflow-hidden">

                        <div className="relative flex gap-6 bg-gradient-to-r from-orange-500/90 to-orange-600/90 p-6">
                            <img src="./First.png" alt="" />
                            <div className="">
                                <h4 className="text-2xl font-semibold text-white mb-6">Calculate your Tax Liability</h4>
                                <button className="flex items-center text-white font-semibold bg-white/20 hover:bg-white/30 px-4 py-2 rounded-md transition">
                                    Check Now
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

                <p className="text-gray-600">
                    Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac.
                    Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis
                    lacinia congue ipsum fames amet dui. Purus ultricies tincidunt volutpat in eget.
                </p>
            </section>
        </div>
    );
}
