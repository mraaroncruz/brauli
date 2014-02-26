angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('BreweryIndexCtrl', function($scope, Brewery) {
  $scope.breweries = []

  // "Breweries" is a service returning mock data (services.js)
  var updateBreweries = function (center) {
    Brewery.all_with_geo(center).then(function (data) {
        $scope.currentLocation = data[0];
        $scope.breweries = data[1];
      }
    );
  };

  updateBreweries();

  $scope.currentLocation = {
    latitude: 48.288158,
    longitude: 16.308020
  }

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
        console.log("new center", center);
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
});
