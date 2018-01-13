import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';

import  withAuth  from '../hocs/withAuth'


class Dashboard extends Component {
    render() {
        return (
            <div><h1>hi</h1></div>
            
        )
    }
}

export default withRouter(withAuth(Dashboard));