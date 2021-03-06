const Reader = require("./../utils/Reader");
const StudentPartherService = require("./../services/StudentPartherService");

class StudentPartherController{

    static filterStudents(){
        const students = Reader.readJsonFile("./visualpartners.json");
        const totalStudents = StudentPartherService.filterStudents(students);
        return totalStudents; 
    }
    static getStudentsCertification(){
        const students = Reader.readJsonFile("./visualpartners.json");
        const studentsCerfication = StudentPartherService.filterStudents(students);
        const studentsApproved = studentsCerfication.map((student) => student.email );
        return studentsApproved;
    }

    static getCreditStudents(){
        const students = Reader.readJsonFile("./visualpartners.json");
        const studentsCredits = StudentPartherService.getHighCreditStudents(students)
        return studentsCredits
    }
    

}


module.exports = StudentPartherController;