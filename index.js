var request = require('request');
var Promise = require('bluebird');

module.exports = function(track) {
  return new Promise(function(resolve, reject) {
    request.get({
      url: 'https://api.spotify.com/v1/search?type=track&q=' + encodeURIComponent(track),
      json: true
    }, function(err, resp, body) {
      if (err) {
        return reject(err);
      }

      try {
        var preview_url = body.tracks.items[0].preview_url;
      } catch (e) {
        return reject(e);
      }

      resolve(body.tracks.items[0].preview_url);
    });
  });
}
