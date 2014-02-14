'use strict';

module.exports = {
    getMovies: {
        base: 'data',
        version: 'v1.1',
        resource: 'movie',
        action: 'info',
        method: 'getMovies',
        params: {}
    },

    searchMovies: {
        base: 'search',
        version: 'v2.1',
        resource: 'amgvideo',
        action: 'search',
        method: 'searchMovies',
        params: {}
    }
};