
require('dotenv').config();
var db = require('./models');
const express = require('express');
const morgan = require('morgan');
const passport = require('passport');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================
app.use(require("./routes"))

// Syncing our sequelize models Starting our Express app
// =============================================================
async function startup() {
  const dbOutput = await db.sequelize.sync({ force: false });
  
  console.log('----------------------------');
  console.log('DATABASE SERVER CONNECTED');
  console.group('DATABASE CONFIG');
  console.table(dbOutput.config);
  console.groupEnd();

  // Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
  // console.group('DATABASE OPTIONS');
  // console.table(dbOutput.options);
  // console.groupEnd();

  await app.listen(PORT);
  console.log('----------------------------');
  console.log(`WEB SERVER LISTENING ON: http://localhost:${PORT}`);
}

startup();

