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
        .controller("EditConfigController",
        ["$scope","$http",EditConfigController]);

    function EditConfigController($scope,$http) {
        var $scope = this;
        $scope.title = 'Edit Site';

        $scope.successAlert = false;
        $scope.failureAlert = false;

        $scope.userData = {} // arguments go here in JSON notation

        $scope.submitNews = function () {
            console.log("submit news");
            $scope.userData.user = "mike"; // TODO: this needs to be fixed

            var request = {
                method: 'POST',
                url: 'http://www.mikemeding.com/fx/news/addNews',
                data: $scope.userData
            };

            $http(request)
                .success(function (data, status, headers, config, response) { // If call successful
                    console.log("News Submission Sucessful");
                    $scope.successAlert = true;
                    $scope.failureAlert = false;
                })
                .error(function (data, status, headers, config, response) { // If call fails
                    console.log("News Submission Failed");
                    $scope.failureAlert = true;
                    $scope.successAlert = false;
                });

        }


    }
})();