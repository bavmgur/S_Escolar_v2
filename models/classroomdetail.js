'use strict';
module.exports = (sequelize, DataTypes) => {
    const ClassroomDetail = sequelize.define('ClassroomDetail', {
        tutor: DataTypes.STRING
    }, {});
    ClassroomDetail.associate = function(models) {
        // associations can be defined here
        ClassroomDetail.belongsTo(models.Classroom, {
            foreignKey: 'ClassroomId',
            onDelete: 'CASCADE'
        })
        ClassroomDetail.belongsTo(models.Teacher, {
            foreignKey: 'TeacherId',
            onDelete: 'CASCADE'
        })
    };
    return ClassroomDetail;
};