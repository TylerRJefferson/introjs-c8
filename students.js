const students = require("./students.json")

// display all the students first names one at a time, one per line.
// e.g.
// Bobby
// Jenny
// Tara
function showStudents(studentList) {

    for (let i = 0; i < studentList.length; i++) {
        const student = studentList[i];
        console.log(student.firstName)
    }
}

showStudents(students);