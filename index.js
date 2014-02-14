var apis = require('./lib/api');
var roviRequest = require('./lib/request');
var _ = require('lodash');


var Rovi = function(config) {
    if (!config || !_.has(config, 'key') && !_.has(config, 'secret')) {
        throw new Error('Cannot create rovi object without valid key and shared secret');
    }

    this.key = config.key;
    this.secret = config.secret;

    return this;
};

_.each(apis, function (services, contentType) {
    _.each(apis[contentType], function (service, key) {
        Rovi.prototype[service.method] = function (options, callback) {
            if (_.isFunction(options)) {
                callback = options;
                options = {}
            }
            return roviRequest.makeRequest(this.key, this.secret, options, service, callback);
        };
    });
});

module.exports = Rovi;