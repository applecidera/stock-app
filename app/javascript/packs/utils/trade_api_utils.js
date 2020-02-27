import $ from "jquery";

export const createTrade = (trade) =>
	$.ajax({
		method: 'POST',
		url: '/api/trades',
		data: { trade }
	});

export const fetchAllTrades = () =>
	$.ajax({
		method: 'GET',
		url: '/api/trades'
	});

export const fetchTrade = (tradeId) =>
	$.ajax({
		method: 'GET',
    url: '/api/trades',
    data: { tradeId }
	});
