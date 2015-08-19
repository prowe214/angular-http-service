var app = angular.module('http-app', []);

app.controller('controller', function ($scope, $http) {
  $http.get('https://api.github.com/zen')
    .then(function (data) {
      $scope.zenData = data.data;
    });
  $http.get('itunes.json')
    .then(function (data) {
      $scope.iTunesData = data.data;
    });
  $http.get('http://ww.fak.com/')
    .success(function (data) {
      $scope.badData = data.data;
    })
    .error(function (data) {
      $scope.badData = 'FAIL';
    });
  
});
