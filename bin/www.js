"use strict";

const port = 8080
const app = require("../app");
app.listen(port, () => {
  console.log('Listening on port: ' + port);
})