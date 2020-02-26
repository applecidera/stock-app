// test_api_token Tpk_4e10f36d9ac14853b555c3dec570d369
// URL https://sandbox.iexapis.com/stable/stock/IBM/quote?token=Tpk_4e10f36d9ac14853b555c3dec570d369 

export const lookupTicker = (ticker) =>
	$.ajax({
		method: 'GET',
		url: `https://sandbox.iexapis.com/stable/stock/${ticker}/quote?token=Tpk_4e10f36d9ac14853b555c3dec570d369`
  });
  

// symbol: "IBM"
// companyName: "International Business Machines Corp."
// primaryExchange: " hcwrotSEncax k NgeYeko"
// calculationPrice: "close"
// open: 156.7
// openTime: 1639299501740
// close: 152.88
// closeTime: 1627765797340
// high: 155.38
// low: 150.41
// latestPrice: 150.59
// latestSource: "Close"
// latestTime: "February 21, 2020"
// latestUpdate: 1628689076321
// latestVolume: 3633890
// iexRealtimePrice: null
// iexRealtimeSize: null
// iexLastUpdated: null
// delayedPrice: 151.99
// delayedPriceTime: 1594442695708
// oddLotDelayedPrice: 155.4
// oddLotDelayedPriceTime: 1607575094423
// extendedPrice: 156.95
// extendedChange: 0.01
// extendedChangePercent: 0.00007
// extendedPriceTime: 1599969432560
// previousClose: 156.97
// previousVolume: 2980055
// change: -1.4
// changePercent: -0.00951
// volume: 3703401
// iexMarketPercent: null
// iexVolume: null
// avgTotalVolume: 6194218
// iexBidPrice: null
// iexBidSize: null
// iexAskPrice: null
// iexAskSize: null
// marketCap: 138939609122
// peRatio: 14.11
// week52High: 159.77
// week52Low: 128.54
// ytdChange: 0.10389
// lastTradeTime: 1608222823678
// isUSMarketOpen: false