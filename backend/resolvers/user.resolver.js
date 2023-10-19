import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";
const userResolver = {
  Query: {
    currentUser(_, __, { user }) {
      return user;
    },
  },
  Mutation: {
    async login(_, { email, password }, { dataSources: { users } }) {
      const user = await users.login(email, password);
      if (!user) {
        throw new GraphQLError("user is not authenticated", {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        });
      }
      const token = jwt.sign(user, "SECRET_KEY", { expiresIn: "1h" });
      return { user, token };
    },
    async register(_, { email, password, name }, { dataSources: { users } }) {
      const registeredUser = await users.register({ email, password, name });
      if (!registeredUser) {
        throw new GraphQLError("User is already registered", {
          extensions: {
            code: "FORBIDDEN",
          },
        });
      }
      return registeredUser;
    },
  },
};
export default userResolver;
