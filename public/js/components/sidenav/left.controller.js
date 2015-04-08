(function () {
    "use strict";

    angular.module("Tuner")
        .controller("LeftNavCtrl", ["$scope", "$log", "Menu", LeftNavCtrl]);

    function LeftNavCtrl($scope, $log, Menu) {

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

        $scope.setIndex = function (index) {
            if (typeof index == 'number') {
                $log.debug(index);
                Menu.index = index;
            } else {
                $log.debug("Menu factory property 'index' expects type Number");
            }
        };
    }
})();