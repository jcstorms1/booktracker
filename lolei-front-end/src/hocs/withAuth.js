import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


const withAuth = WrappedComponent => {
    class AuthedComponent extends Component {
        state = {
            authenticated : this.props.loggedIn
        }

        componentDidMount() {
            // if there is not a currentUser in redux store
            if (localStorage.getItem('token') && !this.props.loggedIn){
                this.props.getCurrentUser();
            } else {
                this.setState({ authenticated: true})
            }
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.loggedIn) {
                this.setState({ authenticated: true})
            }
        }

        render () {
            if (this.state.authenticated) {
                return this.props.loggedIn ? (
                <WrappedComponent {...this.props}/> 
                ) : (
                <Redirect to='/'/>
                )
            } else {
                return null;
            }
        }
    }

    const mapStateToProps = state => ({
        loggedIn: !!state.auth.currentUser.id
    })

    return connect(mapStateToProps, actions)(AuthedComponent)
}

export default withAuth;