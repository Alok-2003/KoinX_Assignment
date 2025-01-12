'use client';
import TradingViewWidget from "./TradingViewWidget"
import React, { useEffect, useRef, useState, memo } from 'react';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
interface BitcoinData {
  inr: number;
  inr_24h_change: number;
  usd: number;
  usd_24h_change: number;
}
export default function Hero() {
  const [bitcoinData, setBitcoinData] = useState<BitcoinData | null>(null);
  useEffect(() => {
    const fetchBitcoinData = async () => {
      const url =
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-ekwns8dzHHTY21EnHqgZE8t1',
        },
      };

      try {
        const res = await fetch(url, options);
        if (!res.ok) {
          throw new Error('Failed to fetch Bitcoin data');
        }
        const data = await res.json();
        setBitcoinData(data.bitcoin);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBitcoinData();
  }, []);
  return (
    <div className="relative  bg-gray-50 rounded-xl overflow-hidden">
      {bitcoinData && (
        <div className="p-4 bg-white  ">
          {/* Line 1: Coin image, name, token name, and rank */}
          <div className="flex items-center mb-2">
            <img
              src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
              alt="Bitcoin"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div className="text-xl flex items-center gap-2 font-bold">
              Bitcoin
              <h1 className="text-gray-500 text-sm">BTC</h1>
              <div className="bg-gray-500 px-2 py-2 rounded-xl" >
                <h1 className=" text-white   text-sm" >Rank #1</h1>
              </div>
            </div>
          </div>

          {/* Line 2: Price in USD and 24-hour change */}

          <div className="mb-">
            <p className="text-2xl font-bold flex gap-2 items-center">
              ${bitcoinData.usd.toLocaleString()}{' '}
              <span
                className={`text-sm bg-green-100 rounded-lg py-1 px-2 flex items-center gap-1 ${bitcoinData.usd_24h_change >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
              >
                {bitcoinData.usd_24h_change >= 0 ? <FaCaretUp /> : <FaCaretDown />}
                {bitcoinData.usd_24h_change.toFixed(2)}%
              </span>
              <span className="font-light text-sm">(24H)</span>
            </p>
          </div>


          {/* Line 3: Price in INR */}
          <div>
            <p className="text-md">
              ₹{bitcoinData.inr.toLocaleString()}
            </p>
          </div>
        </div>
      )}

      <div className="h-96 w-full sm:h-72 md:h-96 lg:w-full lg:h-96">
        <TradingViewWidget />
      </div>
    </div>
  )
}

