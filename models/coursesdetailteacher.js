'use strict';
module.exports = (sequelize, DataTypes) => {
    const CoursesDetailTeacher = sequelize.define('CoursesDetailTeacher', {
        hour_start: DataTypes.STRING,
        hour_end: DataTypes.STRING
    }, {});
    CoursesDetailTeacher.associate = function(models) {
        // associations can be defined here
        CoursesDetailTeacher.belongsTo(models.Teacher, {
            foreignKey: 'TeacherId',
            onDelete: 'CASCADE'
        })
        CoursesDetailTeacher.belongsTo(models.Courses, {
            foreignKey: 'CoursesId',
            onDelete: 'CASCADE'
        })
    };
    return CoursesDetailTeacher;
};