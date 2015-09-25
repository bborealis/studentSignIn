var studentSignIn = angular.module('studentSignIn', ['ui.router']);

studentSignIn.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url:"",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('attendance', {
    url:"/attendance",
    templateUrl: "partials/attendance.html"
    controller: "AttendanceCtrl"
  });
});
