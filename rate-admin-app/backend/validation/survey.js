//Required dependencies
const validator = require('validator');
const isEmpty = require('is-empty');

    module.exports = function validateSurveyInput(data) {
        let errors ={};
// Convert empty fields to empty string to use validator functions
    data.survey_name = !isEmpty(data.survey_name) ? data.survey_name : '';
    data.survey_title = !isEmpty(data.survey_title) ? data.survey_title : '';
    data.survey_institution = !isEmpty(data.institution) ? data.institution : '';
    data.survey_term = !isEmpty(data.survey_term) ? data.survey_term : '';
    data.survey_q1 = !isEmpty(data.survey_q1) ? data.survey_q1 : '';
    data.survey_q2 = !isEmpty(data.survey_q2) ? data.survey_q2 : '';
    data.survey_q3 = !isEmpty(data.survey_q3) ? data.survey_q3 : '';
//Survey Name check
    if (validator.isEmpty(data.survey_name)){
        errors.survey_name = 'Administrator name is required';
    }
//Survey Title check
    if (validator.isEmpty(data.survey_title)){
        errors.survey_title = 'Administrator title is required';
    }
//Institution check
    if (validator.isEmpty(data.survey_institution)){
        errors.survey_institution = 'Survey institution is required';
    }
//Term check
    if (validator.isEmpty(data.survey_term)){
    errors.survey_term = 'Survey term is required';
}
//Question 1 check
    if (validator.isEmpty(data.survey_q1)){
    errors.survey_q1 = 'Survey question one is required';

//Question 2 check
    if (validator.isEmpty(data.survey_q2)){
    errors.survey_q2 = 'Survey question two is required';

//Question 1 check
    if (validator.isEmpty(data.survey_q1)){
        errors.survey_q3 = 'Survey question three is required';
    };
};
}};   