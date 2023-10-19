const resolvers = {
  Query: {
    async student(_, { _id }, { dataSources: { students } }) {
      return await students.getStudentById(_id);
    },
    async students(_, __, { dataSources: { students } }) {
      return await students.getStudents();
    },
  },
  Mutation: {
    async createStudent(_, { student }, { dataSources: { students } }) {
      const newStudent = await students.createStudent(student);
      return newStudent;
    },
    async deleteStudent(_, { _id }, { dataSources: { students } }) {
      const deletedStudent = await students.deleteStudentById(_id);
      return deletedStudent ? true : false;
    },
    async updateStudent(_, { _id, student }, { dataSources: { students } }) {
      return await students.updateStudentById(_id, student);
    },
  },
};
export default resolvers;
