const db = require("../db");
const User = require("../models/user");
const { hashPassword } = require("../utils");

const createUsers = async () => {
  const newUser = {
    username: "testUser",
    password_digest: hashPassword("testpassword"),
    email: "testuser@gmail.com"
  };
  await User.create(newUser);
  console.log("New user created!");
}

const main = async () => {
  await createUsers(); 
  db.close();
}

main();