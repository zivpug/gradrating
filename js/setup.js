var app = angular.module('rating', []);


app.controller('mainCtrl',function($scope){

    $scope.vote = '';

    // function to be used for rating
    $scope.logRating = function(rate){
        $scope.vote = rate;
        console.log(rate)
    };

});
