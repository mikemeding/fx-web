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
        var request = {
            method: 'GET',
            url: 'http://www.mikemeding.com/fx/appraisal/getTaxBreakdown/'+propertyInfo.taxYear+'/'+propertyInfo.pid+'/full'
        };
        $http(request)
            .success(function (data, status, headers, config, response) { // If call successful
                console.log("Get data successful");
                console.log("data: " + JSON.stringify(data));
            })
            .error(function (data, status, headers, config, response) { // If call fails
                console.log("Failed to get data");
                console.log('response: ' + response); // response will contain reason why
            });

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.data1 = {};
        $scope.data1.dataTable = new google.visualization.DataTable();
        $scope.data1.dataTable.addColumn("string", "Name")
        $scope.data1.dataTable.addColumn("number", "Qty")
        $scope.data1.dataTable.addRow(["Test", 1]);
        $scope.data1.dataTable.addRow(["Test2", 2]);
        $scope.data1.dataTable.addRow(["Test3", 8]);
        $scope.data1.title = "My Pie"

    }
}());