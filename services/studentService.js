import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async() => {
    const students = await studentModel.fetch();
    return students;
}

 export const CreateStudent = async(student) => {
    const studentId = await studentModel.insert(student);
    return studentId
} 

//Update
export const updateStudent = async (student) => {
   const updatedStudent = await studentModel.update(student);
   return updatedStudent;
}
//Delete
export const deleteStudent = async(id) => {
    const deletedStudent = await studentModel.remove(id);
    return deletedStudent;
}