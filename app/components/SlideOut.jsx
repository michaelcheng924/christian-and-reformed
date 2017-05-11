import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { partial } from 'lodash';
import css from 'classnames';
import { Card, CardText } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { EMAIL_REGEX } from 'app/constants/global';
import { login, loginWithToken, signup } from 'app/api/users';
import { logout, setLoginErrorMessage } from 'app/actions/AppActions';
import Admin from 'app/components/Admin';

class SlideOut extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            isSignup: false,
            password: '',
            repeatPassword: '',
            showSlideOut: false
        };

        this.onLoginSignupChange = this.onLoginSignupChange.bind(this);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.updateTextField = this.updateTextField.bind(this);
    }

    componentWillMount() {
        if (typeof window !== 'undefined') {
            const token = window.localStorage.getItem('reformedtoolbox:token');

            if (token) {
                this.props.onLoginWithToken({ token });
            }
        }
    }

    onLogout() {
        if (typeof window !== 'undefined') {
            const confirm = window.confirm('Are you sure you want to log out?');

            if (confirm) {
                this.props.onLogout();
            }
        }
    }

    updateTextField(textField, event) {
        this.setState({ [textField]: event.target.value });

        this.props.onSetLoginErrorMessage(null);
    }

    onLoginSignupChange(event) {
        this.setState({
            email: '',
            isSignup: event.target.value === 'signup',
            password: '',
            repeatPassword: ''
        });

        this.props.onSetLoginErrorMessage(null);
    }

    onLoginSubmit(event) {
        if (!event.which || event.which === 13) {
            const { onLogin, onSetLoginErrorMessage, onSignup } = this.props;
            const { email, isSignup, password, repeatPassword } = this.state;

            if (!EMAIL_REGEX.test(email)) {
                onSetLoginErrorMessage('Please enter a valid email.');
                return;
            }

            if (!email || !password) {
                onSetLoginErrorMessage('A field is empty.');
                return;
            }

            if (isSignup && password !== repeatPassword) {
                onSetLoginErrorMessage('Passwords do not match.');
                return;
            }

            isSignup
                ? onSignup({ email, password })
                : onLogin({ email, password });
        }
    }

    renderOverlay() {
        if (!this.state.showSlideOut) { return null; }

        return <div className="overlay" onClick={() => this.setState({ showSlideOut: false })} />;
    }

    renderLoggedIn() {
        const { onLogout, user, userData } = this.props;

        return (
            <div className="slide-out-content__logged-in-section">
                <div><strong>{user}</strong> is logged in.</div>
                <RaisedButton
                    className="slide-out-content__logout"
                    label="Log out"
                    secondary={true}
                    onClick={this.onLogout}
                />
                <br /><br />
            </div>

        );
    }

    renderLogin() {
        const { loginErrorMessage, user } = this.props;
        const { email, isSignup, password, repeatPassword } = this.state;

        if (user) { return this.renderLoggedIn(); }

        return (
            <div className="slide-out-content__login-section">
                <RadioButtonGroup className="slide-out-content__login-radio-container" name="login" defaultSelected="login" onChange={this.onLoginSignupChange}>
                    <RadioButton
                        className="radio-inline"
                        value="login"
                        label="Login"
                    />
                    <RadioButton
                        className="radio-inline"
                        value="signup"
                        label="Signup"
                    />
                </RadioButtonGroup>
                <div>
                    <TextField
                        className="slide-out-content__login-input"
                        errorText={loginErrorMessage ? ' ' : null}
                        hintText="Email"
                        onChange={partial(this.updateTextField, 'email')}
                        onKeyDown={this.onLoginSubmit}
                        type="email"
                        underlineFocusStyle={{ borderColor: '#1E88E5' }}
                        value={email}
                    />
                    <TextField
                        className="slide-out-content__login-input"
                        errorText={loginErrorMessage ? ' ' : null}
                        hintText="Password"
                        onChange={partial(this.updateTextField, 'password')}
                        onKeyDown={this.onLoginSubmit}
                        type="password"
                        underlineFocusStyle={{ borderColor: '#1E88E5' }}
                        value={password}
                    />
                    {
                        isSignup
                            ? (
                                <TextField
                                    className="slide-out-content__login-input"
                                    errorText={loginErrorMessage ? ' ' : null}
                                    hintText="Repeat password"
                                    onChange={partial(this.updateTextField, 'repeatPassword')}
                                    onKeyDown={this.onLoginSubmit}
                                    type="password"
                                    underlineFocusStyle={{ borderColor: '#1E88E5' }}
                                    value={repeatPassword}
                                />
                            )
                            : null
                    }
                    <RaisedButton
                        className="slide-out-content__login-button"
                        label="Submit"
                        primary={true}
                        onClick={this.onLoginSubmit}
                    />
                </div>
            </div>
        );
    }

    renderLoginErrorMessage() {
        const { loginErrorMessage } = this.props;

        if (!loginErrorMessage) { return null; }

        return <div className="slide-out-content__login-error-message">{loginErrorMessage}</div>;
    }

    render() {
        const { user } = this.props;
        const { showSlideOut } = this.state;

        const classNames = css('slide-out', {
            'slide-out--show': showSlideOut
        });

        return (
            <div>
                {this.renderOverlay()}
                <div className={classNames}>
                    <div className="slide-out-content">
                        <Card className="slide-out-content__card">
                            <CardText className="slide-out-content__card-description">
                                {
                                    user === 'cheng.c.mike@gmail.com'
                                        ? <Admin />
                                        : (
                                            <div>
                                                {this.renderLogin()}
                                                {this.renderLoginErrorMessage()}
                                                <div
                                                    className="fb-like"
                                                    data-href="http://reformedtoolbox.com"
                                                    data-layout="button_count"
                                                    data-action="like"
                                                    data-size="small"
                                                    data-show-faces="true"
                                                    data-share="true"
                                                />
                                            </div>
                                        )
                                }
                            </CardText>
                        </Card>
                    </div>
                    <div
                        className="slide-out__toggle"
                        onClick={() => this.setState({ showSlideOut: !showSlideOut })}
                    >
                        {showSlideOut ? <span>Hide Slide-out &#x2191;</span> : <span>Show Slide-out &#x2193;</span>}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = createSelector(
    state => state.app,
    app => ({ ...app })
);

const mapActionsToProps = {
    onLogin: login,
    onLoginWithToken: loginWithToken,
    onLogout: logout,
    onSetLoginErrorMessage: setLoginErrorMessage,
    onSignup: signup
}

export default connect(mapStateToProps, mapActionsToProps)(SlideOut);
