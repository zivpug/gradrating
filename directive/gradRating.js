angular.module('rating').directive('gradrating', function() {
	return {
		restrict: 'E',
        replace:true,
        scope:{
            // array of classes for the rating buttons
            rateIconClasses:'=',
            // number of buttons (and max rate)
            rateCount:'@',
            // function to be called upon the rating action
            rateCallback:'&'
        },
        template: '<ul class="rating">' +
            '<li tabindex="{{ $index+1 }}" ng-repeat="rate in ratings" ng-keypress="enterState($index); rateCallback({ rate:$index+1 })" ng-click="enterState($index); rateCallback({ rate:$index+1 })" ng-focus="enterState($index)" ng-blur="removeState($index)" ng-mouseenter="enterState($index)" ng-mouseleave="removeState($index)">' +
            '<i ng-class="{{ rateIconClasses }}" ></i>' +
            '</li>' +
            '</ul>',

        link: function(scope, element, attrs, fn) {
            // colors array - 5 colors for a basic 5 options rating
            // nice tool for easy generating - http://www.strangeplanet.fr/work/gradient-generator/
            var gradient = ["#33CCFF", "#6699CC", "#996699", "#CC3366", "#FF0033"];

            // prepare array for ng-repeat
            // and populate it with the colors
            scope.ratings = [];
            for (var i = 0; i < scope.rateCount; i++) {
                scope.ratings.push(gradient[i]);
            }
            // rating hover action
            scope.enterState = function(index){
                for (i=0; i<=index; i++)
                {
                    element.children(i).eq(i).css('color',scope.ratings[i]);
                }
            };
            // rating remove hover action
            scope.removeState = function(index){
                for (i=0; i<=index; i++)
                {
                    element.children(i).eq(i).css('color','');
                }
            };
		}
	};
});

