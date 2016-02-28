'use strict';

angular.module('adventurejs2App.auth', [
  'adventurejs2App.constants',
  'adventurejs2App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
