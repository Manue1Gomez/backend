import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async() => {
    const students = await studentModel.fetch();
    return students;
}

 export const CreateStudent = async(student) => {
    const studentId = await studentModel.insert(student);
    return studentId
} 