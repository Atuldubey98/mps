import Container from "../common/Container";
import PrivateRoute from "../common/PrivateRoute";

export default function StudentsPage() {
  return (
    <PrivateRoute>
      <Container>
        <h1>Students Page</h1>
      </Container>
    </PrivateRoute>
  );
}
