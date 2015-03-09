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


        vm.successAlert = false;
        vm.failureAlert = false;


        vm.reset = function () {
            vm.contactEmail = undefined ;
            vm.contactMessage = undefined ;
            vm.contactName = undefined ;
        }


        vm.validForm = function() {
            var pattern ;
            var re ;
            var ret ;
            var test ;
            var email ;

            ret = true ;

            //  due to invalid returned on email by angular
            email = document.getElementById( "contact-email").value.trim() ;

            //  Missing tests
            vm.emailMissing = false ;
            vm.nameMissing = false ;
            vm.messageMissing = false ;

            if ( vm.contactName === undefined ) {
                console.log( "name missing");
                vm.nameMissing = true ;
                ret = false ;
            }
            if ( email == "" ){
                console.log( "email missing");
                vm.emailMissing = true ;
                ret = false ;
            }
            if ( vm.contactMessage == undefined ){
                console.log( "message missing");
                vm.messageMissing = true ;
                ret = false ;
            }

            //  Regex tests
            vm.emailInvalid = false ;

            if ( email != ""  ) {

                pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i ;
                re = new RegExp( pattern ) ; // a regular expression
                test = re.test( email  ) ;
                console.log( test ) ;

                if ( !test ){
                    console.log( "email invalid");
                    vm.emailInvalid = true ;
                    ret = false ;
                }

            }

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
                data:{
                    email: vm.contactEmail ,
                    name: vm.contactName ,
                    message: vm.contactMessage
                }
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
