'use strict';

angular.module('agora')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.config = {
      title: 'Agora',
      desc: 'The agora was a central spot in ancient Greek city-states. The literal meaning of the word is "gathering place" or "assembly". The agora was the center of athletic, artistic, spiritual and political life of the city.[1] The Ancient Agora of Athens was the best-known example, birthplace of democracy.A Drupal/Angular project to simplify the running of various usergroup meetups.The aim is to create this project a little step at a time for monthly Drupal meetups (JHB, South Africa). By the end of the year this will be a full featured project that was build from the ground up using the latest trends and technologies. The aim is to allow everyone to partake, from novice developer, designer to web gurus. We identified the basic skills/trends we want to touch on throughout the span of this project, which various speakers will address in the monthly meetups.',
      apiEndpoint: '/'
    };

    var events = $http.get("/event.json");

    events.then(function(obj) {
      $scope.event = obj.data;
    }, function(error) {
      console.log(error);
      setError(error.status, error.data);
    });

    // Error handling.
    function setError(status, data) {
      if (angular.isUndefined(data)) {
        $scope.error = "Oops, a " + status + " error occurred. Please try again later.";
      } else {
        $scope.error = "Oops, a " + status + " error occurred. " + data;
      }
    }
  });
