'use strict';
module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define('Courses', {
        name: DataTypes.STRING
    }, {});
    Courses.associate = function(models) {
        // associations can be defined here
        Courses.hasMany(models.CoursesDetailStudent, {
            foreignKey: 'CoursesId'
        })
        Courses.hasMany(models.CoursesDetailTeacher, {
            foreignKey: 'CoursesId'
        })
        Courses.hasMany(models.Score, {
            foreignKey: 'CoursesId'
        })
    };
    return Courses;
};