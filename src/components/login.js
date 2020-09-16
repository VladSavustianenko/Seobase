import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

import logo from '../logo_white.svg'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            disabled: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.emailHandler = this.emailHandler.bind(this)
        this.passwordHandler = this.passwordHandler.bind(this)
    }

    emailHandler(e) {
        this.setState({email: e.target.value})
    }

    passwordHandler(e) {
        this.setState({password: e.target.value})
        
    }

    handleChange() {
        if (this.state.email.length >= 8 && this.state.password.length >= 8) {
            this.setState({disabled: false})
        } else {
            this.setState({disabled: true})
        }
    }

    handleSubmit() {
        this.props.liftingEmail(this.state.email)
        console.log(this.state.email)
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 m-auto">
                        <img alt="" className="d-block mb-5 ml-auto mr-auto mt-5" src={logo} />
                        <form
                            className="form"
                            onSubmit={this.handleSubmit}
                            onChange={this.handleChange}
                        >
                            <h1>Log In</h1>
                            <label name="email" className="d-block">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                htmlFor="email"
                                className="d-block"
                                onChange={e => this.emailHandler(e)}
                            />
                            <div className="label">
                                <label
                                    name="password"
                                    className="d-inline-flex mr-auto">Password
                                </label>
                                <a href="#">Forgot Password?</a>
                            </div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                htmlFor="password"
                                className="d-block"
                                onChange={e => this.passwordHandler(e)}
                            />
                            <span id="passwordErrorMess"></span>
                            <button type="submit" disabled={this.state.disabled} className="btn btn-info w-100 mt-4">Log In</button>
                            <div className="form-bottom">
                                <span className="text-secondary">Don't have an account? <a href="#">Sign Up</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)
