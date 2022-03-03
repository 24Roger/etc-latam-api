import sequelize from '../database';
import { DataTypes } from 'sequelize';
import Rol from '../rol/Rol';

const User = sequelize.define(
    'user',
    {
        user: {
            required: true,
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        email: {
            required: true,
            type: DataTypes.STRING(50),
            unique: true,
        },
        password: {
            required: true,
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        rol_id: {
            type: DataTypes.INTEGER,
            references: {
                key: 'id',
                model: Rol
            },
            defaultValue: 1,
            allowNull: false,
        },
        enable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        last_connection: {
            type: DataTypes.DATEONLY,
        },
        question_answered: {
            type: DataTypes.INTEGER,
        },
        first_admission: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        expiration_date: {
            type: DataTypes.DATEONLY
        },
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        modified_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        creation_date: {
            required: true,
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: Date.now()
        },
        modification_date: {
            type: DataTypes.DATEONLY,
        },
    }
);

User.belongsTo(
    Rol,
    {
        foreignKey: 'rol_id',
        as: 'rol',
        targetKey: 'id'
    }
);

export default User;
