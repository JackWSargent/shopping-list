'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      purchased: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE", 
        allowNull: false,    
        references: {        
          model: "Users",   
          key: "id",         
          as: "userId"      
        },
      },
      listId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE", 
        allowNull: false,    
        references: {        
          model: "Lists",   
          key: "id",         
          as: "listId"      
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Items');
  }
};