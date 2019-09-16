'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    purchased: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    listId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Item.associate = function(models) {
    Item.belongsTo(models.List, {
      foreignKey: "listId",
      onDelete: "CASCADE"
    });
    Item.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };
  return Item;
};