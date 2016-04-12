angular.module('Eventz.Users')
    .controller('RegisterController', ['$ionicPopup', function ($ionicPopup) {
        var self = this;
        self.user = {};
        self.errors = {};

        self.create = function(form){
            self.submitted = true;
            if(form.$valid){
                $ionicPopup.alert({
                    title: 'Register',
                    template: 'Register ok, thanks.',
                    buttons: [
                        {
                            text: 'close',
                            type: 'btn-positive'
                        }
                    ]
                });
            }
        };

        return self;
    }]);
