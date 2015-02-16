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
        .controller("FaqController",
        [FaqController]);

    function FaqController() {
        var vm = this;

        // create a message to display in our view
        vm.message = 'May I ass you a question?';
    }
}());