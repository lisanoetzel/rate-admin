//Required dependencies
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
//Loading Input Validation
// const validateRegisterInput = require('../../validation/register');
// const validateLoginInput = require('../../validation/login');
const validateSurveyInput = require('../../validation/survey');
//Loading Administrator Model
const administrator = require('../../models/administrators');
//@route POST api/users/register
//@desc register user
//@access Public

router.post('/survey', (req, res) => {
    // Survey Input
    const { errors, isValid } = validateSurveyInput(req.body);
    //Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    administrator.findOne({ administrator: req.body.administrator }).then(DBuser => {
        if (DBuser) {
            return res.status(400).json({ administrator: 'Admin already exists' });
        } else {
            const administrator = new administrator({
                survey_name: req.body.survey_name,
                survey_title: req.body.survey_title,
                survey_institution: req.body.survey_institution,
                survey_term: req.body.survey_term,
                survey_q1: req.body.survey_q1,
                survey_q2: req.body.survey_q2,
                survey_q3: req.body.survey_q3,
            });
            //             //Hashing password before saving in DB
            //             bcrypt.genSalt(10, (err, salt) => {
            //                 bcrypt.hash(newUser.password, salt, (err, hash) => {
            //                     if (err) throw err;
            //                     newUser.password = hash;
            //                     newUser
            //                         .save()
            //                         .then(user => res.json(user))
            //                         .catch(err => res.json(err));
            //                 });
        }
    });
});

            //@route POST api/administrators/survey
            //@desc Administrator data
            //@access Public
            // router.post('/login', (req, res) => {
            //     //Form validation
            //     const { errors, isValid } = validateLoginInput(req.body);
            //     //Check validation
            //     if (!isValid) {
            //         return res.status(400).json(errors);
            //     }
            //     const email = req.body.email;
            //     const password = req.body.password;
            //     //Find user by email
            //     user.findOne({ email }).then(user => {
            //         //Check if user exists
            //         if (!user) {
            //             return res.status(404).json({ emailnotfound: 'Email not found' });
            //         };
            //     });

                //@route POST api/administrators/survey data
                //@desc administrator survey data & return JWT token
                //@access Public
                router.post('/survey', (req, res) => {
                    //Form validation
                    const { errors, isValid } = validateSurveyInput(req.body);
                    //Check validation
                    if (!isValid) {
                        return res.status(400).json(errors);
                    }
                    // const survey = req.body.survey;
                    // // const password = req.body.password;
                    // //Find user by email
                    // administrator.findOne({ survey }).then(administrator => {
                    //     //Check if administrator exists
                    //     if (!administrator) {
                    //         return res.status(404).json({ administratorSurveyNotFound: 'Administrator survey not found' });
                    //     };
                    // });

                });  //moved from ln 45
            module.exports = router;
