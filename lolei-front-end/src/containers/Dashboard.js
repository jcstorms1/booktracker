import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

class Dashboard extends Component() {

    render() {
        return (
            <div>
                <h1>I'm a Dashboard!</h1>
            </div>
        )
    }
}

export default Dashboard;