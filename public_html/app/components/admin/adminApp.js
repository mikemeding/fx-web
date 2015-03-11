/* 
 ==========================================================================
 FundsXpert

 Graphical User Interface Programming II
 Professor Jessie Heines
 Michael Meding & Jose Flores
 2015-02-12

 ========================================================================== 
 */
//
(function () { // this is to protect global namespace
    "use-strict"; // for strict syntax checking

    var app = angular.module('fxClient');

    app.controller("AdminController",
        ["$http", "$cookieStore", AdminController]);

    function AdminController($http, $cookieStore) {
        var vm = this;

        vm.logout = function () {
            console.log("Removing cookie, user: " + $cookieStore.get('user'));
            $cookieStore.remove('user');
        }
    }

})();