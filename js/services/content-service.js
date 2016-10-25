define(['servicesFactory'],

  function(servicesFactory) {
    servicesFactory.factory('ContentService', [
      function() {
        var _scope;

        var service = {
          /* ------------ LANDING PAGE --------------*/

          profile_left_name: 'Sonya',
          profile_left_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          profile_right_name: 'Patricia',
          profile_right_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          blurb: 'This is the about section. To the right is Sonya, to the left is Patricia.',
          about_blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          producers: [
            {
              'name': 'Max',
              'profile_pic': 'http://placehold.it/150x150',
              'blurb': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
              'name': 'Alex',
              'profile_pic': 'http://placehold.it/150x150',
              'blurb': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
              'name': 'Joyce',
              'profile_pic': 'http://placehold.it/150x150',
              'blurb': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
          ],
          teammates: [
            {
              'name': 'Laura Heidenheim',
              'role': 'Executive Producer',
              'sub_role': '',
              'profile_pic': 'http://placehold.it/150x150',
              'facebook': 'http://facebook.com',
              'twitter': 'http://twitter.com',
              'email': 'info@shadesofoursisters.com'
            },
            {
              'name': 'Michael Rebellato',
              'role': 'Story Coordinator',
              'sub_role': '',
              'profile_pic': 'http://placehold.it/150x150',
              'facebook': 'http://facebook.com',
              'twitter': 'http://twitter.com',
              'email': 'info@shadesofoursisters.com'
            },
            {
              'name': 'Josephine Tse',
              'role': 'Production Manager',
              'sub_role': 'Digital Director',
              'profile_pic': 'http://placehold.it/150x150',
              'facebook': 'http://facebook.com',
              'twitter': 'http://twitter.com',
              'email': 'info@shadesofoursisters.com'
            },
            {
              'name': 'Melissa Gonzalez',
              'role': 'Editor',
              'sub_role': 'Cinematographer',
              'profile_pic': 'http://placehold.it/150x150',
              'facebook': 'http://facebook.com',
              'twitter': 'http://twitter.com',
              'email': 'info@shadesofoursisters.com'
            },
            {
              'name': 'Adam Gualtieri',
              'role': 'Director of Photography',
              'sub_role': 'Assistant Editor',
              'profile_pic': 'http://placehold.it/150x150',
              'facebook': 'http://facebook.com',
              'twitter': 'http://twitter.com',
              'email': 'info@shadesofoursisters.com'
            },
            {
              'name': 'Tomas Maturana',
              'role': 'Artistic Director',
              'sub_role': 'Curator',
              'profile_pic': 'http://placehold.it/150x150',
              'facebook': 'http://facebook.com',
              'twitter': 'http://twitter.com',
              'email': 'info@shadesofoursisters.com'
            },
            {
              'name': 'Joshua Howe',
              'role': 'Financial Officer',
              'sub_role': 'Marketing Director',
              'profile_pic': 'http://placehold.it/150x150',
              'facebook': 'http://facebook.com',
              'twitter': 'http://twitter.com',
              'email': 'info@shadesofoursisters.com'
            },
            {
              'name': 'Antoinetta Emmanuel',
              'role': 'Director of Audio',
              'sub_role': '',
              'profile_pic': 'http://placehold.it/150x150',
              'facebook': 'http://facebook.com',
              'twitter': 'http://twitter.com',
              'email': 'info@shadesofoursisters.com'
            }
          ]
        };

        service.init = function(scope) {
          _scope = scope;

          // Add the key-value pairs to render HTML content
          for (var key in service) {
            _scope[key] = service[key];
          }

          return service;
        };

        return service;
      }]);
  });
