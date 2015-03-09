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
        .controller("EditConfigController",
        ["$scope","$http",EditConfigController]);

    function EditConfigController($scope,$http) {
        var vm = this;
        vm.title = 'Edit Site';

        vm.successAlert = false;
        vm.failureAlert = false;

        vm.userData = {} // arguments go here in JSON notation

        vm.submitNews = function () {
            console.log("submit news");
            vm.userData.user = "mike"; // TODO: this needs to be fixed

            var request = {
                method: 'POST',
                url: 'http://www.mikemeding.com/fx/news/addNews',
                data: vm.userData
            };

            $http(request)
                .success(function (data, status, headers, config, response) { // If call successful
                    console.log("News Submission Sucessful");
                    vm.successAlert = true;
                    vm.failureAlert = false;
                    vm.userData.title = undefined ;
                    vm.userData.text = undefined ;
                })
                .error(function (data, status, headers, config, response) { // If call fails
                    console.log("News Submission Failed");
                    vm.failureAlert = true;
                    vm.successAlert = false;
                });

        }


    }
})();
