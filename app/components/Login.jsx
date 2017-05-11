import React, { Component } from 'react';
import css from 'classnames';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends Component {
    render() {
        const classNames = css('home__login', {
            'home__login--show': this.props.showLogin
        });

        return (
            <div className={classNames}>
                <Card className="home__login-card">
                    <CardText className="home__login-card-description">
                        <RadioButtonGroup className="home__login-radio-container" name="login" defaultSelected="login" onChange={this.onLoginSignupChange}>
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
                                className="home__login-input"
                                hintText="Email"
                                underlineFocusStyle={{ borderColor: '#1E88E5' }}
                            />
                            <TextField
                                className="home__login-input"
                                hintText="Password"
                                underlineFocusStyle={{ borderColor: '#1E88E5' }}
                            />
                            <RaisedButton className="home__login-button" label="Submit" primary={true} />
                        </div>
                    </CardText>
                </Card>
            </div>
        );
    }
}