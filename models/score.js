'use strict';
module.exports = (sequelize, DataTypes) => {
    const Score = sequelize.define('Score', {
        score_1: DataTypes.DOUBLE,
        score_2: DataTypes.DOUBLE,
        score_3: DataTypes.DOUBLE
    }, {});
    Score.associate = function(models) {
        // associations can be defined here
        Score.belongsTo(models.Student, {
            foreignKey: 'StudentId',
            onDelete: 'CASCADE'
        })
        Score.belongsTo(models.Bimester, {
            foreignKey: 'BimesterId',
            onDelete: 'CASCADE'
        })
        Score.belongsTo(models.Courses, {
            foreignKey: 'CoursesId',
            onDelete: 'CASCADE'
        })
    };
    return Score;
};