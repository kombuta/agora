'use strict';

agoraApp.controller('MainCtrl', function ($scope, $http, configService) {
  $scope.title = configService.title;
  $scope.desc = configService.desc;

  var events = $http.get(configService.api + 'event.json');

  events.then(function(obj) {
    $scope.event = obj.data;
  }, function(error) {
    console.log(error);
    setError(error.status, error.data);
  });

  // Error handling.
  function setError(status, data) {
    if (angular.isUndefined(data)) {
      $scope.error = 'Oops, a ' + status + ' error occurred. Please try again later.';
    } else {
      $scope.error = 'Oops, a ' + status + ' error occurred. ' + data;
    }
  }
});
