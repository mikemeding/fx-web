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
        vm.message = "This form is used to apply for a tax review. If you qualify, you will receive an email notifying you of your refund amount."

        vm.successAlert = false;
        vm.failureAlert = false;

        /**
         * Reset the fields of the form
         */
        vm.reset = function () {
            vm.contactEmail = '' ;
            vm.contactMessage = '' ;
            vm.contactName = '' ;
        }
        vm.reset(); // gets done on page load


        /**
         * checks if the current state of the form is correct
         * @returns {boolean}
         */
        vm.validForm = function() {

            //  Bug Fix, updates textarea element to allow for angular js to see it
            CKEDITOR.instances.contactMessage.updateElement();
            vm.contactMessage = document.getElementById( "contactMessage" ).value ;

            if(vm.contactEmail === '' || vm.contactEmail === ''){
                return false;
            } else {
                return true;
            }

            //TODO: this needs to be fixed. got it working for our demo

            //var pattern ;
            //var re ;
            //var ret ;
            //var test ;
            //var email ;
            //
            //ret = true ;
            //
            ////  due to invalid returned on email by angular
            //email = document.getElementById( "contact-email").value.trim() ;
            //
            ////  Missing tests
            //vm.emailMissing = false ;
            //vm.nameMissing = false ;
            //
            //if ( vm.contactName == undefined ||
            //     vm.contactName.trim() == "" ) {
            //    console.log( "name missing");
            //    vm.nameMissing = true ;
            //    ret = false ;
            //}
            //if ( email == "" ){
            //    console.log( "email missing");
            //    vm.emailMissing = true ;
            //    ret = false ;
            //}
            //
            //
            ////  Regex tests
            //vm.emailInvalid = false ;
            //
            //if ( email != ""  ) {
            //    pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i ;
            //    re = new RegExp( pattern ) ; // a regular expression
            //    test = re.test( email  ) ;
            //    console.log( test ) ;
            //
            //    if ( !test ){
            //        console.log( "email invalid");
            //        vm.emailInvalid = true ;
            //        ret = false ;
            //    }
            //
            //}
            //
            //return ret ;
        }

        vm.submitContact = function () {
            console.log("submitting new contact to database");
            if( !vm.validForm() ){
                vm.failureAlert = true;
                vm.successAlert = false;
                return;
            } else {
                vm.failureAlert = false;
                vm.successAlert = false;
            }


            //TODO: this needs to be integrated eventually
            vm.refundAmount = 0;

            var request = {
                method: 'POST', // replace with method above
                url: 'http://www.mikemeding.com/fx/contact/addContact', // for my deployed backend
                data:{
                    email: vm.contactEmail ,
                    name: vm.contactName ,
                    message: vm.contactMessage,
                    refundAmount: vm.refundAmount
                }
            };

            $http(request)
                .success(function (data, status, headers, config, response) { // If call successful
                    console.log("Submit new client sucessful");
                    console.log('status: ' + status);
                    vm.successAlert = true;
                    vm.failureAlert = false;
                    vm.reset();
                    CKEDITOR.instances.contactMessage.setData( '', function() { this.updateElement(); } )
                })
                .error(function (data, status, headers, config, response) { // If call fails
                    console.log("Login Failed");
                    console.log('response: ' + response); // response will contain reason why
                    vm.successAlert = false;
                    vm.failureAlert = true;
                });
        };


    }
}());
