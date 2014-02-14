'use strict';

exports.search = {
	base: 'search',
	version: 'v2.1',
	resource: 'amgvideo',
	action: 'search',
	method: 'searchMovies',
	params: {}
};

exports.info = {
	base: 'data',
	version: 'v1.1',
	resource: 'movie',
	action: 'info',
	method: 'getMovies',
	params: {}
};