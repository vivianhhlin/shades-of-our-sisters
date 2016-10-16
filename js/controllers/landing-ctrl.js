//TEMPLATE OF THE MAIN CONTROLLER FOR MAIN TEMPLATE HTML
//CONTROLLER DEFINTIIONS SHOULD BE MINIMAL SPECIFYING WHICH CONTROLLER USES WHICH SERVICE, ETC.

define(["controllersFactory",
  'services/content-service',
  'services/tab-service',
  'directives/landing-directives'],
  function(controllersFactory) {

  controllersFactory.controller('LandingCtrl',
    ['$scope',
     'ContentService',
     'TabService',

    function($scope,
      contentService,
      tabService) {

      $scope.contentService = contentService.init($scope);
      $scope.tabService = tabService.init($scope);
      $scope.tabService.setTab(0);

      // Only on the landing page should the navbar and footer should be transparent
      // Rather than loading a different css sheet for the different pages, keep the same css sheet and use jQuery to govern this behaviour
  }]);
});
