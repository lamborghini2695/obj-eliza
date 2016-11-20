var app = angular.module('elisApp', ['ui.router', 'ui.bootstrap', 'slickCarousel']);

app.config(function($stateProvider) {

  $stateProvider.state({
    name: 'home',
    url: '/',
    templateUrl: 'views/home.html'
  }).state({
    name: 'eat',
    url: '/eat',
    templateUrl: 'views/eat.html'

  }).state({
    name: 'learn',
    url: '/learn',
    templateUrl: 'views/learn.html'

  }).state({
    name: 'move',
    url: '/move',
    templateUrl: 'views/move.html'

  });
});


app.controller('HomeController', ['$scope', function($scope) {
  $scope.slickConfig = {
    method: {},
    dots: true,
    infinite: true,
    autoplay: false,
    // autoplaySpeed: 200,
    speed: 300,
    slidesToShow: 1,
    centerMode: true
  };
}]);