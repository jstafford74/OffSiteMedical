/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var Patient_Appointments = sequelize.define('Patient_Appointments', {

    'patient_ID': {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    },
    'patient_Number': {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'patient_firstName': {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'patient_lastName': {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'pAddr_Home': {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'pAppt_Date': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00',
      comment: "null"
    }
  }, {
    tableName: 'patient_appointments'
  })
  return Patient_Appointments;
}
