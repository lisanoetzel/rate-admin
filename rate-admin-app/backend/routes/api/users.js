//Required dependencies
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
//Loading Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
//Loading User Model
const user = require('../../models/users');
//@route POST api/users/register
//@desc register user
//@access Public

router.post('/register', (req, res) => {
    //Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    //Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    user.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: 'Email already exists' });
        } else {
            const newUser = new user({
                name: req.body.name,
                email: req.body.email,
                username: req.body.username,
                password: req.body.password,
            });
            //Hashing password before saving in DB
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

    //@route POST api/users/login
    //@desc Login user & return JWT token
    //@access Public
    router.post('/login', (req, res) => {
        //Form validation
        const { errors, isValid } = validateLoginInput(req.body);
        //Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const email = req.body.email;
        const password = req.body.password;
        //Find user by email
        user.findOne({ email }).then(user => {
            //Check if user exists
            if (!user) {
                return res.status(404).json({ emailnotfound: 'Email not found' });
            };
        });

    });  //moved from ln 45
module.exports = router;
