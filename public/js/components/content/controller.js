(function () {
    'use strict';

    angular.module("Tuner")
        .controller("ContentCtrl", ["$scope", "$mdSidenav", "$log", "Menu", contentController]);

    function contentController($scope, $mdSidenav, $log, Menu) {

        /**
         * Side Nav Methods
         * */
        $scope.toggleLeft = function () {
            $mdSidenav('left').toggle().then(function () {
                $log.debug("toggle left is done");
            });
        };

        $scope.toggleRight = function () {
            $mdSidenav('right').toggle().then(function () {
                $log.debug("toggle RIGHT is done");
            });
        };

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