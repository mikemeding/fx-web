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
        ["$scope", "$http", FindClientsController])
        .controller("GoogleChartController",
        ["$scope", GoogleChartController]);

    function FindClientsController($scope, $http) {
        var $scope = this;

        $scope.title = 'Find Clients';

        //getAppraisalDataInAssessedRange/{taxYear}/{fromValue}/{toValue}
        $scope.years = ["2013", "2014"]; // currently available tax years
        $scope.selectedYear = "Select Year";
        /**
         * When the year is toggled in the dropdown update both the display year and that for the argument
         * @param choice
         */
        $scope.yearToggle = function (choice) {
            $scope.selectedYear = choice;
            $scope.data.year = choice;
        }

        $scope.data = {}
        $scope.tableData = [];
        $scope.tableVisibility = false;
        $scope.sortOrder = "marketValue"; // inital soring order

        /**
         * This is called on submit of the find clients form.
         */
        $scope.findClientsInRange = function () {
            console.log($scope.data);

            var request = {
                method: 'GET',
                url: 'http://www.mikemeding.com/fx/appraisal/getAppraisalDataInAssessedRange/' + $scope.data.year + '/' + $scope.data.fromValue + '/' + $scope.data.toValue
            };

            console.log(request);
            $http(request)
                .success(function (data, status, headers, config, response) { // If call successful
                    console.log("Get data successful");
                    console.log("data: " + data);
                    $scope.tableVisibility = true;
                    $scope.tableData = data.list;

                })
                .error(function (data, status, headers, config, response) { // If call fails
                    console.log("Failed to get data");
                    console.log('response: ' + response); // response will contain reason why
                    // TODO: Alert needed for bad or missing data
                });
        }

    }

    /**
     * Testing some charting stuff
     */

    function GoogleChartController($scope) {

        $scope.data1 = {};
        $scope.data1.dataTable = new google.visualization.DataTable();
        $scope.data1.dataTable.addColumn("string", "Name")
        $scope.data1.dataTable.addColumn("number", "Qty")
        $scope.data1.dataTable.addRow(["Test", 1]);
        $scope.data1.dataTable.addRow(["Test2", 2]);
        $scope.data1.dataTable.addRow(["Test3", 3]);
        $scope.data1.title = "My Pie"

    }
}());