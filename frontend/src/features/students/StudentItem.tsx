export default function StudentItem(student: Student) {
  return (
    <li className="mx-auto">
      <div>
        <span className="font-bold">First Name : </span>
        <span className="font-semi-bold">{student.firstName}</span>
      </div>
      <div>
        <span className="font-bold">Last Name : </span>
        <span className="font-semi-bold">{student.lastName}</span>
      </div>
      <div>
        <span className="font-bold">Roll Number : </span>
        <span className="font-semi-bold">{student.rollNumber || 0}</span>
      </div>
      <div>
        <span className="font-bold">Class </span>
        <span className="font-semi-bold">{student.class}</span>
      </div>
    </li>
  );
}
