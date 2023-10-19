import { ApolloServer } from "@apollo/server";

import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import context from "./context.js";
import schema from "./schema.js";
import config from "config";
mongoose.connect(config.get("dbConfig.host"));
const server = new ApolloServer({
  introspection: true,
  schema,
  includeStacktraceInErrorResponses: false,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context,
});

console.log(`Server running on ${url} 😎`);
