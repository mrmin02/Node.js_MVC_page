const express = require('express');
const { isLoggedIn ,isNotLoggedIn } = require('./middlewares');
const { User, Introduce } = require('../models');

const router = express.Router();

router.get('/:id', (req, res, next) => {
    console.log('요청 받아짐');
    Introduce.findOne({where: {i_name: req.params.id}})
        .then((introduce) => {
            console.log('넘긴다.');
            console.log('req.params.id : ' + req.params.id );
            res.json(introduce);
            res.status(200);
            
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

module.exports = router;