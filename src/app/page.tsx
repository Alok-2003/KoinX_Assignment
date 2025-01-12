
import Navbar from '@/Components/Navbar'
import Hero from '@/Components/Hero'
import React from 'react'
import { TrendingCoins } from '@/Components/TrendingCoins'
import CTA from '@/Components/CTA'
import Detail from '@/Components/Detail'
import { FaAnglesRight } from "react-icons/fa6";
import "./globals.css";
import Sentiment from '@/Components/Sentiment'
import About from '@/Components/About'
// import Token from '@/Components/Token'

const page = () => {
  return (
    <div className="bg-gray-200 h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow">
        <Navbar />
      </div>

      <div className="flex w-full h-full pt-20 px-10">
        <div className="w-3/4 mr-[25%] overflow-y-scroll h-[calc(100%-1rem)] px-2 custom-scrollbar">
          <h1 className='text-gray-500 flex items-center gap-1 my-2' >
            Cryptocurrencies  <FaAnglesRight size={12} /> <span className='' > Bitocoin</span>
          </h1>
          <Hero />
          <Detail />
          <Sentiment/>
          <About/>
          {/* <Token/> */}
        </div>
        <div className="w-1/4 space-y-2 fixed top-[7.5rem] right-8 h-[calc(100%-4rem)] overflow-y-auto px-4">
          <CTA />
          <TrendingCoins />
        </div>
      </div>
    </div>
  )
}

export default page
