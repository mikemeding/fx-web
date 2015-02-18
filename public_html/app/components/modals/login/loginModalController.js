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

    var app = angular.module('fxClient').controller('LoginModalController', ['$scope', '$modal', function ($scope, $modal) {

        // JSON object for holding username and password
        $scope.userData = {};

        /**
         * Opens the main page login modal
         * Based on the code from:
         * http://angular-ui.github.io/bootstrap/#/modal
         */
        $scope.open = function () {
            this.reset();

            // this is simalar to routes except with pre-loaded templates. See index.html <head> tag
            var modalInstance = $modal.open({
                templateUrl: 'app/components/modals/login/loginModalTemplate.html',
                controller: 'loginModalInstanceCtrl',
                resolve: { // this resolves the local vars of Instance Ctrl
                    userData: function () {
                        return $scope.userData;
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
    app.controller("loginModalInstanceCtrl", function ($scope, $modalInstance, userData) {
        $scope.userData = userData;

        $scope.ok = function () {
            console.log($scope.userData);

            // fire off http login request here

            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });


}());