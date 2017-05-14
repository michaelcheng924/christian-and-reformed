import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { delay } from 'lodash';

class AppHeader extends Component {
    componentDidMount() {
        delay(() => {
            this.props.setParentState({ showContent: true });
        }, 400);
    }

    render() {
        const { children, title, subtitle } = this.props;

        return (
            <CSSTransitionGroup
                transitionName="appHeader"
                transitionAppear={true}
                transitionAppearTimeout={400}
                transitionEnter={false}
                transitionLeave={true}
                transitionLeaveTimeout={400}
            >
                {
                    this.props.showHeader
                        ? (
                            <div className="header">
                                <div>
                                    <div className="header-title">{title}</div>
                                    <div className="header-subtitle">{subtitle}</div>
                                    {children}
                                </div>
                            </div>
                        )
                        : null
                }
            </CSSTransitionGroup>
        );
    }
}

export default AppHeader;
