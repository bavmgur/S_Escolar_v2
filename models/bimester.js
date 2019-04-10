'use strict';
module.exports = (sequelize, DataTypes) => {
    const Bimester = sequelize.define('Bimester', {
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE
    }, {});
    Bimester.associate = function(models) {
        // associations can be defined here
        Bimester.belongsTo(models.SchoolYear, {
            foreignKey: 'SchoolYearId',
            onDelete: 'CASCADE'
        })
        Bimester.hasMany(models.Score, {
            foreignKey: 'BimesterId'
        })
    };
    return Bimester;
};