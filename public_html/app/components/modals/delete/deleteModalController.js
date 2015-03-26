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
        .controller('deleteModalController',
        ['$scope', '$modal', '$cookieStore', '$state', function ($scope, $modal, $cookieStore, $state) {

            $scope.userData = {};
            $scope.callback = {};
            $scope.label = "";

            /**
             * Opens the main page login modal
             * Based on the code from:
             * http://angular-ui.github.io/bootstrap/#/modal
             */
            $scope.open = function (item, callback) {

                this.reset();

                $scope.userData = item;
                $scope.callback = callback;

                $scope.label = "<table><tbody>";

                Object.getOwnPropertyNames(item).forEach(function (val, idx, array) {
                    console.log(item[val]);
                    if (val != "created" &&
                        val != "id" &&
                        val != "password" &&
                        val != "$$hashKey") {
                        $scope.label += "<tr><td>" + item[val] + '</td></tr>';
                    }
                });

                $scope.label += "</tbody></table>";

                console.log($scope.label);

                return $modal.open({
                    templateUrl: 'app/components/modals/delete/deleteModalTemplate.html',
                    controller: 'deleteModalInstanceCtrl',
                    resolve: { // this resolves the local vars of Instance Ctrl
                        userData: function () {
                            return $scope.userData;
                        },
                        label: function () {
                            return $scope.label;
                        },
                        callback: function () {
                            return $scope.callback;
                        }
                    }
                });

            };

            /**
             * when the modal goes out of focus do not save user data
             */
            $scope.reset = function () {
                this.userData = {};
                this.callback = {};
                $scope.label = "";
            };

        }]);

    /**
     * The per instance modal controller. This handles the actual submission of the data
     */
    app.controller("deleteModalInstanceCtrl", ['$scope', '$modalInstance', 'callback', function ($scope, $modalInstance, callback) {

        $scope.yes = function () {
            //console.log("yes pressed");
            $modalInstance.dismiss('cancel');
            callback(true);
            return;

        }
        $scope.no = function () {
            //console.log("no pressed");
            $modalInstance.dismiss('cancel');
            callback(false);
            return;
        }

    }]);


}());
