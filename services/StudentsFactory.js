studentSignIn.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [{ name : "Gus Ayala", present: false },
                      { name : "Leighann Oros", present: false },
                      { name : "Mao Trombetta", present: false },
                      { name : "Nella Casale", present: false },
                      { name : "Garret Pinnock", present: false },
                      { name : "Buster Paolini", present: false },
                      { name : "Shawnta Lacher", present: false },
                      { name : "Hal Throneberry", present: false },
                      { name : "Tobi Dismukes", present: false },
                      { name : "Fausto Wight", present: false },
                      { name : "Colton Kiely", present: false },
                      { name : "Aiko Welte", present: false },
                      { name : "Regan Mose", present: false },
                      { name : "Margarite Fenlon", present: false }];

  // factory.checkPresent = function() {
  //   if (factory.students.present == true) {
  //     console.log(factory.students.present);
  //     return true;
  //   }
  //   console.log(factory.students.present);
  //   return false
  //
  //
  // };

  return factory;
});
