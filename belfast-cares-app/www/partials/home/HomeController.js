/**
 * Created by apoclyps on 16/10/2016.
 */
angular.module('starter.home', [])

  .controller('HomeCtrl', function ($scope) {

    var data = {'key': 'value'};

    $scope.data = data;

    console.log('WORKING')
  });
