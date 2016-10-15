define(["servicesFactory"], function(servicesFactory) {

  servicesFactory.factory('TabService', function() {
    var _scope;

    var tabService = {
      _tab: 0,

      isSet: function(checkTab) {
        return tabService._tab === checkTab;
      },

      setTab: function(setTab) {
        tabService._tab = setTab;
      }
    };

    tabService.init = function(scope){
      _scope = scope;
      return tabService;
    };

    return tabService;
  });
});
