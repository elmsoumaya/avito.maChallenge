var myApp = angular.module('Vimeo', []);

myApp.controller('VimeoController', ['$scope', '$http', function($scope, $http) {
  $scope.page = 2;
  $scope.per_page = 10;
  $scope.sort = 'default';

  var apiEndpoint = 'https://api.vimeo.com/';
  var channel = "channels/top/videos";
  var accessToken = "bb447d31fdf97989b42b4d11950b17e7";

  $scope.update = function(page_link) {
    var link = apiEndpoint + channel + "?access_token=" + accessToken + "&per_page=" + $scope.per_page + "&page=" + $scope.page;

    if (page_link) {
      link = apiEndpoint + page_link
    } else {
      if ($scope.sort != "default") {
        link += "&sort=" + $scope.sort;
      }
      if ($scope.query) {
        link += "&query=" + $scope.query;
      }
    }
    $http.get(link).then(function(response) {
      $scope.results = response.data;
    });
  }
  $scope.update();
}]);