/* 
 ==========================================================================
 FundsXpert

 Graphical User Interface Programming II
 Professor Jessie Heines
 Michael Meding & Jose Flores
 2015-02-12

 ========================================================================== 
 */
//
//(function () { // this is to protect global namespace
//    "use-strict"; // for strict syntax checking
//
//    var fxAdmin = angular.module('fxAdmin', ['ui.bootstrap', 'ui.router']);
//
//    //Angular routing config
//    fxAdmin.config(["$stateProvider",
//        "$urlRouterProvider",
//        function ($stateProvider, $urlRouterProvider) {
//            //$urlRouterProvider.otherwise("clients");
//
//            $stateProvider
//                // Admin Routing
//                .state("clients", {
//                    url: "/admin/clients",
//                    templateUrl: "app/components/admin/components/clients/clientsView.html",
//                    controller: "ClientsController as vm"
//                })
//                .state("edit-config", {
//                    url: "/admin/edit-config",
//                    templateUrl: "app/components/admin/components/edit-config/editConfigView.html",
//                    controller: "EditConfigController as vm"
//                })
//                .state("find-clients", {
//                    url: "/admin/find-clients",
//                    templateUrl: "app/components/admin/components/find-clients/findClientsView.html",
//                    controller: "FindClientsController as vm"
//                });
//        }]);
//})();