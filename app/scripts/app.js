/* exported agoraApp */

'use strict';

var agoraApp = angular.module('agora', [
  'ngCookies',
  'ngSanitize',
  'ngRoute',
  'LocalStorageModule'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
