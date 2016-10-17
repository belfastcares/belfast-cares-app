angular.module('starter.events', [])

  .controller('EventsCtrl', function($scope) {
    $scope.events = [
      { title: 'Race For Cancer', id: 1 },
      { title: 'Help the Homeless', id: 2 },
      { title: 'Action Cancer Bakesale', id: 3 },
      { title: 'Belsonic', id: 4 },
      { title: 'Neighbourhood Watch', id: 5 },
      { title: 'Local Community Center', id: 6 }
    ];
  })

  .controller('EventCtrl', function($scope, $stateParams) {

  });
