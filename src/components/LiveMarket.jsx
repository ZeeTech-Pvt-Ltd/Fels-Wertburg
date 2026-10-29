'use client';

import { useEffect, useState } from 'react';

const COINGECKO_API =
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true';

const COINS = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', icon: '/coins/btc.svg' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', icon: '/coins/eth.svg' },
  { id: 'solana', name: 'Solana', symbol: 'SOL', icon: '/coins/sol.svg' },
];

/*
 * The homepage renders two copies of this panel (the hero preview and the
 * research workspace). They share one request and one cache entry, so the
 * public price API is called once per page load.
 */
let cachedPrices = null;
let pendingRequest = null;

function loadPrices() {
  if (cachedPrices) return Promise.resolve(cachedPrices);
  if (pendingRequest) return pendingRequest;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);

  pendingRequest = fetch(COINGECKO_API, { signal: controller.signal })
    .then((response) => {
      if (!response.ok) throw new Error('Market data request failed');
      return response.json();
    })
    .then((data) => {
      cachedPrices = data;
      return data;
    })
    .finally(() => {
      clearTimeout(timer);
      pendingRequest = null;
    });

  return pendingRequest;
}

function formatPrice(value) {
  if (value == null) return '...';
  if (value >= 1000) {
    return `$${value.toLocaleString('en-AU', { maximumFractionDigits: 0 })}`;
  }
  if (value >= 1) {
    return `$${value.toLocaleString('en-AU', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }
  return `$${value.toLocaleString('en-AU', { maximumFractionDigits: 4 })}`;
}

/**
 * Live market prices from CoinGecko's public API.
 *
 * The request runs after hydration with an 8 second timeout, so it never sits
 * on the critical path. If the service is unavailable the panel says so rather
 * than showing stale or invented numbers.
 */
export default function LiveMarket({ panel = false }) {
  const [prices, setPrices] = useState(cachedPrices);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (cachedPrices) {
      setPrices(cachedPrices);
      return undefined;
    }

    let mounted = true;
    loadPrices()
      .then((data) => {
        if (mounted) setPrices(data);
      })
      .catch(() => {
        if (mounted) setError(true);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const cardClass = panel
    ? 'flex h-full flex-col rounded-2xl bg-white/95 p-5 shadow-card'
    : 'mt-2 rounded-2xl border border-ink/5 bg-white p-3 sm:mt-3 sm:p-4';

  return (
    <div className={cardClass}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-semibold text-ink">Live Market</p>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-accent-dark">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Live
        </span>
      </div>

      {error ? (
        <p className="mt-3 text-xs leading-relaxed text-steel">
          Live prices are unavailable right now. Refresh to try again.
        </p>
      ) : (
        <ul className="mt-2 space-y-2">
          {COINS.map((coin) => {
            const price = prices?.[coin.id];
            const change = price?.usd_24h_change;
            const up = change >= 0;

            return (
              <li key={coin.id} className="flex items-center justify-between gap-3 text-sm">
                <span className="flex min-w-0 items-center gap-2">
                  <img
                    src={coin.icon}
                    alt=""
                    width="20"
                    height="20"
                    className="h-5 w-5 shrink-0"
                  />
                  <span className="min-w-0">
                    <span className="block truncate font-medium text-ink">{coin.name}</span>
                    <span className="block text-[10px] text-muted">{coin.symbol}</span>
                  </span>
                </span>
                <span className="shrink-0 text-right">
                  <span className="block text-xs font-semibold text-ink">
                    {prices ? formatPrice(price?.usd) : '...'}
                  </span>
                  <span
                    className={`block text-[11px] font-semibold ${
                      up ? 'text-accent-dark' : 'text-red-600'
                    }`}
                  >
                    {prices && change != null
                      ? `${up ? '+' : ''}${change.toFixed(2)}%`
                      : '...'}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      )}

      <p className={`text-[10px] text-muted ${panel ? 'mt-auto pt-3' : 'mt-2'}`}>
        Prices via CoinGecko
      </p>
    </div>
  );
}
