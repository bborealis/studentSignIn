var studentSignIn = angular.module('studentSignIn', ['ui.router']);

studentSignIn.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url:"",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('signin', {
    url:"/signin",
    templateUrl: "partials/signin.html",
    controller: 'AttendancesCtrl'
  });
});
