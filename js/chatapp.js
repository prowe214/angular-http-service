var app = angular.module('chat-app', []);

app.controller('ChatController', function ($scope, $http) {
    $http.get('https://shielded-peak-6345.herokuapp.com/messages')
    .then(function (data) {
      $scope.messages = data.data;
    });
  $scope.post = function () {
    $http.post('https://shielded-peak-6345.herokuapp.com/messages',
      {message: {
        name: $scope.name,
        content: $scope.content
      }})
      .then(function (dataset) {
        var newpost = {};
        newpost.name = $scope.name;
        newpost.content = $scope.content;
        $scope.messages.push(newpost);
      });
  };
});
