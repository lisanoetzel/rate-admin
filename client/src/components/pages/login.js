import React, {Component} from 'react';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.onChangeUserInfo  = this.onChangeUserInfo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_info: '',
            account_completed: false
        }
    }
    onChangeUserInfo(e) {
        this.setState({
            user_info: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        console.log(`User Info submitted:`);
        console.log(`User Response: ${this.state.user_info}`);

        this.setState({
            user_info:'',
            account_completed: false
        })
    }
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
                                value = {this.state.user_info}
                                onChange={this.onChangeUserInfo}
                            />
                        </div>  
                        <div className = "form-group">
                            <label>Academic E-mail Address (Required)</label>
                            <input type="text" 
                                className="form-control" 
                                id="userEmail"
                                value = {this.state.user_info}
                                onChange={this.onChangeUserInfo}
                            />
                        </div>
                        <div className = "form-group">
                            <label>Create Userid</label>
                            <input type="text" 
                                className="form-control"
                                id="userID" 
                                value = {this.state.user_info}
                                onChange={this.onChangeUserInfo}
                            />
                        </div>
                        <div className = "form-group">
                            <label>Create Password</label>
                            <input type="text" 
                                className="form-control"
                                id="userPassword" 
                                value = {this.state.user_info}
                                onChange={this.onChangeUserInfo}
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