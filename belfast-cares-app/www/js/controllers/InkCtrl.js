angular.module('starter.ink', ['ionic', 'ionic-material'])
  .controller('InkCtrl', function ($scope, $stateParams, ionicMaterialMotion, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
  });
