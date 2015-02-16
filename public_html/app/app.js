/* 
 ==========================================================================
 FundsXpert

 Graphical User Interface Programming II
 Professor Jessie Heines
 Michael Meding & Jose Flores
 2015-02-12

 This file handles all the routes and route configuration.
 ========================================================================== 
 */


(function () { // this is to protect global namespace
    "use-strict"; // for strict syntax checking

    var fxClient = angular.module('fxClient', ['ui.bootstrap','ui.router']);
    //Angular routing config
    fxClient.config(["$stateProvider",
        "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/home");

            $stateProvider
                // Client Routing
                .state("home", {
                    url: "/home",
                    templateUrl: "app/components/client/home/homeView.html",
                    controller: "HomeController as vm"
                })
                .state("faq", {
                    url: "/faq",
                    templateUrl: "app/components/client/faq/faqView.html",
                    controller: "FaqController as vm"
                })
                .state("contact", {
                    url: "/contact",
                    templateUrl: "app/components/client/contact/contactView.html",
                    controller: "ContactController as vm"
                })
                .state("news", {
                    url: "/news",
                    templateUrl: "app/components/client/news/newsView.html",
                    controller: "NewsController as vm"
                })
                .state("refund", {
                    url: "/refund",
                    templateUrl: "app/components/client/refund/refundView.html",
                    controller: "RefundController as vm"
                })

                // Admin Routing
                .state("clients", {
                    url: "/admin/clients",
                    templateUrl: "app/components/admin/clients/clientsView.html",
                    controller: "ClientsController as vm"
                })
                .state("edit-config", {
                    url: "/admin/edit-config",
                    templateUrl: "app/components/admin/edit-config/editConfigView.html",
                    controller: "EditConfigController as vm"
                })
                .state("find-clients", {
                    url: "/admin/find-clients",
                    templateUrl: "app/components/admin/find-clients/findClientsView.html",
                    controller: "FindClientsController as vm"
                });
        }]);

    fxClient.controller('LoginModalController',['$scope','$modal', function ($scope, $modal) {

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

})();







