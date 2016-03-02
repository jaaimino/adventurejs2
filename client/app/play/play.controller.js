'use strict';

angular.module('adventureJS')
  .controller('PlayController', function ($scope, $http, $stateParams, socket, Auth) {
    console.log($stateParams.sessionId);

    //Check logged in
    $scope.isLoggedIn = Auth.isLoggedIn;

    $scope.chatmessages = [];

    $http.get('/api/session/'+$stateParams.sessionId+'/messages').success(function(chatmessages) {
      $scope.chatmessages = chatmessages;
      socket.syncUpdates('message', $scope.chatmessages);
    });

    $scope.addMessage = function() {
      if($scope.newMessage === '') {
        return;
      }
      $http.post('/api/session/'+$stateParams.sessionId+'/messages/', {
        session: $stateParams.sessionId,
        user: Auth.getCurrentUser(), message: $scope.newMessage
      });
      $scope.newMessage = '';
    };

    $scope.deleteMessage = function(message) {
      $http.delete('/api/session/'+$stateParams.sessionId+'/messages/' + message._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('message');
      socket.unsyncUpdates('session');
    });

  });
