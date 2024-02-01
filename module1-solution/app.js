(function () {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];    
    function LunchCheckController ($scope) {
        $scope.dishes_input = "";
        $scope.displaymessage = "";
       
        $scope.checkLunch = function () {
         var dishescount= getCountDishes($scope.dishes_input);
         if(!dishescount){
            $scope.displaymessage="Please enter data first";            
         }else if(dishescount>3){
            $scope.displaymessage="Too much!";
         }else{
            $scope.displaymessage="Enjoy!";
         }
        };
    }
    getCountDishes.$inject = ['$scope.dishes_input'];
    function getCountDishes($dishes_input)
    {
        var $items = $dishes_input.split(",");
        var i=0;
        while ( i<$items.length){
            if($items[i]==""){
                $items.splice(i,1);
            }else{
                ++i;
            }
        }
        return $items.length;
    }

})();