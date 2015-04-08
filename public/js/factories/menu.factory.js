(function () {
    'use strict';

    angular.module("Tuner")
        .factory('Menu', ["$http", "$log", menuFactory]);

    /**
     * use of promise was found in the stackoverflow thread below :
     * http://stackoverflow.com/questions/16286605/initialize-angularjs-service-with-asynchronous-data
     * */

    function menuFactory($http, $log) {
        var index = 0,
            items = [];

        $http.get("/api/menu")
            .success(function(data) { // data, status, headers, config
                $log.debug("on success", data);

                data.forEach(function (item) {
                    items.push(item);
                });
            })
            .error(function(data, status) {
                $log.debug(data, status);
            });

        return {
            items   : items,
            index   : index
        };
    }
})();