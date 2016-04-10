/**
 * This is where the magic is going to happen
 */

angular.module('contacts', [])
.directive('contactCard', function() {
        return {
            restrict: 'E',  //using E to restrict to an element. Can also use A
            scope: {
                friend: '='
            },
            transclude: true,
            link: function(scope, element, attr) {
              console.log(arguments) ;
            },
            templateUrl: 'partials/contactCard.html',
            controller: function($scope) {
                console.log($scope.friend);
            }
        }
    });  //end of directive