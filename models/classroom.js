'use strict';
module.exports = (sequelize, DataTypes) => {
    const Classroom = sequelize.define('Classroom', {
        number: DataTypes.INTEGER,
        degree: DataTypes.STRING,
        section: DataTypes.STRING
    }, {});
    Classroom.associate = function(models) {
        // associations can be defined here
        Classroom.hasMany(models.Student, {
            foreignKey: 'ClassroomId'
        })

        Classroom.hasMany(models.ClassroomDetail, {
            foreignKey: 'ClassroomId'
        })
    };
    return Classroom;
};