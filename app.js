const express = require("express");
const connectDB = require("./config/db.js");
const dotenv = require("dotenv");
const usersRoute = require("./routes/users.js");
const todosRoute = require("./routes/todos.js");
const authRoute = require("./routes/auth.js");
const authMiddleWare = require("./middleware/authorization.js");

dotenv.config({ path: "./config/.env" });

const PORT = process.env.PORT; 
// console.log("PORT:", PORT);

const app = express();
//converts from json to js to be used here
app.use(express.json());
connectDB();

app.use("/auth", authRoute);
app.use("/users", authMiddleWare, usersRoute);
app.use("/todos", authMiddleWare, todosRoute);

app.listen(PORT, () => console.log(`Server Listening on Port: ${PORT}`));
