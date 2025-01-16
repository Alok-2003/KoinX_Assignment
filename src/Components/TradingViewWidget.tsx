'use client';

import React, { useEffect, useRef, memo } from 'react';


function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  // Embedding the TradingView widget
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"]'
    );
    if (existingScript) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "BITSTAMP:BTCUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "3",
        "hide_top_toolbar": false,
        "save_image": false,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current?.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" style={{ height: '108.5%', width: '100%' }}>
      {/* Heading Section */}
      
      {/* TradingView Chart */}
      <div className="tradingview-widget-container__widget" ref={container} style={{ height: 'calc(100% - 32px)', width: '100%' }}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
