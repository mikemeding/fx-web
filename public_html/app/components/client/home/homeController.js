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
        .controller("HomeController",
        ['$state', HomeController]);

    function HomeController($state) {
        var vm = this;
        vm.title = 'Our Services';
        vm.image = 'assets/img/google-map.png' ;

        // create a message to display in our view
        vm.message = 'Our firm deals with property tax returns. Specifically when an individual overpays their property taxes due to a change in rates or zoning and the slow communication of these changes from their municipality. Through our specialized software system we can find how much you have paid and how much you should have paid according to revenue service data. When an individual overpays we can then be contracted to retrieve your return (minus a processing fee) to make sure Uncle Sam does not keep your hard earned money.' ;




        vm.gotoRefund = function () {
            $state.go('refund');
        }
    }
}());
