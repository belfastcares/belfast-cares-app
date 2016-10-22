/**
 * Created by apoclyps on 16/10/2016.
 */
angular.module('starter.volunteers', ['ionic', 'ionic-material', 'starter.apiservice'])

  .controller('VolunteersCtrl', function ($scope, ionicMaterialMotion, ionicMaterialInk) {

    ionicMaterialInk.displayEffect();

    var data = {'key': 'value'};

    $scope.data = data;

    console.log('WORKING')
  });


