import mongoose, { Schema } from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

const UserSchema = new Schema({
  _id: ObjectId,
  index: Number,
  picture: String,
  age: Number,
  eyeColor: String,
  name: String,
  company: String,
  email: String,
  phone: String,
  friends: [
    {
      _id: ObjectId,
      index: Number,
      picture: String,
      age: Number,
      eyeColor: String,
      name: String,
      company: String,
      email: String,
      phone: String,
    },
  ],
  greeting: String,
});

export default mongoose.model("User", UserSchema);
