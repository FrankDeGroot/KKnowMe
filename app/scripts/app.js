'use strict';

angular.module('KKnowMeApp', ['ngRoute', 'ngResource']).config(function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'MainCtrl',
    templateUrl: 'views/main.html'
  }).when('/profile', {
    controller: 'ProfileQueryCtrl',
    templateUrl: 'views/profile/query.html'
  }).otherwise({redirectTo: '/'});
});