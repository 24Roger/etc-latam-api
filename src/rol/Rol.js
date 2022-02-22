import { DataTypes } from 'sequelize';
import sequelize from '../database';

const Rol = sequelize.define(
    'rol',
    {
        rol: {
            require: true,
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(100),
            require: true,
        },
    }
);

export default Rol;

