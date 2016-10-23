//TEMPLATE OF THE MAIN CONTROLLER FOR MAIN TEMPLATE HTML
//CONTROLLER DEFINTIIONS SHOULD BE MINIMAL SPECIFYING WHICH CONTROLLER USES WHICH SERVICE, ETC.

define(["controllersFactory",
  'services/content-service',
  'services/tab-service',
  'directives/landing-directives'],
  function(controllersFactory) {

  controllersFactory.controller('ContactCtrl',
    ['$scope',
     'ContentService',
     'TabService',

    function($scope,
      contentService,
      tabService) {
      var _destination_email = 'info@shadesofoursisters.com';
      var _email_subject = 'Shades of our Sisters';
      var _token = 'ef747346-4a86-4c35-b597-96ac5730dab1';

      $scope.contentService = contentService.init($scope);
      $scope.tabService = tabService.init($scope);
      $scope.tabService.setTab(2);

      $scope.name = '';
      $scope.email = '';
      $scope.message = '';

      $scope.submit = function() {
        // Append the user's name to the bottom of the message so we know who sent the email
        _email_body = $scope.message + '\n' + $scope.name;

        Email.send($scope.email,
        _destination_email,
        _email_subject,
        $scope.message,
        {token: _token});
      };
  }]);
});
