import React, { Component } from 'react';
import css from 'classnames';

import Login from 'app/components/Login';

export default class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showLogin: false
        };
    }

    render() {
        const { showLogin } = this.state;
        const { app } = this.props;

        const classNames = css('home__header', {
            'home__header--small': app
        });

        return (
            <div>
                <Login showLogin={showLogin} />
                <div
                    className="home__login-toggle"
                    onClick={() => this.setState({ showLogin: !showLogin })}
                >
                    {showLogin ? <span>Hide Login &#x2191;</span> : <span>Show Login &#x2193;</span>}
                </div>
                <div className={classNames}>
                    <div className="home__header-title">Reformed Toolbox</div>
                    <div className="home__header-tagline">Technology Serving Truth</div>
                    <div className="fb-like" data-href="http://reformedtools.com" data-layout="standard" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>
                </div>
            </div>
        );
    }
}
