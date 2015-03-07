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
        ["$http", "$scope", ClientsController]);

    function ClientsController($http, $scope) {
        var $scope = this;

        $scope.title = 'Clients Page';

        // create a message to display in our view
        $scope.message = 'A nice clients table goes here';
        $scope.alert = false;
        $scope.userData = {};
        $scope.sortOrder ='-id';

        var request = {
            method: 'GET',
            url: 'http://www.mikemeding.com/fx/contact/selectAll'
        };

        $http(request)
            .success(function (data, status, headers, config, response) { // If call successful
                console.log("Get all contacts successful");
                console.log('data:' + data);
                $scope.alert = false;
                $scope.userData = data;
            })
            .error(function (data, status, headers, config, response) { // If call fails
                console.log("Get all contacts failed");
                console.log('response: ' + response); // response will contain reason why
                $scope.alert = true;
            });
    }
}());