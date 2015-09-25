studentSignIn.controller('AttendancesCtrl', function AttendanceCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.addStudentPresent = function(student) {
    student.present = "true";
    console.log(student.name + " present = " + student.present);
  };
  $scope.addStudentNotPresent = function(student) {
    student.present = false;
    console.log(student.name + " present = " + student.present);
  };
});
