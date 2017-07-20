// patreon@car.com
// stats!

import $ from 'jquery';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { get, map, partial } from 'lodash';
import css from 'classnames';
import { Card, CardText } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { EMAIL_REGEX } from 'app/constants/global';
import { addCourseCount, addScore, addLeaderboard, login, loginWithToken, signup, deleteScore } from 'app/api/users';
import { logout, setApp, setLoginErrorMessage } from 'app/actions/AppActions';

class Admin extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            isSignup: false,
            password: '',
            repeatPassword: '',
            statistics: null
        };

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

    componentDidMount() {
        setTimeout(() => {
            $.ajax({
                context: this,
                url: '/api/global/getfbstats',
                contentType: 'application/json',
                success(response) {
                    try {
                        this.setState({ statistics: JSON.parse(response.body).data[0] });
                    } catch(err) {

                    }
                }
            })
        }, 500);
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
        const stats = this.state.statistics;

        const costPerVisit = get(stats, 'cost_per_outbound_click[0].value', 0);
        const costPerVisitFinal = costPerVisit ? `$${parseFloat(Math.round(costPerVisit * 100) / 100).toFixed(2)}` : 'Error :(';

        const oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        const firstDate = new Date(stats.date_start);
        const secondDate = new Date(stats.date_stop);

        const diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

        return (
            <div className="statistics">
                <div className="statistics__nav">
                    <span><Link to="/" onClick={partial(this.props.onSetApp, '/')}>Home</Link></span>
                    {` | `}
                    <span onClick={this.props.onLogout}>Log out</span>
                </div>
                <div className="statistics__heading">
                    Christian and Reformed<br />
                    App Statistics
                </div>

                <div className="statistics__content-container">
                    <div className="statistics__content">
                        <div className="statistics__content-field">
                            <div>Time range</div>
                            <h2>Last 30 days</h2>
                        </div>
                    </div>
                    <div className="statistics__content">
                        <div className="statistics__content-field">
                            <div>Amount spent</div>
                            <h2>{`$${stats.spend}`}</h2>
                        </div>
                    </div>
                </div>
                <div className="statistics__content-container">
                    <div className="statistics__content">
                        <a href="https://www.facebook.com/christianandreformed/posts/1399520410131584?ref=notif&notif_t=like&notif_id=1499776119482864" target="_blank"><img src="/fb-ad.png" style={{ width: 400, height: 384 }} /></a>
                        <div className="statistics__content-stats">
                            <div className="statistics__content-field">
                                <div>Ad views</div>
                                <h2>{stats.impressions}</h2>
                            </div>
                            <div className="statistics__content-field">
                                <div>Cost per ad view</div>
                                <h2>{`${parseFloat((stats.spend / stats.impressions) * 100).toFixed(2)} cents`}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="statistics__content-container">
                    <div className="statistics__content">
                        <a href="http://app.christianandreformed.com/repent-believe" target="_blank"><img src="/repent-believe-image.png" style={{ width: 400, height: 384 }} /></a>
                        <div className="statistics__content-stats">
                            <div className="statistics__content-field">
                                <div>Website visits</div>
                                <h2>{stats.outbound_clicks[0].value}</h2>
                            </div>
                            <div className="statistics__content-field">
                                <div>Cost per website visit</div>
                                <h2>{costPerVisitFinal}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { user } = this.props;
        const { statistics } = this.state;

        if (user === 'patreon@car.com' && statistics) {
            return this.renderContent();
        }

        if (user === 'patreon@car.com') {
            return <h1>Loading statistics...</h1>;
        }

        if (!user) {
            return (
                <div>
                    <div>
                        {this.renderLogin()}
                        {this.renderLoginErrorMessage()}
                    </div>
                </div>
            );
        }

        return <span onClick={this.props.onLogout}>Log out</span>;
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
    onSetApp: setApp,
    onSetLoginErrorMessage: setLoginErrorMessage,
    onSignup: signup
}

export default connect(mapStateToProps, mapActionsToProps)(Admin);
