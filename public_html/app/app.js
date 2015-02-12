/* 
 ==========================================================================
 FundsXpert
 
 Graphical User Interface Programming II
 Professor Jessie Heines
 Michael Meding & Jose Flores
 2015-02-12
 
 This file handles all the routes and route configuration.
 ========================================================================== 
 */


(function () { // this is to protect global namespace
	"use-strict"; // for strict syntax checking

	var fxClient = angular.module('fxClient', ['ui.router']);
	//Angular routing config
	fxClient.config(["$stateProvider",
		"$urlRouterProvider",
		function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/");

			$stateProvider
					  .state("home", {
						  url: "/",
						  templateUrl: "app/welcomeView.html"

					  });
		}]
			  );
});







