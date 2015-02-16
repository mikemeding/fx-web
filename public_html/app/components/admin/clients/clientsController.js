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
        .controller("ClientsController",
        [ClientsController]);

    function ClientsController() {
        var vm = this;
        vm.title = 'Clients Page';

        // create a message to display in our view
        vm.message = 'A nice clients table goes here';
    }
}());