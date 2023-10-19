import { MongoDataSource } from "apollo-datasource-mongodb";

export default class Student extends MongoDataSource {
  getStudents() {
    return this.model.find();
  }
  getStudentById(studentId) {
    return this.findOneById(studentId);
  }
  createStudent(student) {
    return this.model.create(student);
  }
  deleteStudentById(studentId) {
    return this.model.findByIdAndDelete(studentId);
  }
  updateStudentById(studentId, student) {
    return this.model.findByIdAndUpdate(studentId, student, { new: true });
  }
  getStudentsByClassName(classNumber) {
    return this.model.find({ class: classNumber });
  }
}
