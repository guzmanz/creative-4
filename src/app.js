var app = window.angular.module('app', [])

app.factory('messageFetcher', messageFetcher)
app.controller('mainCtrl', mainCtrl)

function messageFetcher ($http) {

  var API_ROOT = 'pokemon'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }

}

function mainCtrl ($scope, pokemonFetcher) {

  $scope.messages = [{name: 'Username', message: 'HI!' }];

  messageFetcher.get()
    .then(function (data) {
      $scope.messages = data
    })
}
