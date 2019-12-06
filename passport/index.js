const local = require('./localStrategy');
const {User}= require('../models');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
      console.log('serializeUser user: -------------------------------'+user.u_id);
      done(null, user.u_id);
    });
  
    passport.deserializeUser((u_id, done) => {
        console.log('deserializeUser id--------------------------: '+u_id);
            User.findOne({ where: { u_id } })
            .then(userInfo => 
                {
                console.log("deserializeUser user: ",userInfo);
                const {u_id,admin,name,password}=userInfo;
                const user={u_id,admin,name,password}
                console.log(user);
                done(null, user);
            })
            .catch(err=> done(err));
    });
  
    local(passport);
  };