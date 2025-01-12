import { FaCaretUp } from "react-icons/fa";
async function getBitcoinData() {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': 'CG-ekwns8dzHHTY21EnHqgZE8t1',
    },
  };

  const res = await fetch(url, options); // Removed the third argument
  if (!res.ok) throw new Error('Failed to fetch data');
  const data = await res.json();
  return data[0];
}

export default async function Detail() {
  const bitcoinData = await getBitcoinData();

  const currentPrice = bitcoinData.current_price;
  const pricePosition =
    ((currentPrice - bitcoinData.low_24h) / (bitcoinData.high_24h - bitcoinData.low_24h)) * 100;

  return (
    <div className="max-w-7xl mt-4 mx-auto  space-y-6">
      {/* Navigation Tabs */}
      <div className="flex gap-6 space-x-4 border-b border-gray-300 pb">
        <button className="text-blue-600 border-b-2 pb-2 border-blue-600">Overview</button>
        <button className="text-gray-600 pb-2">Fundamentals</button>
        <button className="text-gray-600 pb-2">News Insights</button>
        <button className="text-gray-600 pb-2">Sentiments</button>
        <button className="text-gray-600 pb-2">Team</button>
        <button className="text-gray-600 pb-2">Technicals</button>
        <button className="text-gray-600 pb-2">Tokenomics</button>
      </div>

      {/* Performance Section */}
      <div className="bg-white p-6 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Performance</h2>

        {/* Today's Range */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Today&apos;s Low</span>
              <span>Today&apos;s High</span>
            </div>
            <div className="relative">
              <div className="h-2 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
              <div className="absolute top-1/2" style={{ left: `${pricePosition}%` }}>
                <div className="relative">
                  <div className="absolute top-8 left-1/2 -translate-x-1/2  text-black px-2 py-1 rounded text-sm whitespace-nowrap">
                    <div className="flex justify-center">
                      <FaCaretUp />
                    </div>
                    ${bitcoinData.current_price.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">${bitcoinData.low_24h.toLocaleString()}</span>
              <span className="text-sm">${bitcoinData.high_24h.toLocaleString()}</span>
            </div>
          </div>

          {/* 52W Range - Using ATL and ATH as approximation */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>52W Low</span>
              <span>52W High</span>
            </div>
            <div className="h-2 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
            <div className="flex justify-between">
              <span className="text-sm">${bitcoinData.atl.toLocaleString()}</span>
              <span className="text-sm">${bitcoinData.ath.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fundamentals Section */}
      <div className="bg-white p-6 shadow-md rounded-md">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-2xl font-bold">Fundamentals</h2>
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path strokeWidth="2" d="M12 16v-4M12 8h.01" />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-600">Bitcoin Price</span>
              <span className="font-medium">${bitcoinData.current_price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-600">24h Low / 24h High</span>
              <span className="font-medium">
                ${bitcoinData.low_24h.toLocaleString()} / ${bitcoinData.high_24h.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-600">7d Low / 7d High</span>
              <span className="font-medium">N/A</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-600">Trading Volume</span>
              <span className="font-medium">${bitcoinData.total_volume.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-600">Market Cap Rank</span>
              <span className="font-medium">#{bitcoinData.market_cap_rank}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-600">Market Cap</span>
              <span className="font-medium">${bitcoinData.market_cap.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-600">Market Cap Dominance</span>
              <span className="font-medium">
                {((bitcoinData.market_cap / (bitcoinData.market_cap / 0.38343)) * 100).toFixed(3)}%
              </span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-600">Volume / Market Cap</span>
              <span className="font-medium">
                {(bitcoinData.total_volume / bitcoinData.market_cap).toFixed(4)}
              </span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-600">All-Time High</span>
              <div className="text-right">
                <div className="flex gap-2">
                  <div className="font-medium">${bitcoinData.ath.toLocaleString()}</div>
                  <div
                    className={` ${bitcoinData.ath_change_percentage < 0 ? 'text-red-500' : 'text-green-500'
                      }`}
                  >
                    ({bitcoinData.ath_change_percentage.toFixed(1)}%)
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(bitcoinData.ath_date).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-600">All-Time Low</span>
              <div className="text-right">
                <div className="flex gap-2">

                  <div className="font-medium">${bitcoinData.atl.toLocaleString()}</div>
                  <div
                    className={` ${bitcoinData.atl_change_percentage < 0 ? 'text-red-500' : 'text-green-500'
                      }`}
                  >
                    ({bitcoinData.atl_change_percentage.toFixed(1)}%)
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(bitcoinData.atl_date).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
