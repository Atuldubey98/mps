import bcryptjs from "bcryptjs";
export async function beforeUserSave(next) {
  const hashedpassword = await bcryptjs.hash(
    this.password,
    await bcryptjs.genSalt(10)
  );
  this.password = hashedpassword;
  next();
}
