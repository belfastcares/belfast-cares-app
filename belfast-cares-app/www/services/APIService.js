/**
 * Created by apoclyps on 16/10/2016.
 */
angular.module('starter.apiservice', [])

  .factory('Comics', function($http) {
    var dataSource = 'http://samcroft.co.uk/comics-app/comics?callback=JSON_CALLBACK';

    return {
      getComics: function() {
        return $http.jsonp(dataSource);
      },
      getComic: function(comicId) {
        return $http.jsonp(dataSource, {
          params: {
            id: comicId
          }
        });
      }
    }
  });
