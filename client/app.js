'use strict';

angular.module('adventurejs2', [
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');
    //$locationProvider.html5Mode(true);
  });