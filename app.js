const express = require("express");
const app = express();
const myport = process.env.PORT || 3000;
const dbport = process.env.MONGOPORT || 27017;

app.listen(myport, () => console.log(`Now listening on port ${myport}`));

app.use(require("./controllers"));

const models = require("./models");
const argv = process.argv[2];

argv ? models.run(dbport, argv) : models.run(dbport);
