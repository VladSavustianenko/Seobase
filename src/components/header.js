import React, {Component} from 'react'

import logo from '../logo_white.svg'

class Header extends Component {
    render() {
        return (
            <div className="jumbotron bg-primary pt-3 pb-3 mb-0">
                <div className="header">
                    <img alt="" src={logo} />
                    <a href="#" className="text-white mr-auto ml-5 mt-2"><span className="fa fa-clock mr-2"></span>Dashboard</a>
                    <a href="#" className="text-white email mt-2">{this.props.email}<span className="fa fa-check ml-2"></span></a>
                </div>
            </div>
        )
    }
}

export default Header
