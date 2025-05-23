import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, email: true },
    password: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};
export const UserCollection = model('users', userSchema);
