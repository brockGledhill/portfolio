var brockgledhill = angular.module('portfolio', ['ui.router', 'ngAnimate']);

brockgledhill.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'mainCtrl'
    });

});
