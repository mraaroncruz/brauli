angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Brewery', function($http, $q) {

  var breweries = []
  var apiURI = "http://bamoida-brauli.herokuapp.com/api/v1"
  var defaultGeo = {
    latitude: 48.288158,
    longitude: 16.308020
  }

  function geo () {
    var d = $q.defer();
    success = function (geo) { d.resolve(geo.coords) }
    failure = function ()    { d.resolve(defaultGeo) }
    navigator.geolocation.getCurrentPosition(success, failure)
    return d.promise;
  }

  function resolver (g) {
    var d = $q.defer();
    params = {
      lat: g.latitude,
      lng: g.longitude
    }
    res = $http.get(apiURI + "/breweries.json",{
      params: params
    })

    success = function (res) {
      breweries = res.data;
      d.resolve([geo.coords, res.data])
    }

    error   = function (err) { d.reject(err) }

    res.then(success, error)
    return d.promise;
  }

  return {
    allFromCoords: function (center) {
      return resolver(center)
    },
    allFromCurrentLocation: function() {
      return geo().then(resolver);
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
