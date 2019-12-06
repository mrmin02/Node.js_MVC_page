module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('Qna',{//qnas
        q_title:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        q_body:{
            type: DataTypes.STRING(30),//파일 이름으로 할 지 결정해야함.
            allowNull:false,
        },
        u_id:{
            type: DataTypes.STRING(20),//foreign key
            allowNull: false,
        },
        answer:{
            type: DataTypes.STRING(20),
            defaultValue:0,
        },
        answerInfo:{
            type: DataTypes.STRING(30),//파일 이름으로 할 지 결정해야함.
            allowNull:true,
        },
        time:{
            type: DataTypes.STRING(15),// 날짜.
            allowNull: false,
        },

    },
    {
        timestamps: false,

    });
};