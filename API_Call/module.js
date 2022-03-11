var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  // var url = "https://api.coingecko.com/api/v3/exchanges/";
  // $http.get(url).then(function (response) {
  //     $scope.myData = response.data;
  //     console.log($scope.myData);
  // });

  let url = 'json.json';
  $http.get(url).then( (response)=> {
    $scope.myData = response.data;
  })

  $scope.orderByMe = function(x){
    $scope.myOrderBy = x;
  }

});