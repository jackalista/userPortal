'use strict';

angular.module('userPortalApp', [
  'userPortalApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ep.common',
  'ui.router',
  'ui.bootstrap'
])
  .config(function($urlRouterProvider,$stateProvider, $locationProvider) {

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      });
      
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
