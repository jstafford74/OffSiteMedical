require('dotenv').config();
var db = require('../models');
// const Profile = require('../models/Profile')


async function testOne() {
    try {
        // await db.sequelize.sync({ force: false });
        const data = await db.Profile.findAll({});
        data.forEach((it) =>
            console.log(it.first_Name));


    } catch (error) {
        console.log(error, data);
    }
}

testOne();