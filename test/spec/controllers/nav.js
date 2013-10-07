'use strict';

describe('NavCtrl', function () {
    var controller, path, location, scope;

    beforeEach(angular.mock.module('KKnowMeApp'));
    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
        path = undefined;
        location = {
            path: function () {
                return path;
            }
        };
        scope = $rootScope.$new();
        controller = $controller('NavCtrl', { $scope: scope, $location: location });
    }));

    it('Should return an empty string when url does not match', function () {
        path = 'url1';
        expect(scope.isUrl('url2')).toEqual('');
    });

    it('Should return the className when url does match', function () {
        path = 'url1';
        expect(scope.isUrl('url1')).toEqual('active');
    });

    it('Should return an empty string when current url does not start with the supplied url', function () {
        path = 'url1-url';
        expect(scope.hasUrl('url2')).toEqual('');
    });

    it('Should return the className when current url starts with the supplied url', function () {
        path = 'url1-url';
        expect(scope.hasUrl('url1')).toEqual('active');
    });
});
