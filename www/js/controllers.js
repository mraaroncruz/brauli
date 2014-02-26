angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('BreweryIndexCtrl', function($scope, Brewery) {
  // "Brewerys" is a service returning mock data (services.js)
  $scope.breweries = Brewery.all_with_geo();
})


// A simple controller that shows a tapped item's data
.controller('BreweryDetailCtrl', function($scope, $stateParams, Brewery) {
  // "Brewerys" is a service returning mock data (services.js)
  $scope.brewery = Brewery.get($stateParams.breweryId);
});
