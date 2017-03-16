var app = window.angular.module('app', [])

app.factory('messageFetcher', messageFetcher)
app.controller('mainCtrl', mainCtrl)

function messageFetcher ($http) {

  var API_ROOT = 'message'
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

function mainCtrl ($scope, messageFetcher) {

  $scope.messages = [];

  messageFetcher.get()
    .then(function (data) {
      $scope.messages = data
    })
}
