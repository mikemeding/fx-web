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
        .controller("NewsController",
        [NewsController]);

    function NewsController() {
        var vm = this;
        vm.title = 'News!';

        // create a message to display in our view
        vm.message = 'GET YOUR NEWS! FRESH HOT NEWS!';
    }
}());