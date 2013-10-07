'use strict';

angular.module('KKnowMeApp').controller('NavCtrl', function ($scope, $location) {
  $scope.isUrl = function (path) {
    if ($location.path() === path) {
      return 'active';
    }
    return '';
  };
  $scope.hasUrl = function (path) {
    if ($location.path().search(path) === 0) {
      return 'active';
    }
    return '';
  };
});
