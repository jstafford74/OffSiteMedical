require('dotenv').config();
var db = require('../models');
const Op = db.Sequelize.Op

testOne();
testTwo();

async function testOne() {
    try {
        const data = await db.Profile.findAll();
        data.forEach((item) => {
            console.log(item.first_Name);
        })
    } catch (err) { console.log(err, message) }

}


async function testTwo() {
    try {
        const data2 = await db.Profile.findAll({
            where: {
                username: 'Ora.Witting'
            }
        })

        console.group(data2);

    } catch (err) { console.log(err) }
}

