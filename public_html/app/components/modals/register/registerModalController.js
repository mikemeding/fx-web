/*
 ==========================================================================
 FundsXpert

 Graphical User Interface Programming II
 Professor Jessie Heines
 Michael Meding & Jose Flores
 2015-02-12

 This is the controller for the registration form. It handles both the collection
 and submission of collected username and password to the backend server
 ==========================================================================
 */
(function () {
    "use strict";

    var app = angular.module('fxClient').controller('RegisterModalController', ['$scope', '$modal', function ($scope, $modal) {

        // JSON object for holding username and password
        $scope.userData = {};
        $scope.alert = false;


        /**
         * Opens the main page register modal
         * Based on the code from:
         * http://angular-ui.github.io/bootstrap/#/modal
         */
        $scope.open = function () {
            this.reset();

            // this is simalar to routes except with pre-loaded templates. See index.html <head> tag
            var modalInstance = $modal.open({
                templateUrl: 'app/components/modals/register/registerModalTemplate.html',
                controller: 'RegisterModalInstanceCtrl',
                resolve: { // this resolves the local vars of Instance Ctrl
                    userData: function () {
                        return $scope.userData;
                    },
                    alert: function () {
                        return $scope.alert;
                    }
                }
            });

        };

        /**
         * when the modal goes out of focus do not save user data
         */
        $scope.reset = function () {
            this.userData = {};
        };

    }]);

    /**
     * The per instance modal controller. This handles the actual submission of the data
     */
    app.controller("RegisterModalInstanceCtrl", ['$scope', '$modalInstance', 'userData', 'alert', '$http', '$state', function ($scope, $modalInstance, userData, alert, $http, $state) {
        $scope.userData = userData;
        $scope.alert = alert;

        $scope.ok = function () {
            console.log($scope.userData);
            var request = {
                method: 'POST',
                url: 'http://localhost:8080/fx-rest-1.0/fx/addFxUser', // for my local test machine
                //url: 'http://www.mikemeding.com/fx/addFxUser', // for deployed code
                data: userData
            };
            $http(request)
                .success(function (data, status, headers, config, response) {
                    console.log("Registration Sucessful");
                    console.log('status: ' + status);
                    $scope.alert = false;
                    $modalInstance.close();
                    console.log("user created");

                })
                .error(function (data, status, headers, config, response) {
                    console.log("Registration Failed");
                    console.log('status: ' + status);
                    $scope.alert = true;
                });

            //THIS WORKS FOR TESTING!
            //$http({
            //    method: 'GET',
            //    url: 'http://localhost:8080/fx-rest-1.0/fx/ping'
            //})
            //    .success(function (response) {
            //        console.log("SUCCESS" + response);
            //    })
            //    .error(function (response) {
            //        console.log("FAIL" + response);
            //    });


        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);


}());/**
 * Created by mike on 3/3/15.
 */
