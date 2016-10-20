angular.module('starter.organisations', ['ionic', 'ionic-material', 'starter.apiservice'])

  .controller('OrganisationController', function (Organisations, $scope, $ionicLoading, ionicMaterialMotion, ionicMaterialInk) {

    ionicMaterialInk.displayEffect();

    $scope.$on('$ionicView.enter', function () {
      $ionicLoading.show();

      Organisations.getOrganisations().then(function (response) {
        $scope.organisations = response.data.results;
      }).catch(function (response) {
        console.log('Error')
      }).finally(function () {
        $ionicLoading.hide();
      });
    });
  });
