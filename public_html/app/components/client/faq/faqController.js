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
        .controller("FaqController",
        ['$http','$scope',FaqController]);

    function FaqController($http,$scope) {
        var $scope = this;

        //TODO: this needs to come from http request
        $scope.questions = [];

        // create a message to display in our view
        $scope.title = "Frequently Asked Questions"

        $http({
            method: "GET",
            url: 'assets/json/faq.json'
        }).success(function (data, status, headers, config, response) {
            $scope.questions = data;
        });

    }
}());