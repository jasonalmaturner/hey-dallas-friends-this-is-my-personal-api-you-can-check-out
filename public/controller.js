angular.module('myApi').controller('mainCtrl', function($scope, mainService) {
  mainService.getName().then(function(res) {
    $scope.name = res.data;
  });

  function getHobbies() {
    mainService.getHobbies().then(function(res) {
      $scope.hobbies = res.data;
    });
  };

  getHobbies();

  $scope.addHobbie = function() {
    mainService.addHobbie($scope.newHobbie).then(function(res) {
      getHobbies();
      $scope.newHobbie = '';
    });
  };
});
