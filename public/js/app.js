(function () {
    "use strict";

    angular.module( "Tuner", [
            "ngMaterial",
            "ngMessages",
            "ngMdIcons",
            "ngRoute"
        ])
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when("", {
                        redirectTo : "/playing"
                    })
                    .when('/playing', {
                        templateUrl: 'templates/playing.html',
                        controller: 'PlayingCtrl'
                    })
                    .when('/search', {
                        templateUrl: 'templates/search.html',
                        controller: 'SearchCtrl'
                    })
                    .otherwise({
                        redirectTo: '/playing'
                    });
            }]);
})();