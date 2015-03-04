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

        //TODO: this needs to come from http request
        vm.questions = [
            {text:'Try eating a sandwich.', title:'Can\'t login?'},
            {text:'Too flipping bad. Money isn\'t free.', title:'No Refund?'}];

        // create a message to display in our view
        vm.title = "Frequently Asked Questions"

    }
}());