/*
 ==========================================================================
 FundsXpert

 Graphical User Interface Programming II
 Professor Jessie Heines
 Michael Meding & Jose Flores
 2015-02-12

 ==========================================================================
 */
// create the controller and inject Angular's vm
(function () {
    "use strict";
    angular
        .module("fxClient")
        .controller("ClientsController",
        ["$http", "$scope","$modal", ClientsController]);

    function ClientsController($http, $scope, $modal) {
        var vm = this;

        vm.title = 'Clients Page';

        // create a message to display in our view
        vm.message = 'A nice clients table goes here';
        vm.alert = false;
        vm.userData = {};
        vm.deleteReturn = false;

        /**
         * Delete a given client from the database
         * @param client
         */
        vm.deleteClient = function (client) {


          vm.somethingReturn =  $modal.open({
                templateUrl: 'app/components/modals/delete/deleteModalTemplate.html',
                controller: 'deleteModalInstanceCtrl'
                });
            console.log(vm.somethingReturn);

            console.log("removing client with ID:" + client);

            var request = {
                method: 'POST',
                url: 'http://www.mikemeding.com/fx/contact/removeContact',
                data: {"id": client.id} // we delete using the unique news id number
            };
            $http(request)
                .success(function (data, status, headers, config, response) { // If call successful
                    console.log("delete News Sucessful");
                    vm.getClients(); // to refresh news articles
                })
                .error(function (data, status, headers, config, response) { // If call fails
                    console.log("delete News Failed");
                    console.log('response: ' + response); // response will contain reason why
                });
        }

        /**
         * Get all clients from the database to display to the page
         */
        vm.getClients = function () {
            var request = {
                method: 'GET',
                url: 'http://www.mikemeding.com/fx/contact/selectAll'
            };

            $http(request)
                .success(function (data, status, headers, config, response) { // If call successful
                    console.log("Get all contacts successful");
                    console.log('data:' + data);
                    vm.alert = false;
                    vm.userData = data;
                })
                .error(function (data, status, headers, config, response) { // If call fails
                    console.log("Get all contacts failed");
                    console.log('response: ' + response); // response will contain reason why
                    vm.alert = true;
                });
        }
        vm.getClients(); // call on inital page load


        /**
         *  @name   searchFilter
         *
         *  The filter used to display information in the client table
         *
         *  @param  obj     the row item being tested
         */
        vm.searchFilter = function (obj) {
            var re;    //  Holds the regular expression to search with

            //Initialization
            re = new RegExp(vm.query, 'i'); // a regular expression

            //  Returning true only when found in the object columns
            //  and there was something to search for
            return !vm.query ||
                re.test(obj.name) ||
                re.test(obj.email) ||
                re.test(obj.message) ||
                re.test(obj.refundAmount);
        }

    }
}());
