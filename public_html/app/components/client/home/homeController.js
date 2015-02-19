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

        // create a message to display in our view
        vm.message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse orci enim, elementum vitae iaculis id, laoreet vel erat. Nam tempus justo a mattis auctor. Ut efficitur aliquam diam ac sodales. Pellentesque pretium finibus sapien, quis dignissim massa convallis quis. Morbi justo tortor, porttitor ac ipsum tincidunt, tempor dictum dui. Mauris pharetra aliquet cursus. Donec ut ligula lectus. Maecenas ligula est, faucibus a mauris quis, imperdiet placerat justo. Duis nec ipsum feugiat, venenatis metus id, facilisis justo. Vivamus faucibus pellentesque convallis.';

        vm.gotoRefund = function () {
            $state.go('refund');
        }
    }
}());