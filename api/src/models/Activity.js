const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
        },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dificulty:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            min:1,
            max:5
        }
    },
    durationHours:{
        type: DataTypes.INTEGER,
        field: 'duration_hours',
    },
    season: {
        type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
        allowNull: false,
    }
  },{timestamps:false});
};