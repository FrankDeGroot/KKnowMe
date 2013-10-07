'use strict';

angular.module('KKnowMeApp').
        constant('url', 'https://baas.kinvey.com').
        constant('appKey', 'kid_PeLjtSxjMq').
        constant('appSecret', 'd118bade835b471e9d609885ad187f1c').
        factory('Users', function($resource, url, appKey, appSecret) {
  var userUrl = url + '/user/' + appKey;
  return $resource(userUrl + '/:id', {
    me: {
      method: 'GET',
      url: userUrl + '/_me'
    },
    login: {
      method: 'POST',
      url: userUrl + '/login',
      headers: {
        Authorization: appSecret
      }
    }
  });
});