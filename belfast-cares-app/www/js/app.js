// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.home', 'starter.profiles', 'starter.events', 'starter.volunteers', 'starter.apiservice'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
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
            templateUrl: 'partials/events/events.html',
            controller: 'EventsCtrl'
          }
        }
      })

      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'partials/home/home.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('app.volunteers', {
        url: '/volunteers',
        views: {
          'menuContent': {
            templateUrl: 'partials/volunteers/volunteers.html',
            controller: 'VolunteersCtrl'
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
            templateUrl: 'partials/events/event.html',
            controller: 'EventCtrl'
          }
        }
      });
// if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
  })
;
