//TEMPLATE OF THE MAIN CONTROLLER FOR MAIN TEMPLATE HTML
//CONTROLLER DEFINTIIONS SHOULD BE MINIMAL SPECIFYING WHICH CONTROLLER USES WHICH SERVICE, ETC.

define(["controllersFactory",
  'services/content-service',
  'directives/landing-directives'],
  function(controllersFactory) {

  controllersFactory.controller('LandingCtrl',
    ['$scope',
     'ContentService',

    function($scope,
      contentService) {

      $scope.contentService = contentService.init($scope);

      for (var key in contentService) {
        $scope[key] = contentService[key];
      }
  }]);
});
