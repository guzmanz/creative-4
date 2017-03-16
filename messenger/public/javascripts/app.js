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
    },
    tryit: function() {
      var politics = "https://zlzlap7j50.execute-api.us-east-1.amazonaws.com/prod";
      return $http
        .get(politics)
        .then(function (resp) {
          console.log("Get Worked");
          console.log(resp.data);
          return resp.data
        })
    }
  }

}

function mainCtrl ($scope,$http, messageFetcher) {

  $scope.messages = [];

  messageFetcher.get()
    .then(function (data) {
      $scope.messages = data
    })
  messageFetcher.tryit()
    .then(function (data) {
      console.log("tryit");
      console.log(data);
    })
  $scope.addMessage = function() {
    var formData = {name:$scope.Name,message:$scope.Message};
    console.log(formData);
    var messageURL = 'message';
    $http({
       url: messageURL,
       method: "POST",
       data: formData
    }).success(function(data, status, headers, config) {
      console.log("Post worked");
      messageFetcher.get()
      .then(function (data) {
        $scope.messages = data
      })
    }).error(function(data, status, headers, config) {
      console.log("Post failed");
    });
  }

}

