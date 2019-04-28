'use strict';
module.exports = (sequelize, DataTypes) => {
    const Assistance = sequelize.define('Assistance', {
        hour: DataTypes.STRING,
        state: DataTypes.INTEGER
    }, {});
    Assistance.associate = function(models) {
        // associations can be defined here
        Assistance.belongsTo(models.Student, {
            foreignKey: 'StudentId',
            onDelete: 'CASCADE'
        })
    };
    return Assistance;
};