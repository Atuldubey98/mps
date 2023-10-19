import { MongoDataSource } from "apollo-datasource-mongodb";
import bcryptjs from "bcryptjs";
export default class User extends MongoDataSource {
  /**
   *
   * @param {string} email
   * @param {string} password
   */
  async login(email, password) {
    const userFound = await this.model.findOne({ email });
    if (!userFound) {
      return null;
    }
    const existingPassword = userFound.password;
    const isPasswordMatching = await bcryptjs.compare(
      password,
      existingPassword
    );
    if (!isPasswordMatching) {
      return null;
    }
    
    return { email: userFound.email, name: userFound.name, _id: userFound._id };
  }
  async register({ email, password, name }) {
    const userFound = await this.model.findOne({ email });
    if (userFound) {
      return null;
    }
    return this.model.create({ email, password, name });
  }
}
