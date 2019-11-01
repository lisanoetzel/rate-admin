//Required dependencies
const validator = require('validator');
const isEmpty = require('is-empty');

    module.exports = function validateLoginInput(data) {
        let errors ={};
// Convert empty fields to empty string to use validator functions

    data.userid = !isEmpty(data.userid) ? data.userid : '';
    data.password = !isEmpty(data.password) ? data.password : '';
 
//Userid check
    if (validator.isEmpty(data.userid)){
        errors.userid = 'Userid is required';
    }   
//Password check
    if (validator.isEmpty(data.password)){
        errors.password = 'Password is required';

        return {
            errors,
            isValid: isEmpty(errors)
        };
    };
    }   
