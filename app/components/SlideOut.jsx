import React, { Component } from 'react';
import css from 'classnames';
import { Card, CardText } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showSlideOut: false
        };
    }

    renderOverlay() {
        if (!this.state.showSlideOut) { return null; }

        return <div className="overlay" onClick={() => this.setState({ showSlideOut: false })} />;
    }

    render() {
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
                                <div>
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
                                                hintText="Email"
                                                underlineFocusStyle={{ borderColor: '#1E88E5' }}
                                            />
                                            <TextField
                                                className="slide-out-content__login-input"
                                                hintText="Password"
                                                underlineFocusStyle={{ borderColor: '#1E88E5' }}
                                            />
                                            <RaisedButton className="slide-out-content__login-button" label="Submit" primary={true} />
                                        </div>
                                    </div>
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