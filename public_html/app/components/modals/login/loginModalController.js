(function () {
    "use strict";

    angular.module('fxClient').controller('LoginModalController',['$scope','$modal', function ($scope, $modal) {

        $scope.items = ['item1', 'item2', 'item3'];
        $scope.selected = {};
        $scope.open = function () {
            var modalInstance = $modal.open({
                templateUrl: 'app/components/modals/login/loginModalTemplate.html',
                scope: $scope
            });
            console.log('modal opened');
            modalInstance.result.then(function () {
                console.log($scope.selected);
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        };
        }]);
}());