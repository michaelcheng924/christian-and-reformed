import React, { Component } from 'react';
import css from 'classnames';

import SlideOut from 'app/components/SlideOut';

export default class Header extends Component {
    render() {
        const { app } = this.props;

        const classNames = css('home__header', {
            'home__header--small': app
        });

        return (
            <div>
                <SlideOut />
                <div className={classNames}>
                    <div className="home__header-title">Reformed Toolbox</div>
                    <div className="home__header-tagline">Technology Serving Truth</div>
                </div>
            </div>
        );
    }
}
