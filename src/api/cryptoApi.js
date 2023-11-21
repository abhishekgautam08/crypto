import { API_BASE_URL, API_KEY } from "../utils/constants";

export const CoinList = (currency) =>
  `${API_BASE_URL}/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false/${API_KEY}`;

export const SingleCoin = (id) => `${API_BASE_URL}/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
  `${API_BASE_URL}/${id}/market_chart?vs_currency=${currency}&days=${days}/${API_KEY}`;

export const TrendingCoins = (currency) =>
  `${API_BASE_URL}/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h/${API_KEY}`;
