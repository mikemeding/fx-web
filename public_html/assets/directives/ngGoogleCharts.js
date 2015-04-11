/**
 * Created by mike on 4/7/15.
 */
(function () { // this is to protect global namespace
    "use strict";

    var googleChart = googleChart || angular.module("google-chart", []);

    googleChart.directive("googleChart", function () {
        return {
            restrict: "A",
            link: function ($scope, $elem, $attr) {
                var dt = $scope[$attr.ngModel].dataTable;

                var options = {};
                if ($scope[$attr.ngModel].title)
                    options.title = $scope[$attr.ngModel].title;

                var googleChart = new google.visualization[$attr.googleChart]($elem[0]);
                googleChart.draw(dt, options)

                $scope.updateChart = function(){
                    googleChart.draw(dt, options);
                }
            }
        }
    });
})();