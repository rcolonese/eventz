angular.module('Eventz.Events', [])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('app.events', {
                url: '/events',
                views: {
                    'menuContent': {
                        templateUrl: 'app/events/templates/events.html',
                        controller: 'EventsController as Events'
                    }
                }
            })
            .state('app.event', {
                url: '/events/:event',
                views: {
                    'menuContent': {
                        templateUrl: 'app/events/templates/talks.html',
                        controller: 'TalksController as Talks'
                    }
                }
            });
    }]);
