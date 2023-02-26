const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

// app.use((req, res, next) => {
//   console.log()
//   next()
// });

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
