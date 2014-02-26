angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('BreweryIndexCtrl', function($scope, Brewery) {
  // "Brewerys" is a service returning mock data (services.js)
  $scope.breweries = Brewery.all_with_geo();

  $scope.currentLocation = {
    latitude: 48.288158,
    longitude: 16.308020
  }

  getCenter = function () {
    return $scope.currentLocation
  }

  $scope.map = {
    center: getCenter(),
    zoom: 10,
    options: {
      scaleControl: false,
      streetViewControl: false,
      zoomControl: false,
      mapTypeControl: false
    },
    markers: $scope.breweries
  };
})


// A simple controller that shows a tapped item's data
.controller('BreweryDetailCtrl', function($scope, $stateParams, Brewery) {
  // "Brewerys" is a service returning mock data (services.js)
  $scope.brewery = Brewery.get($stateParams.breweryId);
});
