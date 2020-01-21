/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var Profile = sequelize.define('Profile', {
    'idProfile': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
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
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'personal': {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      comment: "null"
    },
    'enterprise': {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      comment: "null"
    },
    'company': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'street_address': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'city': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'state': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'zip': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'work_phone': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'cell_phone': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'username': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'password': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'profile'
  });
  return Profile;
};


