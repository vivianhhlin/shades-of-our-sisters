//TEMPLATE OF THE MAIN CONTROLLER FOR MAIN TEMPLATE HTML
//CONTROLLER DEFINTIIONS SHOULD BE MINIMAL SPECIFYING WHICH CONTROLLER USES WHICH SERVICE, ETC.

define(["controllersFactory",
  'directives/landing-directives'],
  function(controllersFactory) {

  controllersFactory.controller('LandingCtrl',
    ['$scope',

    function($scope,
      projectService) {
  }]);

});
