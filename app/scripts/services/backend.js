'use strict';

angular.module('KKnowMeApp').
  constant('url', 'https://baas.kinvey.com').
  constant('appKey', 'kid_PeLjtSxjMq').
  constant('appSecret', 'd118bade835b471e9d609885ad187f1c').
  factory('BackendSrv', function () {//$resource, url, appKey, appSecret) {
    //var userUrl = url + '/user/' + appKey;
    //var user = $resource(userUrl + '/:id');
    //var login = $resource(userUrl + '/login');
    return {

    };
  });