'use strict';
module.exports = (sequelize, DataTypes) => {
    const CoursesDetailStudent = sequelize.define('CoursesDetailStudent', {
        day: DataTypes.NUMBER,
        month: DataTypes.NUMBER,
        assistance: DataTypes.BOOLEAN
    }, {});
    CoursesDetailStudent.associate = function(models) {
        // associations can be defined here
        CoursesDetailStudent.belongsTo(models.Student, {
            foreignKey: 'StudentId',
            onDelete: 'CASCADE'
        })
        CoursesDetailStudent.belongsTo(models.Courses, {
            foreignKey: 'CoursesId',
            onDelete: 'CASCADE'
        })
    };
    return CoursesDetailStudent;
};