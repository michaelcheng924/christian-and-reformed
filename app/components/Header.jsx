import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Link } from 'react-router-dom';
import css from 'classnames';
import { partial } from 'lodash';
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
                <CSSTransitionGroup
                    transitionName="headerTransition"
                    transitionAppear={true}
                    transitionAppearTimeout={400}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    <div className={classNames}>
                        <Link to="/" onClick={partial(this.props.onSetApp, null)}>
                            <div className="home__header-title">Christian and Reformed</div>
                        </Link>
                        <div className="home__header-tagline">Technology Serving Historic Truth</div>
                    </div>
                </CSSTransitionGroup>
            </div>
        );
    }
}
