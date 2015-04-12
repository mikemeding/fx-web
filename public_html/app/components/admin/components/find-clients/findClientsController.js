/* 
 ==========================================================================
 FundsXpert

 Graphical User Interface Programming II
 Professor Jessie Heines
 Michael Meding
 2015-02-12

 ========================================================================== 
 */
// create the controller and inject Angular's $scope
(function () {
    "use strict";
    angular
        .module("fxClient")
        .controller("FindClientsController",
        ["$scope", "$http", "$modal", FindClientsController])
        .controller("GoogleChartController",
        ["$scope", "$modalInstance", "$http", "propertyInfo", GoogleChartController]);

    function FindClientsController($scope, $http, $modal) {
        var $scope = this;

        $scope.title = 'Find Clients';
        $scope.message = "This tool helps you to find publicly listed properties whose approximated value falls within a given range";

        //getAppraisalDataInAssessedRange/{taxYear}/{fromValue}/{toValue}
        $scope.years = ["2014"]; // currently available tax years
        $scope.selectedYear = "Select Year";
        /**
         * When the year is toggled in the dropdown update both the display year and that for the argument
         * @param choice
         */
        $scope.yearToggle = function (choice) {
            $scope.selectedYear = choice;
            $scope.data.year = choice;
        }

        /**
         * Slider range stuff
         * @type {{}}
         */
        $scope.range = {};
        $scope.range.min = 10000;
        $scope.range.max = 9999999;
        $scope.range.step = 100000; // slider increments
        $scope.range.minimumValue = 100000; // starting value of slider
        $scope.range.maximumValue = 200000; // starting value of slider





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
                url: 'http://www.mikemeding.com/fx/appraisal/getAppraisalDataInAssessedRange/' + $scope.data.year + '/' + $scope.range.minimumValue + '/' + $scope.range.maximumValue
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

        $scope.propertyInfo = {};
        $scope.openDetailedView = function (data) {
            //console.log(data);
            $scope.propertyInfo = data;
            var modalInstance = $modal.open({
                templateUrl: 'app/components/admin/components/find-clients/findClientsTaxBreakdownModal.html',
                controller: 'GoogleChartController',
                size: 'lg',
                resolve: { // this resolves the local vars of Instance Ctrl
                    propertyInfo: function () {
                        return $scope.propertyInfo;
                    }
                }
            });
        }

    }

    /**
     * Testing some charting stuff
     */
    function GoogleChartController($scope, $modalInstance, $http, propertyInfo) {
        console.log(propertyInfo);

        $scope.showChart = false;
        // setup pie chart
        $scope.data1 = {};
        $scope.data1.dataTable = new google.visualization.DataTable();
        $scope.data1.title = "Tax breakdown"
        $scope.data1.dataTable.addColumn("string", "Name")
        $scope.data1.dataTable.addColumn("number", "Qty")

        /**
         * Get the tax data based on the YEAR and Property ID
         * @type {{method: string, url: string}}
         */
        var request = {
            method: 'GET',
            url: 'http://www.mikemeding.com/fx/appraisal/getTaxBreakdown/'+propertyInfo.taxYear+'/'+propertyInfo.pid+'/full'
        };
        $scope.rawData = {};
        $http(request)
            .success(function (data, status, headers, config, response) { // If call successful
                console.log("Get tax info successful");
                //console.log("data: " + JSON.stringify(data));
                $scope.rawData = data.map; // extract tax breakdown
                $scope.updateThisChart($scope.rawData); // render the chart
            })
            .error(function (data, status, headers, config, response) { // If call fails
                console.log("Failed to get data");
                console.log('response: ' + response); // response will contain reason why
            });

        /**
         * close the modal instance
         */
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.updateThisChart = function(data){

            // iterate through all taxing entities
            angular.forEach(data, function(value, key) {
                console.log(key + ': ' + value);
                $scope.data1.dataTable.addRow([key,parseInt(value)]);
            });
            //$scope.data1.dataTable.draw($scope.data1.dataTable);
            //$scope.data1.dataTable.addRow(["Test", 1]);
            //$scope.data1.dataTable.addRow(["Test2", 2]);
            //$scope.data1.dataTable.addRow(["Test3", 8]);
            updateChart();
            $scope.showChart = true;
        }



    }
}());