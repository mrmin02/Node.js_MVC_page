const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const { User } = require('../models');

module.exports = (passport) => {
    passport.use(new LocalStrategy({
      usernameField: 'u_id',        // --> 없으면 login.pug   에서 id 의 name 을 username 으로 변경합니다.
      passwordField: 'password',
    }, async (u_id, password, done) => {
      try {
        console.log("local");
        const exUser = await User.findOne({ where: { u_id } });
        console.log('exUser: ',exUser);
        if (exUser) {
          const result = await bcrypt.compare(password, exUser.password);
          if (result) {
            console.log('암호 맞음');
            done(null, exUser);
          } else {
            console.log('암호 틀림');
            done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
          }
        } else {
          done(null, false, { message: '가입되지 않은 회원입니다.' });
        }
      } catch (error) {
        console.error(error);
        done(error);
      }
    }));
  };