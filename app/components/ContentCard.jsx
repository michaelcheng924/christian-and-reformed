import React, { Component } from 'react';
import css from 'classnames';
import { delay } from 'lodash';

export default class ContentCard extends Component {
    componentDidMount() {
        delay(() => {
            this.props.setParentState({ showContent: true });
        }, 400);
    }

    render() {
        const { children, showContent } = this.props;

        const classNames = css('app__content-card', {
            'app__content-card--show': showContent
        });

        return (
            <div className={classNames}>
                {children}
            </div>
        );
    }
}
