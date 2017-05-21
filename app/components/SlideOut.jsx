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
import { login, loginWithToken, signup } from 'app/api/users';
import { logout, setLoginErrorMessage } from 'app/actions/AppActions';
import Admin from 'app/components/Admin';

class SlideOut extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showSlideOut: false
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.showSlideOut !== prevState.showSlideOut) {
            $('body').css(this.state.showSlideOut ? {
                height: '100vh',
                overflow: 'hidden'
            } : {
                height: 'initial',
                overflow: 'auto'
            });
        }
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
                                    <h2>How you can help:</h2>
                                    <br />
                                    <span>Like the Facebook page</span>
                                    <div
                                        className="fb-like"
                                        data-href="https://www.facebook.com/christianandreformed/"
                                        data-layout="button_count"
                                        data-action="like"
                                        data-size="small"
                                        data-show-faces="true"
                                    />
                                    <br /><br />
                                    <span>Share this website</span>
                                    <div dangerouslySetInnerHTML={{__html: '<div class="fb-share-button" data-href="http://christianandreformed.com" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fchristianandreformed.com%2F&amp;src=sdkpreparse">Share</a></div>'}} />
                                    <br /><br />
                                    <div>
                                        Visit the <a href="https://www.facebook.com/christianandreformed/" target="_blank">Facebook</a> page to...
                                        <ul>
                                            <li>Add or edit information for a church</li>
                                            <li>Request a feature</li>
                                            <li>Report a bug</li>
                                            <li>Share your experience</li>
                                            <li>Just chat about whatever you want</li>
                                        </ul>
                                    </div>
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
