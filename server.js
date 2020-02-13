const express = require("express");
const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json({ extended: false }));

app.use("/api/logs", require("./routes/logRoute"));
app.use("/api/techs", require("./routes/technicianRoute"));

app.listen(PORT, () => {
  console.log("NodeJS server is started on the port " + PORT);
});
