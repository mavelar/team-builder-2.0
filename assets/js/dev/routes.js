var app = angular.module('myapp', ['ngRoute']);
app.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : '/views/home',
                controller  : 'homeCtrl'
            }).when('/teambuilder', {
                templateUrl : '/views/teambuilder',
                controller  : 'teamCtrl'
            }).when('/404', {
                templateUrl : '/views/404'
            })
            .otherwise({
                redirectTo: '/404'
              });
    });