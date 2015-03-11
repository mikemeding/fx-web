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
        ["$scope", "$http", EditConfigController]);

    function EditConfigController($scope, $http) {
        var vm = this;
        vm.title = 'Edit Site';

        vm.successAlert = false;
        vm.failureAlert = false;

        vm.userData = {} // arguments go here in JSON notation

        vm.formValidate = function () {

            var ret;

            ret = true;

            vm.userData.textMissing = false;
            vm.userData.titleMissing = false;

            console.log(vm.userData.title);
            if (vm.userData.title == undefined ||
                vm.userData.title.trim() == "") {
                console.log("title missing");
                vm.userData.titleMissing = true;
                ret = false;
            }

            if (vm.userData.text == undefined ||
                vm.userData.text.trim() == "") {
                console.log("text missing");
                vm.userData.textMissing = true;
                ret = false;
            }

            return ret;

        };

        //vm.processEnter = function( callback ){
        //    var shiftPressed = window.event.shiftKey ;
        //    var keyPressed = window.event.keyCode;
        //
        //    console.log(shiftPressed);
        //    console.log(keyPressed);
        //    if (shiftPressed && keyPressed == 13) {
        //
        //        window.event.keyCode = 13;
        //
        //    } else if ( keyPressed == 13 ) {
        //        window.event.preventDefault();
        //        callback() ;
        //
        //    }
        //};

        /**
         * Submit a new news article to the database
         */
        vm.submitNews = function () {
            console.log("submit news");

            if (!vm.formValidate())
                return;

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
                    vm.userData.title = undefined;
                    vm.userData.text = undefined;
                })
                .error(function (data, status, headers, config, response) { // If call fails
                    console.log("News Submission Failed");
                    vm.failureAlert = true;
                    vm.successAlert = false;
                });

        }


        vm.getNewsAlert = false;
        // allow global access to the articles
        vm.newsArticles = {};
        // this is how the table is sorted ascending by id
        $scope.sortOrder = '-id';
        /**
         * Get a all news articles from the database for the table
         */
        vm.requestNewsArticles = function () {
            var request = {
                method: 'GET', // replace with method above
                // path must be altered to point at correct table
                url: 'http://www.mikemeding.com/fx/news/selectAll' // for my deployed backend
            };
            $http(request)
                .success(function (data, status, headers, config, response) { // If call successful
                    console.log("selectAll News Sucessful");
                    console.log('data: ' + data[0].id);
                    vm.alert = false;
                    vm.newsArticles = data;
                    // DO SUCCESS STUFF HERE
                })
                .error(function (data, status, headers, config, response) { // If call fails
                    console.log("selectAll News Failed");
                    console.log('response: ' + response); // response will contain reason why
                    vm.alert = true;
                    // DO FAIL STUFF HERE
                });
        }
        vm.requestNewsArticles(); // when the page gets loaded get the news articles

        /**
         * Remove a news article from the database
         * @param item
         */
        vm.deleteNewsArticle = function (item) {
            console.log("going to delete news article with ID:" + item.id)

            var request = {
                method: 'POST',
                url: 'http://www.mikemeding.com/fx/news/removeNews',
                data: {"id": item.id} // we delete using the unique news id number
            };
            $http(request)
                .success(function (data, status, headers, config, response) { // If call successful
                    console.log("delete News Sucessful");
                    vm.requestNewsArticles(); // to refresh news articles
                })
                .error(function (data, status, headers, config, response) { // If call fails
                    console.log("delete News Failed");
                    console.log('response: ' + response); // response will contain reason why
                });
        }
    }
})();
