const express = require("express");
const app = express();
const myport = process.env.PORT || 3000;

app.listen(myport, () => console.log(`Now listening on port ${myport}`));

app.use(require("./controllers"));
