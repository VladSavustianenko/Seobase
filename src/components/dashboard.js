import React, {Component} from 'react'

import Header from './header'
import Main from './main'

class Dashboard extends Component {
    render() {
        return (
            <>
                <Header email={this.props.email} />
                <Main email={this.props.email} />
            </>
        )
    }
}

export default Dashboard
