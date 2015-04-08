(function () {
    "use strict";

    angular.module( "Tuner", [
            "ngMaterial",
            "ngMdIcons",
            "ngRoute"
        ])
        .controller('appCtrl', ["$log", "Socket", appCtrl]);


    function appCtrl($log, Socket) {
        /**
         * Socket Methods*/
        Socket.on('init', function (data) {
            $log.debug("socket.connected");
        });
    }
})();