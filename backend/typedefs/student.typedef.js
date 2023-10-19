import gql from "graphql-tag";
import { readFileSync } from "fs";

const studentTypeDef = gql(
  readFileSync("./graphql/student.graphql", { encoding: "utf-8" })
);

export default studentTypeDef;
