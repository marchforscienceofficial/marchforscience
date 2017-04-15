'use strict';

var fs = require('fs'),
    crypto = require('crypto'),
    qs = require('querystring'),
    url = require('url'),
    fns = [],
    conf = { disable_cookies : false, maxAge: 2592000000 }

function use (fn) {
  if (typeof fn === 'function') fns.push(fn);
  return module.exports;
}

function configure (obj) {
  if (typeof obj === 'object') Object.assign(conf, obj);
  return module.exports;
}

function _getLanguage (accepts) {
  var lang =  accepts || '';
  lang = lang.split(';') || '';
  var format = lang[0].split(',');
  format.push(qs.parse(lang[1]));
  return format;
}

function _getUserToken () {
  var md5sum = crypto.createHash('md5');
  var val = String(Math.random());
  md5sum.update(val);
  return md5sum.digest('hex');
}

function _getAgent (userAgent, elements) {

  // If userAgent is undefined return browser: false
  if(userAgent === void 0) return { browser: false, version: '' };

  var regexps = {
    'Chrome': [ /Chrome\/(\S+)/ ],
    'Firefox': [ /Firefox\/(\S+)/ ],
    'MSIE': [ /MSIE (\S+);/ ],
    'Opera': [
      /Opera\/.*?Version\/(\S+)/,     /* Opera 10 */
      /Opera\/(\S+)/                  /* Opera 9 and older */
    ],
      'Safari': [ /Version\/(\S+).*?Safari\// ]
    }, re, m, browser, version;

  if      (elements === void 0) elements = 2;
  else if (elements === 0) elements = 1337;

  for (browser in regexps) {
    while (re = regexps[browser].shift()) {
      if (m = userAgent.match(re)) {
        version = (m[1].match(new RegExp('[^.]+(?:\.[^.]+){0,' + --elements + '}')))[0];
        return { browser:browser, version:version };
      }
    }
  }
}

function _fixHref (str) {
  if (!str) return void 0;
  if (str.match(/^http:\/\//) ) str = str.substring(7);
  if (str.match(/^https:\/\//) ) str = str.substring(8);
  if (str.match(/^www\./)) str = str.substring(4);
  if (!/http:/.test(str) && !/https:/.test(str)) str = 'http://' + str;
  return str;
}

function _getRemoteAddress (req) {
  var rc = req.connection, resp = null;
  if (req.socket && req.socket.remoteAddress) resp = req.socket.remoteAddress;
  else if (rc) {
    if (rc.remoteAddress) resp = rc.remoteAddress;
    else if (rc.socket && rc.socket.remoteAddress) resp = rc.socket.remoteAddress;
  }
  else console.error('ERR: no remoteAddress');
  return resp;
}

function middleware (req, res, next) {

  req.query = req.query || {};
  req.query.url = _fixHref(req.query.url);

  if (req.query.url) {
    if (!conf.disable_cookies && (!req.cookies || !req.cookies._tracker)) {
      req.cookies._tracker = _getUserToken();
      res.cookie('_tracker', req.cookies._tracker, { maxAge : conf.maxAge, httpOnly : true });
    }
    res.redirect(req.query.url);
  }
  else res.status(404).end();

  // Construct response object
  var response = {
    cookies:    req.cookies || req.headers.cookies || {},
    host:       req.headers.host,
    cache:      qs.parse(req.headers['cache-control']) || {},
    referer:    req.headers.referer || req.headers.referrer || 'direct',
    params:     req.params || {},
    query:      req.query || {},
    decay:      req.query.decay || +new Date() + (1000 * 60 * 5),
    language:   _getLanguage(req.headers['accept-language']),
    domain:     url.parse(_fixHref(req.headers.host)).hostname,
    geo:        { ip: _getRemoteAddress(req) },
    useragent:  _getAgent(req.headers['user-agent'], 2)
  };

  // Pass to all callbacks
  fns.forEach((fn) => { fn(null, response) });

}

var tracker = {
  use : use,
  configure : configure,
  middleware : middleware
};

module.exports = function(server) {

  tracker.use(function (err, res){
    console.log(err, res);
  });

  server.get('/redirect/:id', tracker.middleware);
};
