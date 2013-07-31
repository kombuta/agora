'use strict';

agoraApp.directive('signupForm', function (localStorageService) {
  return {
    replace: true,
    templateUrl: 'views/signup-form.html',
    restrict: 'EA',
    link: function postLink(scope, element, attrs) {
      // Get the previously submitted email.
      var storedemail = localStorageService.get('subscriberMail');
      if (storedemail) {
        scope.email = storedemail;
      }

      scope.signUp = function(email) {
        localStorageService.add('subscriberMail', email);
        alert('Signed up with email: ' + email);
      };
    }
  };
});
