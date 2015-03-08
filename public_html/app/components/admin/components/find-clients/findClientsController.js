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
        .controller("FindClientsController",
        ["$scope", "$http", FindClientsController]);

    function FindClientsController($scope, $http) {
        var $scope = this;

        $scope.title = 'Find Clients';


        //getAppraisalDataInAssessedRange/{taxYear}/{fromValue}/{toValue}
        $scope.years = ["2013", "2014"]; // currently available tax years
        $scope.data = {}

        $scope.findClientsInRange = function () {
            console.log($scope.data);

            var request = {
                method: 'GET',
                url: 'http://www.mikemeding.com/fx/appraisal/getAppraisalDataInAssessedRange/'+$scope.data.year+'/'+$scope.data.fromValue+'/'+$scope.data.toValue
            };

            console.log(request);
            $http(request)
                .success(function (data, status, headers, config, response) { // If call successful
                    console.log("Get data successful");
                    console.log("data: " + data);
                    // DO SUCCESS STUFF HERE
                })
                .error(function (data, status, headers, config, response) { // If call fails
                    console.log("Failed to get data");
                    console.log('response: ' + response); // response will contain reason why
                    // DO FAIL STUFF HERE
                });
        }

    }
}());