angular.module('Eventz.Events')
    .directive('talkItem', function(){
        return {
            restrict: 'AE',
            replace: 'true',
            templateUrl: 'app/events/templates/single.talk.list.html'
        };
    });
