import Image from 'next/image'

interface Coin {
  id: string
  name: string
  symbol: string
  thumb: string
  price_btc: number
}

interface TrendingCoinsResponse {
  coins: Array<{
    item: {
      id: string
      name: string
      symbol: string
      thumb: string
      price_btc: number
    }
  }>
}

const url = 'https://api.coingecko.com/api/v3/search/trending'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': 'CG-ekwns8dzHHTY21EnHqgZE8t1',
  },
}

async function getTrendingCoins(): Promise<TrendingCoinsResponse> {
  const res = await fetch(url, options)
  if (!res.ok) {
    throw new Error('Failed to fetch trending coins')
  }
  return res.json()
}

export async function TrendingCoins() {
  const data = await getTrendingCoins()
  const top3Coins = data.coins.slice(0, 3).map((coin) => ({
    id: coin.item.id,
    name: coin.item.name,
    symbol: coin.item.symbol,
    thumb: coin.item.thumb,
    price_btc: coin.item.price_btc,
  }))

  const topCoin = top3Coins[0]

  return (
    <div className="bg-white rounded-lg shadow-md ">
      <h2 className="text-2xl font-bold p-4 border-b">Trending Coins (24h)</h2>
      <TrendingCoinsDisplay coins={top3Coins} topCoin={topCoin} />
    </div>
  )
}

function TrendingCoinsDisplay({ coins, topCoin }: { coins: Coin[], topCoin: Coin }) {
  return (
    <>
      <ul className="divide-y">
        {coins.map((coin) => (
          <li key={coin.id} className="flex items-center space-x-4 p-4">
            <Image src={coin.thumb} alt={coin.name} width={32} height={32} className="rounded-full" />
            <div className="flex-grow">
              <p className="font-semibold">{coin.name}</p>
              <p className="text-sm text-gray-500">{coin.symbol}</p>
            </div>
            <p className="text-sm font-medium">{coin.price_btc.toFixed(8)} BTC</p>
          </li>
        ))}
      </ul>
      <input type="hidden" id="topCoinSymbol" value={topCoin.symbol} />
    </>
  )
}
