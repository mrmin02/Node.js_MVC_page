module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('Hyon',{//hyonzi
        u_id:{
            type: DataTypes.STRING(20),//foreign key
            allowNull: false,
        },
        hyonText:{
            type: DataTypes.STRING(200),
            allowNull: false,
        },

    },
    {
        timestamps: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',

    });
};