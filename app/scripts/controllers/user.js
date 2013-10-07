'use strict';

angular.module('KKnowMeApp').controller('UserCtrl', function($scope, Users) {
  $scope.login = function() {
    Users.$login($scope);
  };
});