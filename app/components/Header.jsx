import React, { Component } from 'react';
import css from 'classnames';
import { Card, CardText } from 'material-ui/Card';

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
                    <Card className="home__fb">
                        <CardText className="home__fb-card">
                            <div className="fb-like" data-href="http://reformedtools.com" data-layout="standard" data-action="like" data-size="small" data-show-faces="false" data-share="true" />
                        </CardText>
                    </Card>
                </div>
            </div>
        );
    }
}
