/**
 * Created by apoclyps on 16/10/2016.
 */
angular.module('starter.home', ['ionic', 'ionic-material'])

  .controller('HomeCtrl', function ($scope, ionicMaterialMotion, ionicMaterialInk) {

    var data = {'key': 'value'};

    $scope.data = data;

    console.log('WORKING')
  });
