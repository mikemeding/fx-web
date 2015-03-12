/*
 ==========================================================================
 FundsXpert

 Graphical User Interface Programming II
 Professor Jessie Heines
 Michael Meding & Jose Flores
 2015-02-12

 This is the controller for the login form. It handles both the collection
 and submission of collected username and password to the backend server
 ==========================================================================
 */
(function () {
    "use strict";

    var app = angular.module('fxClient')
        .controller('LoginModalController',
        ['$scope', '$modal', '$cookieStore', '$state', function ($scope, $modal, $cookieStore, $state) {

            // JSON object for holding username and password
            $scope.userData = {};
            $scope.alert = false;

            /**
             * Opens the main page login modal
             * Based on the code from:
             * http://angular-ui.github.io/bootstrap/#/modal
             */
            $scope.open = function () {
                this.reset();

                if ($scope.getLoggedInUser() === "Login") {
                    // this is simalar to routes except with pre-loaded templates. See index.html <head> tag
                    var modalInstance = $modal.open({
                        templateUrl: 'app/components/modals/login/loginModalTemplate.html',
                        controller: 'loginModalInstanceCtrl',
                        resolve: { // this resolves the local vars of Instance Ctrl
                            userData: function () {
                                return $scope.userData;
                            },
                            alert: function () {
                                return $scope.alert;
                            }
                        }
                    });
                } else {
                    $state.go("admin.clients"); // navigate to admin.clients page
                }
            };

            /**
             * when the modal goes out of focus do not save user data
             */
            $scope.reset = function () {
                this.userData = {}
                $scope.alert = false;
            };

            /**
             * gets the logged in user if the cookie exists
             */
            $scope.getLoggedInUser = function () {
                var user = $cookieStore.get('user');
                if (user === '' || user === undefined) {
                    user = 'Login';
                }
                return user;
            }

        }]);

    /**
     * The per instance modal controller. This handles the actual submission of the data
     */
    app.controller("loginModalInstanceCtrl", ['$scope', '$modalInstance', 'userData', 'alert', '$http', '$state', '$cookieStore', function ($scope, $modalInstance, userData, alert, $http, $state, $cookieStore) {
        $scope.userData = userData;
        $scope.alert = alert;
        $scope.alertMessage = '';

        $scope.validateLoginForm = function () {
            $scope.alertMessage = '';
            var ret = true;

            if ($scope.userData.username == undefined ||
                $scope.userData.username.trim() == "") {
                console.log("username missing");
                $scope.alertMessage = "Please enter both a username and password.";
                ret = false;
            }

            if ($scope.userData.password == undefined ||
                $scope.userData.password.trim() == "") {
                console.log("password missing");
                $scope.alertMessage = "Please enter both a username and password.";
                ret = false;
            }

            return ret;
        };

        $scope.ok = function () {

            console.log($scope.userData);
            if (!$scope.validateLoginForm()) {
                $scope.alert = true;
                return;
            }

            var request = {
                method: 'POST',
                //url: 'http://localhost:8080/fx-rest-1.0/fx/login', // for my local test machine
                url: 'http://www.mikemeding.com/fx/user/login', // for deployed code
                data: userData
            };
            $http(request)
                .success(function (data, status, headers, config, response) {
                    console.log("Login Sucessful");
                    console.log('status: ' + status);
                    $scope.alert = false;
                    $modalInstance.close(); // close our modal
                    $state.go("admin.clients"); // navigate to admin.clients page
                    $cookieStore.remove('user'); // remove old cookie if it exists
                    $cookieStore.put("user", $scope.userData.username); // add cookie to track logged in user
                })
                .error(function (data, status, headers, config, response) {
                    console.log("Login Failed");
                    console.log('status: ' + status);
                    $scope.alertMessage = "Incorrect username or password.";
                    $scope.alert = true;
                });
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);


}());
