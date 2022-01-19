import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    Email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    Email: "john@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Tom Hank",
    Email: "tom@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users
