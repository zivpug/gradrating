app.directive('gradrating', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            // Init state
            rateCurrent: '@',
            // Init state
            rateRaters: '@',
            // array of classes for the rating buttons
            rateIconClasses: '=',
            // number of buttons (and max rate)
            rateCount: '@',
            // function to be called upon the rating action
            rateCallback: '&'
        },
        template: '<div style="clear: both; flex-wrap: wrap; margin-top:10px;">' +
        '<span class="rating" tabindex="{{ $index+1 }}" ' +
        'ng-repeat="rate in ratings" ' +
        'ng-keypress="enterState($index); rateCallback({ rate:$index+1 })" ' +
        'ng-click="enterState($index); rateCallback({ rate:$index+1 })" ' +
        'ng-focus="enterState($index)" ' +
        'ng-blur="removeState($index)" ' +
        'ng-mouseenter="enterState($index)" ' +
        'ng-mouseleave="removeState($index)">' +
        '<i ' +
        'ng-class="{{ rateIconClasses }}" ' +
        '></i>' +
        '</span> <span>  {{ rateRaters }} ratings </span>' +
        '</div>',

        link: function (scope, element, attrs, fn) {
            scope.rateCurrentΩ = (scope.rateCurrentΩ) ? scope.rateCurrentΩ : 0;

            // colors array - 5 colors for a basic 5 options rating
            // nice tool for easy generating - http://www.strangeplanet.fr/work/gradient-generator/
            const gradient = ["#B3122A", "#C77C26", "#DCE622", "#7B9878", "#1B4BCF"];
            // set base color
            const basecolor = '#eeeeee';

            // default ratecount
            if (!scope.rateCount) { scope.rateCount = 5};

            // prepare array for ng-repeat
            // and populate it with the colors
            scope.ratings = [];
            for (var i = 0; i < scope.rateCount; i++) {
                scope.ratings.push(gradient[i]);
            }
            // rating hover action
            scope.enterState = function (index) {
                for (var i = 0; i <= index; i++) {
                    element.children(i).eq(i).css('color', scope.ratings[i]);
                }
            };
            // rating remove hover action
            scope.removeState = function (index) {
                for (var i = 0; i <= index; i++) {
                    const color = (i < scope.rateCurrent) ? scope.ratings[i] : basecolor;
                    element.children(i).eq(i).css('color', color);
                }
            };

            var reset = function(){
                for (var i=0; i<scope.rateCount; i++){
                    scope.removeState(i);
                }};
            setTimeout(function(){reset()}, 1);
        }
    };
});


