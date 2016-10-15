angular.module('starter.events', [])

  .controller('EventsCtrl', function ($scope) {

    var data = {'key': 'value'};

    $scope.data = data;

    console.log('WORKING')
  });
