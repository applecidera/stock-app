import $ from "jquery";

export const createUser = (user) =>
	$.ajax({
		method: 'POST',
		url: '/api/users',
		data: { user }
	});

export const fetchUser = (userId) =>
	$.ajax({
		method: 'GET',
		url: `/api/users/${userId}`
	});

export const makePurchase = (trade) =>
	$.ajax({
		method: 'PATCH',
		url: `/api/users/${trade.userId}`,
		data: { trade }
	});

export const createSession = (user) =>
	$.ajax({
		method: 'POST',
		url: '/api/session',
		data: { user }
	});

export const deleteSession = () =>
	$.ajax({
		method: 'DELETE',
		url: '/api/session'
	});

