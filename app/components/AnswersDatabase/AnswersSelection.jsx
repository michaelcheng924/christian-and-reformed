import $ from 'jquery';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Forward from 'material-ui/svg-icons/content/forward';

import { ANSWERS_DATABASE_MAP } from 'app/components/AnswersDatabase/constants';
import { setApp, setSubApp } from 'app/actions/AppActions';

class AnswersSelection extends Component {
    constructor(props) {
        super(props);
        
        this.onBackClick = this.onBackClick.bind(this);
    }

    componentWillMount() {
        if (typeof window !== 'undefined') {
            this.props.onSetApp('/answers-database');

            const pathname = window.location.pathname;

            if (ANSWERS_DATABASE_MAP[pathname]) {
                this.props.onSetSubApp(pathname);

                document.title = `${ANSWERS_DATABASE_MAP[pathname].title} - Christian and Reformed App`;
            }
        }
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            $('body').scrollTop(0);
        }
    }

    onBackClick() {
        this.props.onSetSubApp(null);

        if (this.props.app === '/') {
            this.props.onSetApp('/answers-database');
        }
    }

    render() {
        const selection = ANSWERS_DATABASE_MAP[this.props.subApp] || {};

        return (
            <div className="answers-database__selection">
                <Link to="/answers-database" onClick={this.onBackClick}>
                    <FloatingActionButton className="answers-database__back-button" mini={true}>
                        <Forward style={{ transform: 'rotate(180deg)' }} />
                    </FloatingActionButton>
                </Link>
                <div className="answers-database__selection-images">
                    {
                        selection.tags && selection.tags.map(tag => {
                            return (
                                <img key={tag} className="answers-database__selection-image" src={`/tag-${tag}.png`} />
                            );
                        })
                    }
                </div>
                <h2>{selection.title}</h2>
                <div className="answers-database__selection-argument">
                    <h3>Argument</h3>
                    {selection.argument}
                </div>
                <div className="answers-database__selection-answer">
                    {selection.answer}
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
    onSetApp: setApp,
    onSetSubApp: setSubApp
};

export default connect(mapStateToProps, mapActionsToProps)(AnswersSelection);
