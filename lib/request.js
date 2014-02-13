var crypto = require('crypto');
var request = require('request');
var qs = require('querystring');
var q = require('q');

var BASE_URI = 'http://api.rovicorp.com';
var requestHeaders = {
    'Accept-Encoding': 'gzip,deflate'
};

var makeRequest = function(key, secret, options, map) {
    var defer = q.defer();
    var action = map.action;
    var resource = map.resource;
    var base = map.base;
    var version = map.version;

    var signature = generateSignature(key, secret);

    options = options || {};
    options.sig = signature;
    options.apikey = key;

    var uri = BASE_URI +
        '/' + base +
        '/' + version +
        '/' + resource +
        '/' + action +
        '?' + qs.stringify(options);
   
    request.get({ url: uri, headers: requestHeaders }, function (err, response, body) {
        if (err) { return defer.reject(err); }
        return defer.resolve(body);
    });
    return defer.promise;
};

var generateSignature = function (key, secret) {
  var now = new Date().toGMTString();
  var utc = Date.parse(now) / 1000;
  var md5 = crypto.createHash('md5');
  md5.update(key + secret + utc);
  return md5.digest('hex');
}

exports.makeRequest = makeRequest;