const router = require("express").Router();
const patientRoutes = require("./patients");

// Book routes
router.use("/frequency", patientRoutes);


module.exports = router;
