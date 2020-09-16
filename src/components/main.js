import React, {Component} from 'react'

class Main extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 bg-white pr-0 pt-3 leftbar">
                        <ul>
                            <li>
                                <a href="#" className="active-link"><span className="fa fa-user-cog mr-2"></span>Accaunt Info</a>
                            </li>
                            <li>
                                <a href="#"><span className="fa fa-users mr-2"></span>Users</a>
                            </li>
                            <li>
                                <a href="#"><span className="fa fa-scroll mr-2"></span>Subscription</a>
                            </li>
                            <li>
                                <a href="#"><span className="fa fa-money-bill mr-2"></span>Billing</a>
                            </li>
                            <li>
                                <a href="#"><span className="fa fa-file-invoice mr-2"></span>Invoices</a>
                            </li>
                            <li>
                                <a href="#"><span className="fa fa-shield-alt mr-2"></span>GDPR</a>
                            </li>
                            <li>
                                <a href="/"><span className="fa fa-sign-out-alt mr-2"></span>Log Out</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-10 main">
                        <div className="main-header">
                            <h2>Account Info</h2>
                            <button className="btn-delete">Delete Account</button>
                        </div>
                        <div className="main-content bg-white">
                            <div className="info">
                                <span>
                                    <b><span className="fa fa-volume-up mr-2"></span>Verify your email. </b>We seend the verification link to <b>{this.props.email}</b>
                                </span>
                                <button className="btn-reset">Reset the link</button>
                            </div>
                            <form>
                                <div className="group-email">
                                    <label>Email:</label>
                                    <span className="mt-3 ml-5">{this.props.email}</span>
                                </div>
                                <div className="group-password">
                                    <label className="mr-3">Password:</label>
                                    <input placeholder="Current password" />
                                    <input placeholder="Set new password" />
                                    <input placeholder="Confirm new password" />
                                    <button className="btn btn-info pt-0 pb-0 pl-4 pr-4">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
