(function () {
    "use strict";

    angular.module("Tuner")
        .controller("RightNavCtrl", ["$scope", "$log", "Menu", rightNavCtrl]);

    function rightNavCtrl($scope, $log, Menu) {

        // watch the service for changes to items
        $scope.$watch(function(){
            return Menu.items;
        }, function(items){
            $scope.items = items;
        }, true);

        $scope.$watch(function(){
            return Menu.index;
        }, function(index){
            $scope.index = index;
        }, true);
    }
})();