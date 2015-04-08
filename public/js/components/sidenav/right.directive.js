(function () {
    'use strict';

    angular.module("Tuner")
        .directive("rightSidenav", rightSidenavDirective);

    function rightSidenavDirective() {
        return {
            restrict : "E", // E, =, @
            controller : "RightNavCtrl",
            templateUrl : "templates/right-sidenav.html",
            replace : true
        }
    }
})();