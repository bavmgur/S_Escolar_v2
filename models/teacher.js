'use strict';
module.exports = (sequelize, DataTypes) => {
    const Teacher = sequelize.define('Teacher', {
        dni: DataTypes.INTEGER,
        name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        hourly: DataTypes.DOUBLE,
        total_hours: DataTypes.STRING
    }, {});
    Teacher.associate = function(models) {
        // associations can be defined here
        Teacher.hasMany(models.CoursesDetailTeacher, {
            foreignKey: 'TeacherId'
        })
        Teacher.hasMany(models.ClassroomDetail, {
            foreignKey: 'TeacherId'
        })
    };
    return Teacher;
};