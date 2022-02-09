var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  // var url = "https://api.coingecko.com/api/v3/exchanges/";
  $http.get('json.json').then(function (response) {
      $scope.myData = response.data;
      console.log($scope.myData);
  });
});