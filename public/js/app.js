(function () {
    "use strict";

    angular.module( "Tuner", [
            "ngMaterial",
            "ngMdIcons"
        ])
        .controller('appCtrl', appCtrl);

    function appCtrl($scope, $timeout, $mdSidenav, $log, socket) {
        $scope.toggleLeft = function() {
            $mdSidenav('left').toggle().then(function() {
                $log.debug("toggle left is done");
            });
        };
        $scope.toggleRight = function() {
            $mdSidenav('right').toggle().then(function() {
                $log.debug("toggle RIGHT is done");
            });
        };

        socket.on('init', function (data) {
            $log.debug("socket.connected");

        });
    }
})();