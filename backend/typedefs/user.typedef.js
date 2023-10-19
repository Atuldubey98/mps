import gql from "graphql-tag";
import { readFileSync } from "fs";

const userTypeDef = gql(
  readFileSync("./graphql/user.graphql", { encoding: "utf-8" })
);

export default userTypeDef;
