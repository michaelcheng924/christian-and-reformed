import $ from 'jquery';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { map, partial } from 'lodash';
import css from 'classnames';
import { Card, CardText } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { EMAIL_REGEX } from 'app/constants/global';
import { addScore, addLeaderboard, login, loginWithToken, signup, deleteScore } from 'app/api/users';
import { logout, setLoginErrorMessage } from 'app/actions/AppActions';

class Admin extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            isSignup: false,
            leaderboardKey: '',
            password: '',
            repeatPassword: ''
        };

        this.deleteScore = this.deleteScore.bind(this);
        this.onAddLeaderboard = this.onAddLeaderboard.bind(this);
        this.onLoginSignupChange = this.onLoginSignupChange.bind(this);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.updateTextField = this.updateTextField.bind(this);
    }

    componentWillMount() {
        if (typeof window !== 'undefined') {
            const token = window.localStorage.getItem('christianandreformed:token');

            if (token) {
                this.props.onLoginWithToken({ token });
            }

            document.body.style.background = '#FFF';
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.showAdmin !== prevState.showAdmin) {
            $('body').css(this.state.showSlideOut ? {
                height: '100vh',
                overflow: 'hidden'
            } : {
                height: 'initial',
                overflow: 'auto'
            });
        }
    }

    deleteScore(key, index) {
        if (typeof window !== 'undefined') {
            const confirm = window.confirm('Are you sure you want to delete this score?');

            if (confirm) {
                this.props.onDeleteScore({ key, index });
            }
        }
    }

    onAddLeaderboard() {
        this.props.onAddLeaderboard({ leaderboardKey: this.state.leaderboardKey });
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

    renderLogin() {
        const { loginErrorMessage, user } = this.props;
        const { email, isSignup, password, repeatPassword } = this.state;

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

    renderContent() {
        const { appData } = this.props;

        return (
            <div className="admin">
                <div className="admin__leaderboards">
                    {
                        map(appData, (scores, key) => {
                            return (
                                <div key={key}>
                                    <h3>{key}</h3>
                                    {
                                        scores.map((score, index) => {
                                            return <div key={index}>{`${score.score} | ${score.name}`} || <span onClick={partial(this.deleteScore, key, index)}>X</span></div>;
                                        })
                                    }
                                </div>
                            );
                        })
                    }
                </div>
                <div>
                    <TextField
                        hintText="Add leaderboard"
                        onChange={event => this.setState({ leaderboardKey: event.target.value })}
                        type="text"
                    />
                    <RaisedButton
                        label="Add Leaderboard"
                        secondary={true}
                        onClick={this.onAddLeaderboard}
                    />
                </div>
                <RaisedButton
                    className="slide-out-content__logout"
                    label="Log out"
                    secondary={true}
                    onClick={this.onLogout}
                />
            </div>
        );
    }

    render() {
        const { appData, user } = this.props;
        const { showSlideOut } = this.state;

        const classNames = css('slide-out', {
            'slide-out--show': showSlideOut
        });

        return (
            <div>
                {
                    user === 'cheng.c.mike@gmail.com' && appData
                        ? this.renderContent()
                        : (
                            <div>
                                {this.renderLogin()}
                                {this.renderLoginErrorMessage()}
                            </div>
                        )
                }
            </div>
        );
    }
}

const mapStateToProps = createSelector(
    state => state.app,
    app => ({ ...app })
);

const mapActionsToProps = {
    onAddLeaderboard: addLeaderboard,
    onAddScore: addScore,
    onDeleteScore: deleteScore,
    onLogin: login,
    onLoginWithToken: loginWithToken,
    onLogout: logout,
    onSetLoginErrorMessage: setLoginErrorMessage,
    onSignup: signup
}

export default connect(mapStateToProps, mapActionsToProps)(Admin);
