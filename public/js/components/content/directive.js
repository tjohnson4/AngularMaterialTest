(function () {
    'use strict';

    angular.module("Tuner")
        .directive("content", contentDirective);

    function contentDirective() {
        return {
            restrict : "E", // E, =, @
            controller : "ContentCtrl",
            templateUrl : "templates/content.html",
            replace : true
        }
    }
})();