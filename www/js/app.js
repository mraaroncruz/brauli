// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers', 'google-maps' ])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // the brewery tab has its own child nav-view and history
    .state('tab.brewery-index', {
      url: '/breweries',
      views: {
        'breweries-tab': {
          templateUrl: 'templates/brewery-index.html',
          controller: 'BreweryIndexCtrl'
        }
      }
    })

    .state('tab.brewery-detail', {
      url: '/brewery/:breweryId',
      views: {
        'breweries-tab': {
          templateUrl: 'templates/brewery-detail.html',
          controller: 'BreweryDetailCtrl'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/breweries');

});

