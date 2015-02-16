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
        .controller("EditConfigController",
        [EditConfigController]);

    function EditConfigController() {
        var vm = this;
        vm.title = 'Edit Site';

        // create a message to display in our view
        vm.message = 'Edit the site users and static content';
    }
}());