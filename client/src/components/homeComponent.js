import React, {Component} from 'react';

export default class Home extends Component {
    render(){
        return (
            <div>
                {/* <p>Welcome to the Home Component</p> */}
                <h2>Welcome to Rate My Administrator!</h2>
                <p>This website is dedicated to an honest, unbiased, and anonymous assessment of administrators from academic institutions.</p> 
                <h3>Users</h3>
                <p>To guarantee professionalism and authenticity, users are required to create an account with an academic email i.e. an  email ending with ".edu".</p>
                <p>All users will remain anonymous.</p>
            </div>
        )
    }
}