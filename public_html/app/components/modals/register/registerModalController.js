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
        $scope.alertMessage = "Invalid information given.";

        $scope.ok = function () {
            //console.log($scope.userData);
            if ($scope.userData.password != $scope.userData.passwordConfirm) {
                console.log("password mismatch")
                $scope.alertMessage = "Password mismatch.";
                $scope.alert = true;
            } else {
                var request = {
                    method: 'POST',
                    url: 'http://www.mikemeding.com/fx/user/addUser', // for deployed code
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

            }
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);


}());
