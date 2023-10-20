import { useState } from "react";
import Container from "../common/Container";
import PrivateRoute from "../common/PrivateRoute";
import CreateStudentModal from "./CreateStudentModal";

import StudentsList from "./StudentsList";
import Operations from "./Operations";

export default function StudentsPage() {
  const [openStudentModal, setOpenStudentModal] = useState(true);
  const onToggleModal = () => {
    setOpenStudentModal((prev) => !prev);
  };
  return (
    <PrivateRoute>
      <Container>
        <h1 className="text-center text-4xl mt-2 font-bold">Students</h1>
        <Operations toggleModal={onToggleModal} />
        <StudentsList />
        <CreateStudentModal
          open={openStudentModal}
          toggleModal={onToggleModal}
        />
      </Container>
    </PrivateRoute>
  );
}
