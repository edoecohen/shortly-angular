angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {

  $scope.link = {};

  $scope.success = false;

  $scope.addLink = function(){
    $scope.link.url = $scope.url;
    JSON.stringify($scope.link);

    Links.addLink($scope.link)
      .then(function(resp){
        $scope.link = resp;
        $scope.success = true;
      })
  };

  $scope.signout = function () {
    Auth.signout()
      .then(function () {
        console.log('user is signedout!');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
