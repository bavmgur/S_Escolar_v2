'use strict';
module.exports = (sequelize, DataTypes) => {
    const PaymentDetail = sequelize.define('PaymentDetail', {
        month: DataTypes.INTEGER,
        state: DataTypes.STRING
    }, {});
    PaymentDetail.associate = function(models) {
        // associations can be defined here
        PaymentDetail.belongsTo(models.Student, {
            foreignKey: 'StudentId',
            onDelete: 'CASCADE'
        })
        PaymentDetail.belongsTo(models.SchoolYear, {
            foreignKey: 'SchoolYearId',
            onDelete: 'CASCADE'
        })
    };
    return PaymentDetail;
};