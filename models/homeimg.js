module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('homeimg',{//homeimgs
        i_name: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        i_src: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
    );
};