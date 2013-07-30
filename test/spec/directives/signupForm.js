'use strict';

describe('Directive: signupForm', function () {
  beforeEach(module('agora'));
  beforeEach(module('views/signup-form.html'));

  var element;
  beforeEach(inject(function($rootScope, $compile, $httpBackend) {
    this.scope = $rootScope.$new();
    this.$compile = $compile;
    this.$httpBackend = $httpBackend;
  }));

  it('should initiate correctly', function () {
    element = angular.element('<div><signup-form></signup-form></div>');
    element = this.$compile(element)(this.scope);
    // console.log(element.parent().html());
    // expect(element.parent().html()).toBe('this is the subscribeForm directive');
  });
});
