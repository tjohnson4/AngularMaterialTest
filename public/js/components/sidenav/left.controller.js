(function () {
    "use strict";

    angular.module("Tuner")
        .controller("LeftNavCtrl", ["$scope", "$log", "$mdSidenav", "$mdMedia", "$location", "Menu", LeftNavCtrl]);

    function LeftNavCtrl($scope, $log, $mdSidenav, $mdMedia, $location, Menu) {

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

                $location.path(Menu.items[Menu.index].action);

                if (!$mdMedia('gt-md')) {
                    $mdSidenav('left').toggle().then(function () {
                        $log.debug("toggle left is done");
                    });
                }

            } else {
                $log.debug("Menu factory property 'index' expects type Number");
            }
        };
    }
})();