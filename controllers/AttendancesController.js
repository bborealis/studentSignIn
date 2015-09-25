studentSignIn.controller('AttendancesCtrl', function AttendanceCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.addStudentPresent = function(student) {
    student.present = true;
  };
  $scope.addStudentNotPresent = function(student) {
    student.present = false;
  };
});
