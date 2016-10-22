/**
 * Created by apoclyps on 16/10/2016.
 */
angular.module('starter.apiservice', ['ionic', 'ionic-material'])

  .factory('Organisations', function ($http) {
    var dataSource = 'http://demo3929519.mockable.io/organisation';

    return {
      getOrganisations: function () {
        return $http.get(dataSource);
      },
      getOrganisation: function (comicId) {
        return $http.get(dataSource, {
          params: {
            id: comicId
          }
        });
      }
    }
  })

  .factory('Auth', function ($scope, $http) {
    var auth = 'http://belfastcares.co.uk/api-token-auth/';

    return {
      getToken: function () {

        var data = {
          json: JSON.stringify({
              username: 'admin',
              password: 'bcadminpass123'
            }
          )
        };

        return $http.post(auth, data).success(function (data, status) {
          $scope.hello = data;
          console.log(data);
        });

      }
    }
  })


  .factory('Comics', function ($http) {
    var dataSource = 'http://samcroft.co.uk/comics-app/comics?callback=JSON_CALLBACK';

    return {
      getComics: function () {
        return $http.jsonp(dataSource);
      },
      getComic: function (comicId) {
        return $http.jsonp(dataSource, {
          params: {
            id: comicId
          }
        });
      }
    }
  });
