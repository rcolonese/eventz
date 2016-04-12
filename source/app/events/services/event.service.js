angular.module('Eventz.Events')
    .factory('Event', ['$resource', '$rootScope', 'Config', function($resource, $rootScope, Config){
        var service = $resource(Config.endpoint + '/users/:id');

        return service;
    }]);
