/**
 * Created by anonymous on 03/01/16 5:02.
 */

(function() {
    'use strict';

    angular
        .module('client')
        .controller('ClientAsideController', ClientAsideController);

    ClientAsideController.$inject = ['$timeout', '$mdSidenav', '$log'];

    /* @ngInject */
    function ClientAsideController($timeout, $mdSidenav, $log) {
        var vm   = this;
        vm.title = 'ClientAsideController';
        vm.close = function() {
            $mdSidenav('right').close()
                .then(function() {
                    // $log.debug("close RIGHT is done");
                });
        };

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();
