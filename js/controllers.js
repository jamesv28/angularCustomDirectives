app.controller('myController', ['$scope', function($scope) {


    $scope.title = "Learning about custom directives";

    $scope.friends = [
        {
            id: 1,
            firstName: 'Steve',
            lastName: 'Rodgers',
            age: 93,
            tweets: [
                {
                    id: 1,
                    tweet: 'Black Panther is a bitch for wearing an entire vibranium suit'
                },
                {
                    id: 2,
                    tweet: 'Every time someone tries to prevent a war before it startss, innocent people die'
                }
            ]
        },
        {
            id: 2,
            firstName: 'Bucky',
            lastName: 'Barnes',
            age: 94,
            tweets: [
                {
                    id: 1,
                    tweet: 'You used to put newspaper in your shoes'
                },
                {
                    id: 1,
                    tweet: 'I accidentally killed Black Panther\s father'
                }
            ]
        }
    ]

}]);
