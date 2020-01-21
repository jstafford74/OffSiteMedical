require('dotenv').config();
var db = require('../models');
var Profile = require("./profile_class.js");

async function profiles() {
  let proArr = [];
  for (let i = 0; i < 15; i++) {
    proArr[i] = new Profile();
    proArr[i].makeProfileData();
  }
  await db.sequelize.sync({ force: true });
      db.Profile.bulkCreate(proArr);
  // return patArr;

}
profiles();