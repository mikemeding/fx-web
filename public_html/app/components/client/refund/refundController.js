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
        .controller("RefundController",
        ['$scope', '$state', RefundController]);

    function RefundController($scope, $state) {

        $scope.title = 'Apply For A Refund';

        // create a message to display in our view
        $scope.message = 'Find out if you qualify for a state tax return';


        $scope.alertView = false;
        $scope.alertMessage = "";
        $scope.showAlert = function (refundName) {
            $scope.alertView = true;
            $scope.alertMessage = refundName + " QUALIFIES! Click the button below to fill in your information so we can get in contact with you";
        }

        $scope.goToContact = function(){
            $state.go("contact");
        }

    }
}());
