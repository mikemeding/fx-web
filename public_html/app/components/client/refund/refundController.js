/* 
 ==========================================================================
 FundsXpert

 Graphical User Interface Programming II
 Professor Jessie Heines
 Michael Meding & Jose Flores
 2015-02-12

 ========================================================================== 
 */
// create the controller and inject Angular's $scope
(function () {
    "use strict";
    angular
        .module("fxClient")
        .controller("RefundController",
        [RefundController]);

    function RefundController() {
        var vm = this;
        vm.title = 'Apply For Refund';

        // create a message to display in our view
        vm.message = 'Someone wants their money back';
    }
}());