module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('User',{//users
        u_id:{
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        password:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        email:{
            type:DataTypes.STRING(30),
            allowNull: false,
        },
        name:{
            type:DataTypes.STRING(15),
            allowNull: false,
        },
        identity_number:{
            type:DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        phone:{
            type:DataTypes.STRING(15),
            allowNull: false,
        },
        gender:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        admin:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue:0,
        }
    },
    {
        timestamps: false,
    }
    );
};