import { useQuery } from "@apollo/client";
import { GET_STUDENTS } from "../../graphql/students";
import StudentItem from "./StudentItem";

export default function StudentsList() {
  const { error, loading, data } = useQuery(GET_STUDENTS);
  if (loading) {
    return <h1>Loading Students ...</h1>;
  }
  if (error) {
    return <h1>Error while fetching students </h1>;
  }
  return (
    <div className="container">
      <ul className="list-style-none grid grid-cols-3 mt-3">
        {data.students.map((student: Student) => (
          <StudentItem key={student._id} {...student} />
        ))}
      </ul>
    </div>
  );
}
