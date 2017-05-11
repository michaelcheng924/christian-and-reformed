import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { partial } from 'lodash';
import { createSelector } from 'reselect';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentClear from 'material-ui/svg-icons/content/clear';

import { setApp } from 'app/actions/AppActions';
import Header from 'app/components/Header';
import Home from 'app/components/Home';
import VideoAudio from 'app/components/VideoAudio';
import ChurchFinder from 'app/components/ChurchFinder';
import ConfessionsCreeds from 'app/components/ConfessionsCreeds';
import LondonBaptistConfession from 'app/components/ConfessionsCreeds/london-baptist';
import CatechismTraining from 'app/components/CatechismTraining';

class App extends Component {
    componentWillMount() {
        if (typeof window !== 'undefined') {
            const pathname = window.location.pathname;
            if (pathname !== '/') {
                this.props.onSetApp(pathname);
            }
        }
    }

    renderBack() {
        if (!this.props.app) { return null; }

        return (
            <Link to="/" onClick={partial(this.props.onSetApp, null)}>
                <FloatingActionButton className="app__back-button" mini={true} secondary={true}>
                    <ContentClear />
                </FloatingActionButton>
            </Link>
        );
    }

    render() {
        const { app, onSetApp } = this.props;

        const Component = typeof window === 'undefined' ? 'div' : BrowserRouter;

        return (
            <Component>
                <MuiThemeProvider>
                    <div>
                        <Header app={app} />
                        <Route exact path="/" component={Home}/>
                        <Route path="/reformed-video-audio" component={VideoAudio}/>
                        <Route path="/reformed-church-finder" component={ChurchFinder}/>
                        <Route path="/confessions-creeds" component={ConfessionsCreeds}/>
                        <Route path="/1689-london-baptist-confession" component={LondonBaptistConfession}/>
                        <Route path="/catechism-practice" component={CatechismTraining}/>
                        {this.renderBack()}
                    </div>
                </MuiThemeProvider>
            </Component>
        );
    }
}

const mapStateToProps = createSelector(
    state => state.app,
    app => ({ ...app })
);

const mapActionsToProps = {
    onSetApp: setApp
};

export default connect(mapStateToProps, mapActionsToProps)(App);
