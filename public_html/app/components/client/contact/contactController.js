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

    function ContactController($http, $scope ) {

        var vm = this;

        vm.title = 'Contact Us';
        vm.message = "This form can be used to contact us for any questions on our services, or to see if you qualify for a refund."

        vm.contact = {};
        vm.successAlert = false;
        vm.failureAlert = false;
        vm.emailAlert = false ;
        vm.nameAlert = false ;
        vm.messageAlert = false ;

        vm.reset = function () {
            vm.contact = {};
        }

        vm.isValidEmail = function() {
            var re ;    //  Holds the regular expression to search with
            var pattern ;
            var test ;
            //Initialization
            pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i ;
            re = new RegExp( pattern ) ; // a regular expression

            test = re.test( vm.contact.email ) ;
            console.log( 'Valid Email: ' + test ) ;

            if ( vm.contact.email !== undefined &&
                 test ) {

                vm.contact.email = vm.contact.email.trim() ;
                vm.emailAlert = false ;
                return true ;
            }

            vm.emailAlert = true ;
            return false ;

        }

        vm.isValidName = function() {
            var re ;    //  Holds the regular expression to search with
            var pattern ;
            var test ;

            pattern = /^[a-zA-Z0-9]*[a-zA-Z]+[a-zA-Z0-9]*$/ ;
            re = new RegExp( pattern ) ;
            test = re.test( vm.contact.name ) ;

            if ( vm.contact.name !== undefined &&
                 test ) {

                vm.contact.name = vm.contact.name.trim() ;
                vm.nameAlert = false ;
                return true ;
            }

            vm.nameAlert = true ;
            return false ;

        }

        vm.isValidMessage = function() {
            var re ;    //  Holds the regular expression to search with
            var pattern ;
            var test ;

            pattern = /^[a-zA-Z0-9]*[a-zA-Z]+[a-zA-Z0-9]*$/ ;
            re = new RegExp( pattern ) ;
            test = re.test( vm.contact.name ) ;

            if ( vm.contact.message !== undefined &&
                 test ) {

                vm.contact.message = vm.contact.message.trim() ;
                vm.messageAlert = false ;
                return true ;
            }

            vm.messageAlert = true ;
            return false ;

        }

        vm.validForm = function() {

            var ret = true ;

            if ( !vm.isValidName() ) ret = false ;
            if ( !vm.isValidEmail() ) ret = false ;
            if ( !vm.isValidMessage() ) ret = false ;

            return ret ;
        }

        vm.submit = function () {


            if( !vm.validForm() )
                return ;

            //TODO: this needs to be integrated eventually
            vm.contact.refundAmount = 0;

            var request = {
                method: 'POST', // replace with method above
                url: 'http://www.mikemeding.com/fx/contact/addContact', // for my deployed backend
                data: vm.contact
            };

            $http(request)
                .success(function (data, status, headers, config, response) { // If call successful
                    console.log("Submit new client sucessful");
                    console.log('status: ' + status);
                    vm.successAlert = true;
                    vm.failureAlert = false;
                    vm.reset();
                })
                .error(function (data, status, headers, config, response) { // If call fails
                    console.log("Login Failed");
                    console.log('response: ' + response); // response will contain reason why
                    vm.successAlert = false;
                    vm.failureAlert = true;
                });
        };


        vm.reset(); // gets done on page load

    }
}());
