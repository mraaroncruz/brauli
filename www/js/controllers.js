angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('BreweryIndexCtrl', function($scope, Brewery) {
  $scope.breweries = []

  $scope.currentLocation = {
    latitude: 48.288158,
    longitude: 16.308020
  }

  var initBreweries = function () {
    Brewery.allFromCurrentLocation().then(function (data) {
        $scope.currentLocation = data[0];
        $scope.breweries = data[1];
      }
    );
  }

  // "Breweries" is a service returning mock data (services.js)
  var updateBreweries = function (center) {
    Brewery.allFromCoords(center).then(function (data) {
        $scope.currentLocation = data[0];
        $scope.breweries = data[1];
      }
    );
  };

  initBreweries();

  var getBreweries = function () {
    return $scope.breweries;
  }

  var getCenter = function () {
    return $scope.currentLocation;
  }

  $scope.$watch(getBreweries, function (curr, prev) {
    // goto fail;
    // goto fail;
    if(curr != prev)
      $scope.map.markers = curr;
  })

  $scope.map = {
    center: $scope.currentLocation,
    zoom: 10,
    options: {
      scaleControl: false,
      streetViewControl: false,
      zoomControl: false,
      mapTypeControl: false
    },
    markers: $scope.breweries,
    events: {
      dragend: function (e) {
        var center = {
          latitude: e.center.d,
          longitude: e.center.e
        };
        $scope.currentLocation = center;
        updateBreweries(center);
      }
    }
  };
})


// A simple controller that shows a tapped item's data
.controller('BreweryDetailCtrl', function($scope, $stateParams, Brewery) {
  // "Brewerys" is a service returning mock data (services.js)
  $scope.brewery = Brewery.get($stateParams.breweryId);

  $scope.map = {
    center: $scope.brewery,
    zoom: 12,
    options: {
      scaleControl: false,
      streetViewControl: false,
      zoomControl: false,
      mapTypeControl: false
    },
    marker: $scope.brewery
  };
});
