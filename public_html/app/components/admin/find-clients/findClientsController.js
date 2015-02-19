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
        .controller("FindClientsController",
        [FindClientsController]);

    function FindClientsController() {
        var vm = this;
        vm.byName = "";
        vm.byAddress = "";

        vm.title = 'Find Clients';

        // create a message to display in our view
        vm.message = 'Find new clients';

        vm.findClient = function () {
            console.log('byName: ' + vm.byName + ' byAddress: ' + vm.byAddress)
        }
    }
}());