import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { loginUser } from '../actions';

class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.loginUser(this.state)
    }
    
    render() {
        return(
            <div id='center-div'>
                <form onSubmit={ this.onSubmit }>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" onChange= {this.onChange} name="email" value={this.state.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange= {this.onChange} name="password" value={this.state.password} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>      
            </div>
    )}
}

export default withRouter(connect(null, { loginUser })(LoginForm));