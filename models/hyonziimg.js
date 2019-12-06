module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('Image',{//Image
        u_id:{
            type: DataTypes.STRING(20),//foreign key
            allowNull: false,
        },
        hyonImage:{
            type: DataTypes.STRING(200),
            allowNull: true,
        },

    },
    {
        timestamps: false,

    });
};