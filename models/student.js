'use strict';
module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
        dni: DataTypes.INTEGER,
        name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        phone_father: DataTypes.INTEGER,
        phone_mather: DataTypes.INTEGER,
        state: DataTypes.STRING,
        password: DataTypes.STRING
    }, {});
    Student.associate = function(models) {
        // associations can be defined here
        Student.hasMany(models.PaymentDetail, {
            foreignKey: 'StudentId'
        })
        Student.hasMany(models.CoursesDetailStudent, {
            foreignKey: 'StudentId'
        })
        Student.hasMany(models.Score, {
            foreignKey: 'StudentId'
        })
        Student.belongsTo(models.Classroom, {
            foreignKey: 'ClassroomId',
            onDelete: 'CASCADE'
        })
    };
    return Student;
};