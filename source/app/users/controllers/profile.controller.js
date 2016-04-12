angular.module('Eventz.Users')
    .controller('ProfileController', ['$ionicTabsDelegate', function ($ionicTabsDelegate) {
        var self = this;
        self.profile = {
            name: "Eventz",
            email: 'imnotabot@starkcorp.io'
        };

        self.selectTabWithIndex = function(index) {
            $ionicTabsDelegate.select(index);
        }

        return self;
    }]);
