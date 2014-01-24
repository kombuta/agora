'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  angular.module('MainCtrl.Mock', ['agora']).
    factory('configService', function() {
      return {
        title: 'test',
        desc: 'test more',
        api: 'http://example.com/'
      };
    });
  beforeEach(module('MainCtrl.Mock'));

  var scope;
  var eventObj = {
    "date": "2013-04-21T18:25:43-05:00",
    "title": "test event",
    "desc": "this is a test event"
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $http, $httpBackend) {
    this.$controller = $controller;
    scope = this.scope = $rootScope.$new();
    this.$http = $http;
    this.$httpBackend = $httpBackend;
  }));

  afterEach(function() {
    this.$httpBackend.verifyNoOutstandingRequest();
    this.$httpBackend.verifyNoOutstandingExpectation();
  });

  it('should initiate without errors', function () {
    this.$httpBackend.expectGET('http://example.com/event.json').respond(eventObj);

    this.$controller('MainCtrl', {
      $scope: this.scope,
      $http: this.$http
    });
    this.$httpBackend.flush();

    expect(scope.title).toEqual('test');
    expect(scope.desc).toEqual('test more');
    expect(scope.event).toEqual(eventObj);
    expect(scope.error).toBeUndefined();
  });

  it('should handle errors correctly with a status only', function () {
    this.$httpBackend.expectGET('http://example.com/event.json').respond(
      500
    );

    this.$controller('MainCtrl', {
      $scope: this.scope,
      $http: this.$http
    });
    this.$httpBackend.flush();

    expect(scope.title).toEqual('test');
    expect(scope.desc).toEqual('test more');
    expect(scope.event).toBeUndefined();
    expect(scope.error).toEqual('Oops, a 500 error occurred. Please try again later.');
  });

  it('should handle errors correctly with data and a status', function () {
    this.$httpBackend.expectGET('http://example.com/event.json').respond(
      500,
      'A test error.'
    );

    this.$controller('MainCtrl', {
      $scope: this.scope,
      $http: this.$http
    });
    this.$httpBackend.flush();

    expect(scope.title).toEqual('test');
    expect(scope.desc).toEqual('test more');
    expect(scope.event).toBeUndefined();
    expect(scope.error).toEqual('Oops, a 500 error occurred. A test error.');
  });
});
