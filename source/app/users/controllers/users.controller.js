angular.module('Eventz.Users')
    .controller('UsersController', ['User', function (User) {
        var self = this;
        User.query().$promise.then(function(data){
            self.users = data;
        });

        return self;
    }]);
