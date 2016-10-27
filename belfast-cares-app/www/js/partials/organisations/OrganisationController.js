angular.module('starter.organisations', ['ionic', 'ionic-material', 'starter.apiservice'])

  .controller('OrganisationController', function (Organisations,Auth, $scope, $ionicLoading, ionicMaterialMotion, ionicMaterialInk) {

    ionicMaterialInk.displayEffect();

    $scope.$on('$ionicView.enter', function () {
      $ionicLoading.show();

      Auth.getToken().then(function (response) {
        console.log(response);
      }).catch(function (response) {
        console.log('Error')
      }).finally(function () {
        $ionicLoading.hide();
      });

      Organisations.getOrganisations().then(function (response) {
        $scope.organisations = response.data.results;
      }).catch(function (response) {
        console.log('Error')
      }).finally(function () {
        $ionicLoading.hide();
      });
    });
  });
