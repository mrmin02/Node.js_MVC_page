module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('Logoimg',{//Logoimgs
        i_name: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        i_src: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        use: {
            type: DataTypes.STRING(2),
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
    );
};