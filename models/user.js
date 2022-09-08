const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password_digest: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = model("users", userSchema);