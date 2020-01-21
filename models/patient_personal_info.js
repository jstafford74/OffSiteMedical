/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_personal_info', {
    'pPInfo_ID': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'patient_ID': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'pHist_ID': {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'pPInfo_SSN': {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'pPInfo_Occupation': {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'pPInfo_Status': {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'pPInfo_DOB': {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'pPInfo_Gender': {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'pPInfo_Email': {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'pPInfo_Hair': {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'pPInfo_Eyes': {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'pPInfo_Height': {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'pPInfo_Weight': {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    }
  }, {
    tableName: 'patient_personal_info'
  });
};
