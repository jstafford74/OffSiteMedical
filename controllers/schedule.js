const express = require('express');
const router = express.Router();
var db = require("../models");

const Op = db.Sequelize.Op;

router.route("/").get(async (req, res) => {
  try {
    const data = db.patient_appointments.findAll({
      attributes: [
        'patient_ID', 'patient_Number', 'pAppt_Date', 'patient_FirstName', 'patient_LastName',
      ],
      where: {
        patient_Number: {
          [Op.regexp]: '[0-9]{1,10}'
        }
      },
      group: ['patient_Number']

    });
    console.log(data);
    res.json(data);

  } catch (error) {
    res.status(400).json({ error: { name: error.name, msg: error.message } });
  }
});



router.route("/:year").get(async (req, res) => {
  console.log("route hit:  /:year", req.params.year);
  // console.log(req);
  try {
    const results = await db.patient_appointments.findAll({
      attributes: [
        'patient_ID', 'patient_Number', 'pAppt_Date', 'patient_FirstName', 'patient_LastName',
      ],
      where: {
        pApptDate: db.patient_appointments.where(sequelize.fn('YEAR', sequelize.col('pAppt_Date')), req.params.year)
      },
      group: ['patient_Number']
    })
    debugger;

    res.json(results)
  } catch (error) {
    res.status(400).json({ error: { name: error.name, msg: error.message } });
  }
});


module.exports = router;