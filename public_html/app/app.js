/* 
 ==========================================================================
 FundsXpert

 Graphical User Interface Programming II
 Professor Jessie Heines
 Michael Meding & Jose Flores
 2015-02-12

 This file handles all the routes and route configuration for the links
 in the main navigation bar.
 ========================================================================== 
 */


(function () { // this is to protect global namespace
    "use-strict"; // for strict syntax checking

    var fxClient = angular.module('fxClient', ['ui.bootstrap', 'ui.router']);
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
                .state('admin', {
                    abstract: true,
                    url: '/admin',
                    templateUrl: "app/components/admin/adminIndex.html",

                })
                .state('admin.clients', {
                    url: '/clients',
                    // loaded into ui-view of parent's template
                    templateUrl: "app/components/admin/components/clients/clientsView.html",
                    controller: "ClientsController as vm"
                })
                .state('admin.edit-config', {
                    url: '/edit-config',
                    // loaded into ui-view of parent's template
                    templateUrl: "app/components/admin/components/edit-config/editConfigView.html",
                    controller: "EditConfigController as vm"
                })
                .state('admin.find-clients', {
                    url: '/find-clients',
                    // loaded into ui-view of parent's template
                    templateUrl: "app/components/admin/components/find-clients/findClientsView.html",
                    controller: "FindClientsController as vm"
                })
            ;
        }]);

    /**
     * the HTML5 autofocus property can be finicky when it comes to dynamically loaded
     * templates and such with AngularJS. Use this simple directive to
     * tame this beast once and for all.
     * From: https://gist.github.com/mlynch/dd407b93ed288d499778
     *
     * Usage:
     * <input type="text" autofocus>
     */
    angular.module('utils.autofocus', [])

        .directive('autofocus', ['$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function ($scope, $element) {
                    $timeout(function () {
                        $element[0].focus();
                    });
                }
            }
        }]);
})();







