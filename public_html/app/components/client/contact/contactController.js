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
        ['$http', '$scope', ContactController]);

    function ContactController($http, $scope) {
        var $scope = this;
        $scope.title = 'Contact Us';
        $scope.message = "This form can be used to contact us for any questions on our services, or to see if you qualify for a refund."

        $scope.contact = {};
        $scope.successAlert = false;
        $scope.failureAlert = false;

        $scope.reset = function () {
            $scope.contact = {};
        }
        $scope.reset(); // gets done on page load

        $scope.submit = function () {

            //TODO: this needs to be integrated eventually
            $scope.contact.refundAmount = 0;

            var request = {
                method: 'POST', // replace with method above
                url: 'http://www.mikemeding.com/fx/contact/addContact', // for my deployed backend
                data: $scope.contact
            };
            $http(request)
                .success(function (data, status, headers, config, response) { // If call successful
                    console.log("Submit new client sucessful");
                    console.log('status: ' + status);
                    $scope.successAlert = true;
                    $scope.failureAlert = false;
                    $scope.reset();
                })
                .error(function (data, status, headers, config, response) { // If call fails
                    console.log("Login Failed");
                    console.log('response: ' + response); // response will contain reason why
                    $scope.successAlert = false;
                    $scope.failureAlert = true;
                });
        };


    }
}());
