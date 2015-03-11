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
        ['$state' , RefundController]);

    function RefundController( $state ) {
        var vm = this;
        vm.title = 'Apply For Refund';

        // create a message to display in our view
        vm.message = 'Someone wants their money back';

        // no. just no. why would you do this and not tell me?
        //vm.gotoReport = function () {
        //    $state.go('report' );
        //}


    }
}());
