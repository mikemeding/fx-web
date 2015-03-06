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
        .controller("ContactController",
        ['$scope', '$sce' ,ContactController]);

    function ContactController( $scope, $sce ) {
        var vm = this;
        vm.title = 'Contact Us';
        vm.webmasterEmail = "jose.flores.152@gmail.com" ;

        // create a message to display in our view
        vm.message = $sce.trustAsHtml( 'This form can be used to contact us for any questions on our services, or to see if you qualify for a refund. If there are any problems with the application please contact our webmaster at <a href="mailto:' + vm.webmasterEmail + '" target="_blank">' + vm.webmasterEmail + '</a>.' ) ;



        vm.submit = function(){

        };
    }
}());
