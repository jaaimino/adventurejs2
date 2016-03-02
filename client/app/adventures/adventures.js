'use strict';

angular.module('adventureJS')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myadventures', {
        url: '/adventures/mine',
        templateUrl: 'app/adventures/mine/mine.html',
        controller: 'MyAdventuresController'
      })
      .state('adventurescatalog', {
        url: '/adventures/catalog',
        templateUrl: 'app/adventures/catalog/catalog.html',
        controller: 'AdventuresCatalogController'
      })
      .state('adventurescreate', {
        url: '/adventures/create',
        templateUrl: 'app/adventures/create/create.html',
        controller: 'AdventuresCreateController'
      });
  });