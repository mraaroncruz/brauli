angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Brewery', function($http, $q) {

  var breweries = []
  var defaultGeo = {
    latitude: 48.288158,
    longitude: 16.308020
  }

  function geo () {
    var d = $q.defer();
    success = function (geo) { d.resolve(geo) }
    failure = function ()    { d.resolve(defaultGeo) }
    navigator.geolocation.getCurrentPosition(success, failure)
    return d.promise;
  }

  return {
    all_with_geo: function(center) {
      var d = $q.defer();
      resolver = function(g) {
        params = {
          lat: g.coords.latitude,
          lng: g.coords.longitude
        }
        res = $http.get("http://bamoida-brauli.herokuapp.com/api/v1/breweries.json",{
          params: params
        })
        success = function (res) {
          breweries = res.data;
          d.resolve([geo.coords, res.data])
        }
        error   = function (err) { d.reject(err) }
        res.then(success, error)
      };
      if (center) {
        resolver({coords: center});
      } else {
        geo().then(resolver);
      }
      return d.promise;
    },
    get: function(breweryId) {
      var brewery = null
      for(var l = breweries.length, i = 0; i < l; i++) {
        if (breweries[i].id === parseInt(breweryId)) {
          brewery = breweries[i]
        }
      }
      return brewery;
    }
  }
});
