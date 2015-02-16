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
        .controller("ContactController",
        [ContactController]);

    function ContactController() {
        var vm = this;
        vm.title = 'Contact Us';

        // create a message to display in our view
        vm.message = 'Some crappy phone numbers and email addresses';
    }
}());