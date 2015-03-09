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
        .controller("EditConfigController",
        ["$scope","$http",EditConfigController]);

    function EditConfigController($scope,$http) {
        var vm = this;
        vm.title = 'Edit Site';

        vm.successAlert = false;
        vm.failureAlert = false;

        vm.userData = {} // arguments go here in JSON notation

        vm.formValidate = function(){

            var ret ;

            ret = true ;

            vm.userData.textMissing = false ;
            vm.userData.titleMissing = false ;

            console.log( vm.userData.title);
            if ( vm.userData.title == undefined ){
                console.log( "title missing");
                vm.userData.titleMissing = true ;
                ret = false ;
            }

            if ( vm.userData.text == undefined ){
                console.log( "text missing");
                vm.userData.textMissing = true ;
                ret = false ;
            }

            return ret ;

        };

        vm.processEnter = function(){
            var shiftPressed = window.event.shiftKey ;
            var keyPressed = window.event.keyCode;

            console.log(shiftPressed);
            console.log(keyPressed);
            if (shiftPressed && keyPressed == 13) {

                window.event.keyCode = 13;

            } else if ( keyPressed == 13 ) {

                vm.submitNews() ;

            }
        };

        vm.submitNews = function () {
            console.log("submit news");

            if ( !vm.formValidate() )
                return ;

            vm.userData.user = "mike"; // TODO: this needs to be fixed

            var request = {
                method: 'POST',
                url: 'http://www.mikemeding.com/fx/news/addNews',
                data: vm.userData
            };

            $http(request)
                .success(function (data, status, headers, config, response) { // If call successful
                    console.log("News Submission Sucessful");
                    vm.successAlert = true;
                    vm.failureAlert = false;
                    vm.userData.title = undefined ;
                    vm.userData.text = undefined ;
                })
                .error(function (data, status, headers, config, response) { // If call fails
                    console.log("News Submission Failed");
                    vm.failureAlert = true;
                    vm.successAlert = false;
                });

        }


    }
})();
