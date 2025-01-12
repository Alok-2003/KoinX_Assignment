'use client'

import Link from 'next/link'

export default function Navbar() {

  // const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=2';
  // const options = {
  //   method: 'GET',
  //   headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-ekwns8dzHHTY21EnHqgZE8t1' }
  // };

  // fetch(url, options)
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  //   .catch(err => console.error(err));
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo on the left */}
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          <img src="./KoinX.png" alt="" />
        </Link>
      </div>

      {/* Navigation and button on the right */}
      <div className="flex items-center space-x-6">
        {/* Navigation links */}
        <Link href="/about" className="text-black font-medium hover:text-gray-800 transition-colors">
          Crypto Taxes
        </Link>
        <Link href="/services" className="text-black font-medium hover:text-gray-800 transition-colors">
          Free Tools
        </Link>
        <Link href="/contact" className="text-black font-medium hover:text-gray-800 transition-colors">
          Resource Centre
        </Link>

        {/* Get Started button */}
        <button className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  )
}
