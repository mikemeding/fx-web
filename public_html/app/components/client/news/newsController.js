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
        ['$scope', '$sce' , '$http' ,'$q' , NewsController]);

    function NewsController($scope, $sce , $http , $q) {
        var vm = this;

        // create a message to display in our view
        vm.title = 'News!';
        vm.message = 'Read and stay up to date with our firm.';

        //  json Twitter
        vm.twitterGet = function(  ){

            //https://api.twitter.com/1.1/search/tweets.json
            var request = $http({
                            method : "get",
                            url: 'assets/json/tweet.json',
                            //url : 'http://api.twitter.com/1.1/search/tweets.json' ,
                            params: {
                                q: "%23freebandnames",
                                since_id: 24012619984051000,
                                max_id: 250126199840518145,
                                result_type: "mixed",
                                count: 4
                            }
                        }) ;

            return( request.then( vm.twitterHandleSuccess , vm.twitterHandleError ) ) ;

        } ;
        vm.twitterHandleError = function( response ){

            return ( response.data.message ) ;
        }
        vm.twitterHandleSuccess = function( response ){

            var posts = [] ;
            var processed = "<h2>Twitter</h2>";
            var i = 0 ;

            response['data']['statuses'].forEach( function( item ) {
                posts.push( { 'userName': item.user.name ,
                                 'ts': new Date( item.created_at ).getTime() ,
                                 'post': item.text } ) ;
            }) ;

            posts.forEach( function( item ){
                processed += "<div class='post twitter'>";
                processed += "<h3 class='twitter'>" + item.userName + "</h3>";
                processed += "<h4 class='twitter-date'>" + new Date( item.ts ).toLocaleDateString() + "</h4>";
                processed += "<p class='twitter'>"  + item.post + "</p>" ;
                processed += "</div>";
            });

            vm.twitter = $sce.trustAsHtml( processed );
        }

        //  json RSS
        vm.rssGet = function(  ){

            //https://api.twitter.com/1.1/search/tweets.json
            var request = $http({
                            method : "get",
                            url: 'assets/json/rss.json'
                        }) ;

            return( request.then( vm.rssHandleSuccess , vm.rssHandleError ) ) ;

        } ;
        vm.rssHandleError = function( response ){

            return ( response.data.message ) ;
        }
        vm.rssHandleSuccess = function( response ){

            var posts = [] ;
            var processed = "<h2>RSS</h2>";
            var i = 0 ;

            response['data'].forEach( function( item ) {
                posts.push( { 'title': item.title ,
                                 'ts': new Date( item.ts ).getTime() ,
                                 'post': item.post } ) ;
            }) ;

             posts.forEach( function( item ){
                processed += "<div class='post rss'>";
                processed += "<h3 class='rss'>" + item.title + "</h3>";
                processed += "<h4 class='rss-date'>" + new Date( item.ts ).toLocaleDateString() + "</h4>";
                processed += "<p class='rss'>"  + item.post + "</p>" ;
                processed += "</div>";
            });

            vm.rss = $sce.trustAsHtml( processed );
        }

        //  json Blog
        vm.blogGet = function(  ){

            //https://api.twitter.com/1.1/search/tweets.json
            var request = $http({
                            method : "get",
                            url: 'assets/json/blog.json'
                        }) ;

            return( request.then( vm.blogHandleSuccess , vm.blogHandleError ) ) ;

        } ;
        vm.blogHandleError = function( response ){

            return ( response.data.message ) ;
        }
        vm.blogHandleSuccess = function( response ){

            var posts = [] ;
            var processed = "<h2>Blog</h2>";
            var i = 0 ;

            response['data'].forEach( function( item ) {
                posts.push( { 'title': item.title ,
                                 'ts': new Date( item.ts ).getTime() ,
                                 'post': item.post } ) ;
            }) ;

             posts.forEach( function( item ){
                processed += "<div class='post blog'>";
                processed += "<h3 class='blog'>" + item.title + "</h3>";
                processed += "<h4 class='blog-date'>" + new Date( item.ts ).toLocaleDateString() + "</h4>";
                processed += "<p class='blog'>"  + item.post + "</p>" ;
                processed += "</div>";
            });

            vm.blog = $sce.trustAsHtml( processed );
        }

        vm.blogGet() ;
        vm.rssGet() ;
        vm.twitterGet( ) ;
    }
}());
