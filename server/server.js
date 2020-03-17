const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(4000, () => {
  console.log("app listen on port 4000");
});
