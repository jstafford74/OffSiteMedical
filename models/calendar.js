/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var Calendar = sequelize.define('Calendar', {
    
    'Date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'company': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'first_Name': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'last_Name': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'email': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'phone': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'location': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'address': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'City': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'State': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'Zip': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      comment: "null"
    },
    'Start Time': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'End Time': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'num_avail': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'calendar'
  });
  return Calendar;
};


