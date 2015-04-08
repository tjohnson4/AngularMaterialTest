(function () {
    'use strict';

    angular.module("Tuner")
        .directive("leftSidenav", leftDirective);

    function leftDirective() {
        return {
            restrict : "E",
            controller : "LeftNavCtrl",
            replace : true,
            templateUrl  : "templates/left-sidenav.html"
        }
    }
})();