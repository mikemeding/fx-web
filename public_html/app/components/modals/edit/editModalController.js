/*
 ==========================================================================
 FundsXpert

 Graphical User Interface Programming II
 Professor Jessie Heines
 Michael Meding & Jose Flores
 2015-02-12

 This is the controller for the edit form. It handles both the collection
 and submission of collected username and password to the backend server
 ==========================================================================
 */
(function () {
    "use strict";

    var app = angular.module('fxClient')
        .controller('editModalController',
        ['$scope', '$modal', '$cookieStore', '$state', function ($scope, $modal, $cookieStore, $state) {

            $scope.userData = {} ;
            $scope.callback = {} ;

            /*
             * Based on the code from:
             * http://angular-ui.github.io/bootstrap/#/modal
             */
            $scope.open = function ( item , callback ) {

                this.reset();

                $scope.userData = item ;
                $scope.callback = callback ;

                return  $modal.open({
                    templateUrl: 'app/components/modals/edit/editModalTemplate.html',
                    controller: 'editModalInstanceCtrl',
                    resolve: { // this resolves the local vars of Instance Ctrl
                            userData: function () {
                                return $scope.userData;
                            },
                            callback: function () {
                                return $scope.callback ;
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
            };

        }]);

    /**
     * The per instance modal controller. This handles the actual submission of the data
     */
    app.controller("editModalInstanceCtrl", ['$scope', '$modalInstance', 'userData', 'callback' , '$http', '$state', '$cookieStore', function ($scope, $modalInstance, userData, callback , $http, $state, $cookieStore  ) {

        $scope.userData = userData;
        $scope.callback = callback ;

        $scope.ok = function () {
            console.log( 'ok' );
            console.log( $scope.userData ) ;
            $modalInstance.dismiss( 'Ok' ) ;
            $scope.callback( $scope.userData ) ;
            return true ;
        };

        $scope.cancel = function () {
            console.log( 'cancel' );
            $modalInstance.dismiss('cancel');
            return false ;
        };
    }]);


}());
