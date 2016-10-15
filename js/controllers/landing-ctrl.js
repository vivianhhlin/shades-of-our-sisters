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
      _tab = 0;
      _clicked = false;

      $scope.contentService = contentService.init($scope);

      // Add the key-value pairs to render HTML content
      for (var key in contentService) {
        $scope[key] = contentService[key];
      }

      $scope.isSet = function(tab) {
        return _tab === tab;
      };

      $scope.setTab = function(tab) {
        _tab = tab;
      };

      $scope.clickToggle = function() {
        _clicked = !_clicked;
        console.log(_clicked);

        if ($scope) {
          $scope.$digest();
        }
      };
  }]);
});
