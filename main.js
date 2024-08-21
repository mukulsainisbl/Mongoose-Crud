const express = require("express");
const app = express();

const PORT = 8080;
const { userRoutes } = require("./routes/user.routes");
const {connection} = require('./config/db')

app.use(express.json());

app.use("/user", userRoutes);

app.listen(PORT, async () => {
  
  console.log("Connected to server");
});
