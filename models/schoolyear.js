'use strict';
module.exports = (sequelize, DataTypes) => {
    const SchoolYear = sequelize.define('SchoolYear', {
        year: DataTypes.INTEGER
    }, {});
    SchoolYear.associate = function(models) {
        // associations can be defined here
        SchoolYear.hasMany(models.PaymentDetail, {
            foreignKey: 'SchoolYearId'
        })
        SchoolYear.hasMany(models.Bimester, {
            foreignKey: 'SchoolYearId'
        })
    };
    return SchoolYear;
};