import React, {Component} from 'react';

export default class Survey extends Component {

    constructor(props) {
        super(props);

        this.onChangeSurveyName  = this.onChangeSurveyName.bind(this);
        this.onChangeSurveyTitle  = this.onChangeSurveyTitle.bind(this);
        this.onChangeSurveyInstitution  = this.onChangeSurveyInstitution.bind(this);
        this.onChangeSurveyTerm  = this.onChangeSurveyTerm.bind(this);
        this.onChangeSurveyQ1 = this.onChangeSurveyQ1.bind(this);
        this.onChangeSurveyQ2 = this.onChangeSurveyQ2.bind(this);
        this.onChangeSurveyQ3 = this.onChangeSurveyQ3.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            survey_name: '',
            survey_title: '',
            survey_institution: '',
            survey_term: '',
            survey_q1: '',
            survey_q2: '',
            survey_q3: '',
            survey_completed: false
        }
    }
        onChangeSurveyName(e) {
            this.setState({
                survey_name: e.target.value
            });
        }
        onChangeSurveyTitle(e) {
            this.setState({
                survey_title: e.target.value
            });
        }
        onChangeSurveyInstitution(e) {
            this.setState({
                survey_institution: e.target.value
            });
        }
        onChangeSurveyTerm(e) {
            this.setState({
                survey_term: e.target.value
            });
        }
        onChangeSurveyQ1(e) {
            this.setState({
                survey_q1: e.target.value
            });
        }
        onChangeSurveyQ2(e) {
            this.setState({
                survey_q2: e.target.value
            });
        }
        onChangeSurveyQ3(e) {
            this.setState({
                survey_q3: e.target.value
            });
        }
        onSubmit(e) {
            e.preventDefault();

            console.log(`Survey submitted:`);
            console.log(`Survey Name: ${this.state.survey_name}`);
            console.log(`Survey Title: ${this.state.survey_title}`);
            console.log(`Survey Institution: ${this.state.survey_institution}`);
            console.log(`Survey Term: ${this.state.survey_term}`);
            console.log(`Survey Q1: ${this.state.survey_q1}`);
            console.log(`Survey Q2: ${this.state.survey_q2}`);
            console.log(`Survey Q3: ${this.state.survey_q3}`);

            this.setState({
                   survey_name: '',
                    survey_title: '',
                    survey_institution: '',
                    survey_term: '',
                    survey_q1: '',
                    survey_q2: '',
                    survey_q3: '',
                    survey_completed: false
            })
        }

    render(){
            return (
                <div className="container">
                    <div style = {{marginTop: 10}}>
                    <h2>Administrator Information</h2>
                    <form onSubmit = {this.onSubmit}>
                        <div className = "form-group">
                            <label> Administrator Name (Required)</label>
                            <input type="text" 
                                className="form-control" 
                                id="adminName"
                                value = {this.state.survey_name}
                                onChange={this.onChangeSurveyName}
                            />
                        </div>  
                        <div className = "form-group">
                            <label>Administrator Title (Required)</label>
                            <input type="text" 
                                className="form-control" 
                                id="adminTitle"
                                value = {this.state.survey_title}
                                onChange={this.onChangeSurveyTitle}
                            />
                        </div>
                        <div className = "form-group">
                            <label>Institution (Required)</label>
                            <input type="text" 
                                className="form-control"
                                id="adminInstitution" 
                                value = {this.state.survey_institution}
                                onChange={this.onChangeSurveyInstitution}
                            />
                        </div>
                        <div className = "form-group">
                            <label>Current Academic Term (Required)</label>
                            <input type="text" 
                                className="form-control"
                                id="acadTerm" 
                                value = {this.state.survey_term}
                                onChange={this.onChangeSurveyTerm}
                            />
                        </div>
                        <hr></hr>
                        <h2>Survey Questions</h2>
                            <div className="form-group">
                                <h3><strong>Question 1</strong></h3>
                                <h4>Your administrator is knowledgeable of institutional rules and procedures.</h4>
                                <select class="form control" id="q1">
                                <input value = {this.state.survey_q1}
                                    onChange={this.onChangeSurveyQ1}
                                    />
                                    <option value></option> 
                                    <option value="1">1 (Strongly Disagree)</option>
                                    <option value="2">2 (Disagree)</option>
                                    <option value="3">3 (Neutral)</option>
                                    <option value="4">4 (Agree)</option>
                                    <option value="5">5 (Strongly Agree)</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <h3><strong>Question 2</strong></h3>
                                <h4>Your administrator meets frequently with faculty.</h4>
                                <select class="form control" id="q2">
                                <input value = {this.state.survey_q2}
                                    onChange={this.onChangeSurveyQ2}
                                    />
                                    <option value></option> 
                                    <option value="1">1 (Strongly Disagree)</option>
                                    <option value="2">2 (Disagree)</option>
                                    <option value="3">3 (Neutral)</option>
                                    <option value="4">4 (Agree)</option>
                                    <option value="5">5 (Strongly Agree)</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <h3><strong>Question 3</strong></h3>
                                <h4>Your administrator is open to faculty input.</h4>
                                <select class="form control" id="q3">
                                <input value = {this.state.survey_q3}
                                    onChange={this.onChangeSurveyQ3}
                                    />
                                    <option value></option> 
                                    <option value="1">1 (Strongly Disagree)</option>
                                    <option value="2">2 (Disagree)</option>
                                    <option value="3">3 (Neutral)</option>
                                    <option value="4">4 (Agree)</option>
                                    <option value="5">5 (Strongly Agree)</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Submit Survey" className="btn btn-primary"/>
                            </div>
                    </form>
                </div>
            </div>
            )
        }
     };
