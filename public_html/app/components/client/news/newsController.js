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
        .controller("NewsController",
        ['$scope', '$sce', '$http', NewsController]);

    function NewsController($scope, $sce, $http) {
        var vm = this;

        // create a message to display in our view
        vm.title = 'News!';
        vm.message = 'Read and stay up to date with our firm.';

        //GET NEWS from database
        vm.alert = false;
        // allow global access to the articles
        vm.newsArticles = {};
        // this is how the table is sorted ascending by id
        $scope.sortOrder = '-id';
        var request = {
            method: 'GET',
            url: 'http://www.mikemeding.com/fx/news/selectAll' // for my deployed backend
        };
        $http(request)
            .success(function (data, status, headers, config, response) { // If call successful
                console.log("selectAll News Sucessful");
                console.log('data: ' + data[0].text);
                vm.alert = false;
                // trust text section of data as html for ckeditor
                for (var x = 0; x < data.length; x++) {
                    console.log(data[x].text);
                    console.log(data[x]);
                    data[x].text = $sce.trustAsHtml(data[x].text);
                }
                // update angular variable
                vm.newsArticles = data;
            })
            .error(function (data, status, headers, config, response) { // If call fails
                console.log("selectAll News Failed");
                console.log('response: ' + response); // response will contain reason why
                vm.alert = true;
            });

        // this fixes the twitter embed loading issue.
        twttr.widgets.load()
    }
}());
