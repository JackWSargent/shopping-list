'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  List.associate = function(models) {
    List.belongsTo(models.User, {
      foreigKey: "userId",
      onDelete: "CASCADE"
    })
    List.hasMany(models.Item, {
      foreignKey: "listId",
      as: "items"
    })
  };
  return List;
};