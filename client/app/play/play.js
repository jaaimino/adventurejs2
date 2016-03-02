'use strict';

angular.module('adventureJS')
  .config(function ($stateProvider) {
    $stateProvider
      .state('play', {
        url: '/play/:sessionId',
        templateUrl: 'app/play/play.html',
        controller: 'PlayController'
      });
  });