studentSignIn.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scop.StudentsFactory = StudentsFactory;
});