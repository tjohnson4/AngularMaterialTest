(function () {
    'use strict';

    angular.module("Tuner")
        .factory('Menu', ["$http", "$log", menuFactory]);

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