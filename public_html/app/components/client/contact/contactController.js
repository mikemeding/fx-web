/*
 ==========================================================================
 FundsXpert

 Graphical User Interface Programming II
 Professor Jessie Heines
 Michael Meding & Jose Flores
 2015-02-12

 ==========================================================================
 */
// create the controller and inject Angular's vm
(function () {
    "use strict";
    angular
        .module("fxClient")
        .controller("ContactController",
        ['$http', '$scope', ContactController]);

    function ContactController($http, $scope) {

        var vm = this;

        vm.title = 'Contact Us';
        vm.message = "This form is used to apply for a tax review. If you qualify, you will receive an email notifying you of your refund amount."

        vm.successAlert = false;
        vm.successAlertMessage = '';
        vm.failureAlert = false;
        vm.failureAlertMessage = '';

        /**
         * Reset the fields of the form
         */
        vm.reset = function () {
            vm.contactEmail = '';
            vm.contactMessage = '';
            vm.contactName = '';
        }
        vm.reset(); // gets done on page load

        /**
         * checks if the current state of the form is correct
         * @returns {boolean}
         */
        vm.validForm = function () {
            vm.failureAlertMessage = '';
            if (vm.contactEmail === '' || vm.contactEmail === undefined) {
                vm.failureAlert = true;
                vm.failureAlertMessage += ' Please enter a valid email. ';
            }
            if (vm.contactName === '') {
                vm.failureAlert = true;
                vm.failureAlertMessage += ' Please enter a valid name. ';
            }
            vm.failureAlert = false;
        }

        /**
         *
         */
        vm.submitContact = function () {
            //console.log(vm.contactEmail + vm.contactName);
            vm.validForm();
            if (vm.failureAlert === true) {
                return; // if validation fails stop here
            }

            //TODO: this needs to be integrated eventually
            vm.refundAmount = 0;

            var request = {
                method: 'POST', // replace with method above
                url: 'http://www.mikemeding.com/fx/contact/addContact', // for my deployed backend
                data: {
                    email: vm.contactEmail,
                    name: vm.contactName,
                    message: vm.contactMessage,
                    refundAmount: vm.refundAmount
                }
            };

            $http(request)
                .success(function (data, status, headers, config, response) { // If call successful
                    console.log("Submit new client sucessful");
                    vm.successAlert = true;
                    vm.successAlertMessage = "Submission successful."
                    vm.failureAlert = false;
                    vm.reset();
                })
                .error(function (data, status, headers, config, response) { // If call fails
                    console.log("Submit new client failed");
                    console.log('response: ' + response); // response will contain reason why
                    vm.successAlert = false;
                    vm.failureAlert = true;
                });
        };


    }
}());
