import { buildSubgraphSchema } from "@apollo/subgraph";
import studentResolver from "./resolvers/student.resolvers.js";
import studentTypeDef from "./typedefs/student.typedef.js";
import userTypeDef from "./typedefs/user.typedef.js";
import userResolver from "./resolvers/user.resolver.js";
const schema = buildSubgraphSchema([
  { typeDefs: studentTypeDef, resolvers: studentResolver },
  { typeDefs: userTypeDef, resolvers: userResolver },
]);

export default schema;
