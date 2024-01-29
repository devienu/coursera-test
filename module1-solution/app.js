(function () {

    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];    
    function LunchCheckController ($scope) {
        $scope.lunch_input = "";
        $scope.message = "";
        $scope.message_color = {};
        $scope.lunch_input_color = {};


        $scope.checkLunch = function () {
            if(!$scope.lunch_input.length){
                change_property("Please enter data first", "red", "red");
                return;
            }
            
            var count = get_count();
            console.log("count is : " + count);
            if(!count) {
                change_property("Please enter data first", "red", "red");
            }else if(count>3){
                change_property("Too much!", "green", "green");
            }else{
                change_property("Enjoy!", "green", "green");
            }
        }

        change_property.$inject = ['$message', '$color', '$border_color']
        function change_property ($message, $color, $border_color) {
            $scope.message = $message;
            $scope.message_color.style = {"color":$color};
            $scope.lunch_input_color.style = {"border-color":$border_color};    
        }

        function get_count () {
            var items = $scope.lunch_input.split(",");
            var count = remove_empty_entries(items);
            return count;
        }

        remove_empty_entries.$inject = ['$items'];
        function remove_empty_entries ($items) {
            var i=0;
            while(i<$items.length){
                if($items[i]==""){
                    $items.splice(i, 1);
                } else {
                    ++i;
                }
            }
            return $items.length;
        }

    };

})();