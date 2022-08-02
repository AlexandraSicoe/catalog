class Student {
  constructor(name, phone, address, subjects) {
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.subjects = subjects;
  }
}
class Subject {
  constructor(name, grades) {
    this.name = name;
    this.grades = grades;
  }
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getPhoneNumber() {
  var lastEightDigits = randomInteger(10000000, 99999999);
  return "07" + lastEightDigits;
}

function getRandomName(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function getRandomGradesArray() {
  return [
    randomInteger(1, 10),
    randomInteger(1, 10),
    randomInteger(1, 10),
    randomInteger(1, 10),
    randomInteger(1, 10),
  ];
}

console.log(getRandomName(5));
var catalog = [];
var nrStudenti = Number(prompt("Scrie nr de studenti")); //casting from string (prompt("Scrie nr de studenti") to number
for (var i = 0; i < nrStudenti; i++) {
  var subjects = [];

  for (var e = 0; e < 3; e++) {
    if (e == 0) {
      var subject = new Subject("romana", getRandomGradesArray());
      subjects.push(subject);
    }
    if (e == 1) {
      var subject = new Subject("matematica", getRandomGradesArray());
      subjects.push(subject);
    }
    if (e == 2) {
      var subject = new Subject("informatica", getRandomGradesArray());
      subjects.push(subject);
    }
    // var subjectName = e == 0 ? "romana" : e == 1 ? "matematica" : "informatica"; //short if
    // var subject = new Subject(subjectName, [
    //   randomInteger(1, 10),
    //   randomInteger(1, 10),
    //   randomInteger(1, 10),
    //   randomInteger(1, 10),
    //   randomInteger(1, 10),
    // ]);
    // subjects.push(subject);
  }

  var student = new Student(
    getRandomName(6),
    getPhoneNumber(),
    getRandomName(10),
    subjects
  );
  catalog.push(student);
}
console.log(catalog);
