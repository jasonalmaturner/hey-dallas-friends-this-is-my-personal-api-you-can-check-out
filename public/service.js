angular.module('myApi').service('mainService', function($http) {

  this.getName = function() {
    return $http({
      method: 'GET',
      url: '/api/name',
    });
  };

  this.getHobbies = function() {
    return $http({
      method: 'GET',
      url: '/api/hobbies',
    });
  };

  this.addHobbie = function(hobbie) {
    return $http({
      method: 'POST',
      url: '/api/hobbies',
      data: {
        hobby: hobbie,
      },
    });
  };
});
