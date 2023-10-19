import { GraphQLError } from "graphql";
import Student from "./datasources/student.js";
import User from "./datasources/user.js";
import StudentModel from "./models/student.model.js";
import UserModel from "./models/user.model.js";
import jwt from "jsonwebtoken";

const getDecodedUser = (authorization = "") => {
  try {
    const [bearer, token] = authorization.split(" ");
    if (!bearer || !token || bearer !== "Bearer") {
      throw new Error();
    }
    const decoded = jwt.verify(token, "SECRET_KEY");
    return decoded;
  } catch (error) {
    throw new GraphQLError("unauthenticated for the user", {
      extensions: {
        code: "UNAUTHENTICATED",
        http: { status: 401 },
      },
    });
  }
};
const authNotRequiredOperations = ["Register", "Login"];
const context = async ({ req }) => {
  const dataSources = {
    users: new User({ modelOrCollection: UserModel }),
  };
  const authNotRequired = authNotRequiredOperations.includes(
    req.body.operationName
  );
  if (authNotRequired) {
    return {
      dataSources,
    };
  }
  const decodedUser = getDecodedUser(req.headers.authorization);
  dataSources.students = new Student({ modelOrCollection: StudentModel });
  return {
    dataSources,
    user: decodedUser,
  };
};

export default context;
