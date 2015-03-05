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
        ['$scope', '$sce' , NewsController]);

    function NewsController( $scope, $sce) {
        var vm = this;
        vm.title = 'News!';

        // create a message to display in our view
        vm.message = 'Read and stay up to date with our firm.';

        vm.feed = function( service , posts ) {
            var processed = "<h2>" + service + "</h2>";
            posts.forEach( function( item ){
                processed += "<div style='background:white;'> <h3>" + item[ 'title' ] + "</h3>";
                processed += "<h4>" + item[ 'ts' ] + "</h4>";
                processed += "<p>" + item[ 'post' ] + "</p></div>";
            });
            return processed ;
        } ;

        vm.postsTwitter = [
                            {
                                "title": "myTitlel",
                                "ts": "123",
                                "post": "hello"
                            },
                            {
                                "title": "myTitlel",
                                "ts": "123",
                                "post": "hello"
                            },
                            {
                                "title": "myTitlel",
                                "ts": "123",
                                "post": "hello"
                            }
                        ] ;

        vm.postsRss = [
                            {
                                "title": "myTitlel",
                                "ts": "123",
                                "post": "hello"
                            },
                            {
                                "title": "myTitlel",
                                "ts": "123",
                                "post": "hello"
                            },
                            {
                                "title": "myTitlel",
                                "ts": "123",
                                "post": "hello"
                            }
                        ] ;

        vm.postsBlog = [
                            {
                                "title": "New Refund Application",
                                "ts": "123",
                                "post": "article"
                            },
                            {
                                "title": "A work in progress",
                                "ts": "123",
                                "post": "article"
                            },
                            {
                                "title": "FundExpert - Tax Refund Company Founded",
                                "ts": "123",
                                "post": "During their spring 2014 Computer Science semester two students as a project decided to create a tax refund calculator, to help individuals who have overpayed on their property taxes. They did this as a project for their GUI II Project Sequence under the guidance of Professor Jesse Heines, and the request of FundExperts. The Project will be ongoing untill May 2015 and then will be managed by the FundExpert proffessionals and Mike Meding as their webmaster."
                            }
                        ] ;

        vm.blog = $sce.trustAsHtml( vm.feed( "blog" , vm.postsBlog ) ) ;

        //http://stackoverflow.com/questions/13136092/authentication-for-twitter-api-and-rest-call
        vm.twitter = $sce.trustAsHtml( vm.feed( "twitter" , vm.postsTwitter ) ) ;
        vm.rss = $sce.trustAsHtml( vm.feed( "rss" , vm.postsRss )  );
    }
}());
