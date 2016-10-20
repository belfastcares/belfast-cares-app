// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.home', 'starter.profiles', 'starter.events', 'starter.volunteers',
  'starter.organisations', 'starter.apiservice', 'starter.app', 'starter.controllers',
  'starter.components', 'starter.extensions', 'starter.ink', 'starter.lists', 'starter.setup', 'starter.motion'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)

      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.lists', {
        url: '/lists',
        views: {
          'menuContent': {
            templateUrl: 'templates/lists.html',
            controller: 'ListsCtrl'
          }
        }
      })

      .state('app.ink', {
        url: '/ink',
        views: {
          'menuContent': {
            templateUrl: 'templates/ink.html',
            controller: 'InkCtrl'
          }
        }
      })

      .state('app.motion', {
        url: '/motion',
        views: {
          'menuContent': {
            templateUrl: 'templates/motion.html',
            controller: 'MotionCtrl'
          }
        }
      })

      .state('app.components', {
        url: '/components',
        views: {
          'menuContent': {
            templateUrl: 'templates/components.html',
            controller: 'ComponentsCtrl'
          }
        }
      })

      .state('app.extensions', {
        url: '/extensions',
        views: {
          'menuContent': {
            templateUrl: 'templates/extensions.html',
            controller: 'ExtensionsCtrl'
          }
        }
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      })
      .state('app.events', {
        url: '/events',
        views: {
          'menuContent': {
            templateUrl: 'js/partials/events/events.html',
            controller: 'EventsCtrl'
          }
        }
      })

      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'js/partials/home/home.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('app.volunteers', {
        url: '/volunteers',
        views: {
          'menuContent': {
            templateUrl: 'js/partials/volunteers/volunteers.html',
            controller: 'VolunteersCtrl'
          }
        }
      })


      .state('app.organisations', {
        url: '/organisations',
        views: {
          'menuContent': {
            templateUrl: 'js/partials/organisations/organisations.html',
            controller: 'OrganisationController'
          }
        }
      })

      .state('app.profile', {
        url: '/profile',
        views: {
          'menuContent': {
            templateUrl: 'templates/profile.html',
            controller: 'ProfileCtrl'
          }
        }
      })

      .state('app.comics', {
        url: '/comics',
        views: {
          'menuContent': {
            templateUrl: 'templates/comics.html',
            controller: 'ComicsController'
          }
        }
      })

      .state('app.comic', {
        url: '/comic/:comicId',
        views: {
          'menuContent': {
            templateUrl: 'templates/comic-detail.html',
            controller: 'ComicDetailController'
          }
        }
      })

      .state('app.single', {
        url: '/events/:eventId',
        views: {
          'menuContent': {
            templateUrl: 'js/partials/events/event.html',
            controller: 'EventCtrl'
          }
        }
      });
// if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
  })
;
