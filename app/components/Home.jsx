import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import css from 'classnames';
import { delay, partial } from 'lodash';
import WarningIcon from 'material-ui-icons/Warning';

import { APP_LIST } from 'app/constants/routes';
import { setApp } from 'app/actions/AppActions';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            leave: false
        };

        this.onAppClick = this.onAppClick.bind(this);
    }

    componentWillMount() {
        if (typeof window !== 'undefined') {
            document.title = 'Christian and Reformed: Technology Serving Historic Truth';
            document.body.style.background = '#90CAF9';
        }
    }

    componentWillLeave(callback) {
        console.log('LEAVE?');
    }

    onAppClick(url) {
        const { history, onSetApp } = this.props;

        onSetApp(url);
        this.setState({ leave: true });

        delay(() => {
            history.push(url);
        }, 400);
    }

	render() {
        const { app } = this.props;
        const { leave } = this.state;

		return (
			<div>
                <div className="home__apps">
                    {
                        APP_LIST.map((app, index) => {
                            const classNames = css('home__app-container', {
                                'home__app-container--leave': leave && index % 2 === 0,
                                'home__app-container--leave-right': leave && index % 2 === 1
                            });

                            return (
                                <CSSTransitionGroup
                                    key={app.title}
                                    transitionName={index % 2 === 0 ? 'homeTransition' : 'homeTransitionRight'}
                                    transitionAppear={true}
                                    transitionAppearTimeout={400}
                                    transitionEnter={false}
                                    transitionLeave={true}
                                    transitionLeaveTimeout={400}
                                >
                                    {
                                        leave
                                            ? null
                                            : (
                                                <div className={classNames} onClick={partial(this.onAppClick, app.url)}>
                                                    <div className="home__app" style={{ background: app.headerBackground }}>
                                                        <div>
                                                            {app.icon}
                                                            <h2>{app.title}</h2>
                                                            <div>{app.description}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                    }
                                </CSSTransitionGroup>
                            );
                        })
                    }
                </div>
            </div>
		);
	}
};

const mapActionsToProps = {
    onSetApp: setApp
};

export default connect(null, mapActionsToProps)(withRouter(Home));
