import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Signup extends Component {
    state = {

    }

    render() {
        return (
            <div className="center-div">
                <form>
                <div className="row">
                    <div className="column">
                        <input type="text" class="form-control" placeholder="First Name"/>
                    </div>
                    <div className="column">
                        <input type="text" class="form-control" placeholder="Last Name"/>
                    </div>                
                </div>
               
                    <input type="email" className="form-control" placeholder="you@email.com"/>
                
               
                    <input type="password" className="form-control" placeholder="password"/>
                </form>
            </div>
        )
    }
}

export default withRouter(Signup);