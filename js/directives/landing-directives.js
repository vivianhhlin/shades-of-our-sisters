//MAIN DIRECTIVE FOR MAIN TEMPLATE HTML

define(['directivesFactory'], function(directivesFactory){
  directivesFactory.directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/partials/navbar.html'
    };
  });
});
