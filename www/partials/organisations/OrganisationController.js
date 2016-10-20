angular.module('starter.organisations', [])

  .controller('OrganisationController', function (Organisations, $scope, $ionicLoading) {

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
