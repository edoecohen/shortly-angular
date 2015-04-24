angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};

  // $scope.data.links = [ 'link1', 'link2' ];
  $scope.getLinks = function(){
    Links.getAll().
      then(function(links){
        $scope.data.links = links;
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  $scope.getLinks();

  $scope.signout = function () {
    Auth.signout()

      .catch(function (error) {
        console.error(error);
      });
  };



});
