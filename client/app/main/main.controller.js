'use strict';

angular.module('adventurejs2')
  .controller('MainCtrl', function ($scope, $http) {
      $scope.messages = [];
      var socket = io('/test');
      $scope.addThing = function(){};

      socket.on("connect", function(){
          $scope.addThing = function() {
          socket.emit('chat message', $scope.message);
          $scope.message = "";
        };
        socket.on('chat message', function(msg){
          $scope.$apply(function(){
            $scope.messages.push(msg);
          });
        });
      });
  });
