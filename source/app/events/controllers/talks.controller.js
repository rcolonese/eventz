angular.module('Eventz.Events')
    .controller('TalksController', [function () {
        var self = this;

        self.talks = [
            {
                "id": 0,
                "name": "Assitia",
                "place": "Baker, Wisconsin",
                "description": "Nisi elit sit esse amet velit proident reprehenderit labore esse culpa labore ut. Labore consequat nulla dolor incididunt anim. Esse ex irure laboris ad amet excepteur pariatur non laboris et do sint amet.\r\n",
                "start_date": "2016-05-13 14:06:05",
                "speaker": {
                    "name": "Maryellen Barlow",
                    "bio": "Aliqua quis velit incididunt laborum elit ipsum sunt fugiat Lorem pariatur nostrud exercitation velit minim. Nulla nisi fugiat cillum dolore eu dolore ipsum est. Magna excepteur incididunt commodo consequat excepteur. Est exercitation sunt anim sint do eu. Enim aliqua anim tempor esse ad nisi aliquip esse incididunt enim ullamco. Consequat minim sunt qui ad laborum consequat amet esse cillum aute excepteur qui.\r\n"
                }
            },
            {
                "id": 1,
                "name": "Rubadub",
                "place": "Leeper, Michigan",
                "description": "Aute ut consectetur id sit. Ut sit est ut est exercitation aliqua aute elit. Cupidatat tempor mollit commodo magna ea esse id voluptate nisi anim. Ex consequat commodo in aliquip amet magna voluptate enim. Non magna do aliquip deserunt anim sint proident. Proident sunt ex commodo elit excepteur id reprehenderit adipisicing.\r\n",
                "start_date": "2016-05-05 07:44:03",
                "speaker": {
                    "name": "Thomas Atkinson",
                    "bio": "Tempor in nulla tempor ullamco irure. Nostrud quis commodo laboris reprehenderit eu aliqua magna eiusmod reprehenderit duis ut adipisicing. Aliquip ad tempor incididunt occaecat dolore duis sunt sit deserunt irure consectetur. Fugiat ullamco laboris aliqua nulla amet dolore dolor eu ut cupidatat in do adipisicing culpa. Magna culpa irure et exercitation consequat eu occaecat quis ex irure. Adipisicing enim velit occaecat reprehenderit pariatur voluptate ut adipisicing. Qui dolor laboris et deserunt esse ipsum do sunt.\r\n"
                }
            },
            {
                "id": 2,
                "name": "Zepitope",
                "place": "Hannasville, District Of Columbia",
                "description": "Occaecat pariatur incididunt velit culpa aliqua reprehenderit voluptate velit. Adipisicing nisi magna cupidatat ut. Irure officia aute sit ullamco. Dolor deserunt exercitation nulla proident ex laborum ipsum ea reprehenderit veniam aliquip. Ea aliquip tempor do duis ea sit enim.\r\n",
                "start_date": "2016-05-23 12:39:45",
                "speaker": {
                    "name": "Ratliff Bell",
                    "bio": "Aute sunt tempor eiusmod Lorem laboris tempor esse sit culpa ex. Duis eiusmod ipsum tempor excepteur laborum excepteur. Incididunt aute anim fugiat est commodo dolore. Velit ea ullamco pariatur id occaecat labore fugiat cupidatat id anim id ut duis. Eiusmod esse cillum mollit non in qui consequat excepteur sit esse amet culpa labore. Elit ut do dolor ullamco deserunt cupidatat tempor pariatur nisi culpa ad ullamco occaecat. Nulla enim quis culpa duis qui Lorem deserunt cillum eu fugiat.\r\n"
                }
            },
            {
                "id": 3,
                "name": "Pivitol",
                "place": "Corinne, Puerto Rico",
                "description": "Aliquip cupidatat ex incididunt incididunt culpa pariatur et reprehenderit ea. Adipisicing fugiat aute veniam Lorem consectetur aute laborum nostrud non anim adipisicing minim. Deserunt ut ad aliquip consectetur magna. Pariatur ex proident est in veniam qui dolore esse fugiat adipisicing non anim eiusmod enim. Sint sit deserunt aliqua qui sunt. Laboris officia laborum esse irure excepteur eu non. Eu sit ut pariatur velit veniam enim laboris.\r\n",
                "start_date": "2016-05-05 06:31:30",
                "speaker": {
                    "name": "Elizabeth Trujillo",
                    "bio": "Adipisicing officia ipsum laborum cillum aliquip nisi consequat eu Lorem excepteur sint incididunt. Reprehenderit exercitation pariatur pariatur esse ea. Amet voluptate aute cupidatat aute laborum est do adipisicing ipsum consequat. Tempor aute officia ut adipisicing aute anim ea voluptate ut consectetur enim. Sit aute sunt dolore ea cillum veniam minim pariatur adipisicing. Consectetur dolore amet reprehenderit tempor laboris tempor quis qui duis commodo commodo laborum ullamco duis.\r\n"
                }
            },
            {
                "id": 4,
                "name": "Photobin",
                "place": "Finderne, Palau",
                "description": "In excepteur id consequat mollit. Reprehenderit velit occaecat anim quis consectetur laboris reprehenderit. Non reprehenderit labore eu Lorem. Dolor enim labore enim sint. Sunt consectetur velit adipisicing sint aliqua est Lorem consequat sit incididunt nisi officia eu. Minim tempor occaecat proident elit. Et aliquip amet elit veniam laborum nisi tempor reprehenderit officia magna.\r\n",
                "start_date": "2016-06-24 03:54:49",
                "speaker": {
                    "name": "Hicks Galloway",
                    "bio": "Magna et proident laboris esse laborum aliquip cupidatat ea fugiat duis. Ipsum consequat commodo in officia aliquip. Enim reprehenderit cupidatat non dolore ea elit est aliquip nisi. Quis irure nisi irure eiusmod nisi ad incididunt do aliquip exercitation dolor nostrud nulla nisi. Labore id ex minim qui ea anim commodo ex consectetur.\r\n"
                }
            },
            {
                "id": 5,
                "name": "Quinex",
                "place": "Grantville, Massachusetts",
                "description": "Cupidatat exercitation proident officia dolore veniam eu aliqua culpa anim nulla. Ipsum labore cillum in eu adipisicing consectetur aliqua ipsum qui. Nisi aliquip dolore non fugiat do aute. Pariatur sunt laboris sunt commodo aliquip proident laborum dolor.\r\n",
                "start_date": "2016-05-07 21:05:03",
                "speaker": {
                    "name": "Chelsea Lyons",
                    "bio": "Sint laborum nostrud culpa consectetur voluptate magna quis nulla enim magna in. Ullamco in cupidatat amet aliquip incididunt voluptate anim proident. Culpa mollit excepteur elit dolor in labore.\r\n"
                }
            },
            {
                "id": 6,
                "name": "Bovis",
                "place": "Glenshaw, Virginia",
                "description": "Commodo fugiat laborum ut id cillum quis enim sunt. Sit fugiat ullamco commodo ad incididunt elit Lorem labore nostrud dolore commodo enim cupidatat. Elit esse magna esse ad. Ea eiusmod do qui mollit ea sit. Dolor consequat cupidatat ex sint commodo. Quis consectetur do velit dolor in aute. Aute ut Lorem id enim fugiat non.\r\n",
                "start_date": "2016-06-11 04:05:23",
                "speaker": {
                    "name": "Nicole Gilmore",
                    "bio": "Cillum ipsum aliqua cillum laborum irure mollit excepteur non. Laborum proident officia aute commodo Lorem non irure. Nisi incididunt dolor sint aliquip deserunt commodo eiusmod exercitation pariatur qui nisi sit proident qui.\r\n"
                }
            }
        ];

        return self;
    }]);
