angular.module('starter.controllers', ['ionic', 'ionic-material', 'starter.apiservice'])

  .controller('ComicsController', function (Comics,Organisations, $scope, $ionicLoading, ionicMaterialMotion, ionicMaterialInk) {
    var _this = this;
    ionicMaterialInk.displayEffect();

    console.log('Comic');

    Organisations.getOrganisations().then(function (response) {
      $scope.organisations = response.data.results;
    }).catch(function (response) {
      console.log('Error')
    }).finally(function () {
      $ionicLoading.hide();
    });


    $scope.$on('$ionicView.enter', function () {
      $ionicLoading.show();

      Comics.getComics().then(function (response) {
        _this.comics = response.data;
        $scope.comics = response.data;
      }).catch(function (response) {
        //request was not successful
        //handle the error
        console.log('Error')
      }).finally(function () {
        $ionicLoading.hide();
      });
    });
  })

  .controller('ComicDetailController', function (Comics, $stateParams, $scope, $ionicLoading, ionicMaterialMotion, ionicMaterialInk) {
    var _this = this;

    console.log('Comic Single ');

    $scope.$on('$ionicView.enter', function () {
      $ionicLoading.show();

      Comics.getComic($stateParams.comicId).then(function (response) {
        _this.comic = response.data;
        $scope.comic = response.data;
      }).catch(function (response) {
        //request was not successful
        //handle the error
        console.log('Error')
      }).finally(function () {
        $ionicLoading.hide();
      });
    });
  })

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, Comics, ionicMaterialMotion, ionicMaterialInk) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  });
