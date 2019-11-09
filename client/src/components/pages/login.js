import React, {Component} from 'react';

export default class Login extends Component {

    constructor(props) {
        super(props);
//Name
        this.onChangeUserName  = this.onChangeUserName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

//Email
        this.onChangeUserEmail  = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

//UserID
        this.onChangeUserUserId  = this.onChangeUserId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

//Password
        this.onChangeUserPassword  = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);        
        
//Name   
        this.state = {
            user_name: '',
            account_completed: false,
            user_email: '',
            account_completed: false,
            user_id: '',
            account_completed: false,
            user_password: ''
        }
    }
    onChangeUserName(e) {
        this.setState({
            user_name: e.target.value
        });
    }
    onChangeUserEmail(e) {
        this.setState({
            user_email: e.target.value
        });
    }
    onChangeUserId(e) {
        this.setState({
            user_id: e.target.value
        });
    }

    onChangeUserPassword(e) {
        this.setState({
            user_password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`User Info submitted:`);
        console.log(`User Response: ${this.state.user_name}`);

        this.setState({
            user_name:'',
            account_completed: false
        })
    }
//
    render(){
        return (
            <div className="container">
                <h2>Create An Account Here!</h2>
                <div style = {{marginTop: 10}}>
                    <form onSubmit = {this.onSubmit}>
                        <div className = "form-group">
                            <label>First Name, Last Name (Required)</label>
                            <input type="text" 
                                className="form-control" 
                                id="userName"
                                value = {this.state.user_name}
                                onChange={this.onChangeUserName}
                            />
                        </div>  
                        <div className = "form-group">
                            <label>Academic E-mail Address (Required)</label>
                            <input type="text" 
                                className="form-control" 
                                id="userEmail"
                                value = {this.state.user_email}
                                onChange={this.onChangeUserEmail}
                            />
                        </div>
                        <div className = "form-group">
                            <label>Create Userid</label>
                            <input type="text" 
                                className="form-control"
                                id="userID" 
                                value = {this.state.user_id}
                                onChange={this.onChangeUserId}
                            />
                        </div>
                        <div className = "form-group">
                            <label>Create Password</label>
                            <input type="text" 
                                className="form-control"
                                id="userPassword" 
                                value = {this.state.user_password}
                                onChange={this.onChangeUserPassword}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Create Account" className="btn btn-success"
                            />
                        </div>
                    </form>
                </div> 
            </div>                       
        )
    }
}