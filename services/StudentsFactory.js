studentSignIn.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [{ name : "Gus Ayala", present: false },
                      { name : "Leighann Oros", present: false },
                      { name : "Mao Trombetta", present: false },
                      { name : "Nella Casale" },
                      { name : "Garret Pinnock" },
                      { name : "Buster Paolini" },
                      { name : "Shawnta Lacher" },
                      { name : "Hal Throneberry" },
                      { name : "Tobi Dismukes" },
                      { name : "Fausto Wight" },
                      { name : "Colton Kiely" },
                      { name : "Aiko Welte" },
                      { name : "Regan Mose" },
                      { name : "Margarite Fenlon" }];

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
