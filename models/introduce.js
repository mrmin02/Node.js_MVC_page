module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('Introduce',{//users
        introduce: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        i_name: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        i_phone: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        i_email: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        i_birth: {
            type: DataTypes.STRING(9),
            allowNull: false,
        },
        real_name: {
            type: DataTypes.STRING(10),
            allowNull: false,
        }
        /* u_name: {
            type: DataTypes.STRING(15),
            allowNull: false,
        } */
        /* i_image: {
            type: DataTypes.STRING(50),
            allowNull: false,
        } */
    },
    {
        timestamps: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    }
    );
};